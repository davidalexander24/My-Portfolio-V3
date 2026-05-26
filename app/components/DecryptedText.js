"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from 'react';

const styles = {
  wrapper: {
    display: 'inline-block',
    whiteSpace: 'pre-wrap'
  },
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    border: 0
  }
};

export default function DecryptedText({
  text,
  speed = 100,
  maxIterations = 1,
  sequential = true,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'BCDFGHJKLMNPQRSTVWXYZbcdfghj@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  clickMode = 'once',
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isDecrypted, setIsDecrypted] = useState(animateOn !== 'click');

  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const revealedRef = useRef(new Set());
  const directionRef = useRef('forward');
  const iterationRef = useRef(0);

  const availableChars = useMemo(() => {
    return useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter(char => char !== ' ')
      : characters.split('');
  }, [useOriginalCharsOnly, text, characters]);

  const shuffleText = useCallback(
    (originalText, currentRevealed) => {
      return originalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (currentRevealed.has(i)) return originalText[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join('');
    },
    [availableChars]
  );

  const getNextIndex = useCallback((revealedSet) => {
    const textLength = text.length;
    switch (revealDirection) {
      case 'start':
        return revealedSet.size;
      case 'end':
        return textLength - 1 - revealedSet.size;
      case 'center': {
        const middle = Math.floor(textLength / 2);
        const offset = Math.floor(revealedSet.size / 2);
        const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;
        if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
          return nextIndex;
        }
        for (let i = 0; i < textLength; i++) {
          if (!revealedSet.has(i)) return i;
        }
        return 0;
      }
      default:
        return revealedSet.size;
    }
  }, [text.length, revealDirection]);

  const triggerDecrypt = useCallback(() => {
    revealedRef.current = new Set();
    directionRef.current = 'forward';
    iterationRef.current = 0;
    setIsAnimating(true);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    intervalRef.current = setInterval(() => {
      const direction = directionRef.current;
      const revealed = revealedRef.current;

      if (sequential) {
        if (direction === 'forward') {
          if (revealed.size < text.length) {
            const nextIndex = getNextIndex(revealed);
            revealed.add(nextIndex);
            setDisplayText(shuffleText(text, revealed));
          } else {
            clearInterval(intervalRef.current);
            setIsAnimating(false);
            setIsDecrypted(true);
          }
        }
      } else {
        if (direction === 'forward') {
          iterationRef.current++;
          if (iterationRef.current >= maxIterations) {
            clearInterval(intervalRef.current);
            setDisplayText(text);
            setIsAnimating(false);
            setIsDecrypted(true);
          } else {
            setDisplayText(shuffleText(text, revealed));
          }
        }
      }
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [isAnimating, text, speed, maxIterations, sequential, shuffleText, getNextIndex]);

  // View observer
  useEffect(() => {
    if (animateOn !== 'view') return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            triggerDecrypt();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, [animateOn, hasAnimated, triggerDecrypt]);

  // Hover behaviour
  const triggerHoverDecrypt = useCallback(() => {
    if (isAnimating) return;
    revealedRef.current = new Set();
    directionRef.current = 'forward';
    iterationRef.current = 0;
    setIsDecrypted(false);
    setIsAnimating(true);
  }, [isAnimating]);

  const resetToPlainText = useCallback(() => {
    clearInterval(intervalRef.current);
    setIsAnimating(false);
    revealedRef.current = new Set();
    setDisplayText(text);
    setIsDecrypted(true);
  }, [text]);

  // Init
  useEffect(() => {
    if (animateOn === 'click') {
      setDisplayText(shuffleText(text, new Set()));
      setIsDecrypted(false);
    } else {
      setDisplayText(text);
      setIsDecrypted(true);
    }
  }, [animateOn, text, shuffleText]);

  const animateProps =
    animateOn === 'hover'
      ? { onMouseEnter: triggerHoverDecrypt, onMouseLeave: resetToPlainText }
      : {};

  return (
    <span className={parentClassName} ref={containerRef} style={styles.wrapper} {...animateProps} {...props}>
      <span style={styles.srOnly}>{displayText}</span>
      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone = revealedRef.current.has(index) || (!isAnimating && isDecrypted);
          return (
            <span key={index} className={isRevealedOrDone ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
}
