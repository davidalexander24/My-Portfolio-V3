"use client";

import { IoLocationOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import DecryptedText from './DecryptedText';

export default function Hero() {
  return (
    <>
      <div className="inter-bold text-3xl sm:text-5xl">
        <h1 className="mr-2">
          <DecryptedText
            text="David Alexander,"
            animateOn="view"
            speed={40}
            maxIterations={1}
            revealDirection="start"
          />
        </h1>
        <h1 className="pt-1 md:pt-3">
          <DecryptedText
            text="Full-Stack Developer."
            animateOn="view"
            speed={40}
            maxIterations={1}
            revealDirection="start"
            splitAt={11}
            splitClassName="grays2"
            style={{ whiteSpace: 'nowrap' }}
          />
        </h1>
      </div>
      <div className="text-base -mt-2 md:-mt-0 sm:text-xl inter flex flex-col grays2">
        <div className="flex flex-row items-center gap-1">
          <h1><IoLocationOutline /></h1>
          <h1>
            <DecryptedText
              text="Jakarta, Indonesia"
              animateOn="view"
              speed={40}
              maxIterations={1}
              revealDirection="start"
            />
          </h1>
        </div>
        <div className="flex flex-row text-3xl sm:text-[40px] pt-2 sm:pt-3 gap-2 items-center">
          <a className="hover:opacity-60 duration-300 ease-in-out" href="https://www.github.com/davidalexander2411"><IoLogoGithub /></a>
          <a className="text-[34px] sm:text-[44px] hover:opacity-60 duration-300 ease-in-out" href="https://www.linkedin.com/in/david-alexander-3a3601325/"><AiOutlineLinkedin /></a>
          <a className="hover:opacity-60 duration-300 ease-in-out" href="https://www.instagram.com/david.alexander24"><FaInstagram /></a>
        </div>
      </div>
    </>
  );
}
