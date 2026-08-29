"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useSpring, useVelocity, useTransform } from 'framer-motion';


const ExperienceEducation = () => {
    const [activeSection, setActiveSection] = useState('Experience')
    const sections = ['Experience', 'Education'];
    const activeIndex = sections.indexOf(activeSection);
    // Drive the pill with a spring; stretch is coupled to its velocity so it
    // elongates while moving fast and relaxes back to normal once it settles.
    const progress = useSpring(0, { stiffness: 300, damping: 33 });
    useEffect(() => { progress.set(activeIndex * 100); }, [activeIndex, progress]);
    const x = useTransform(progress, (v) => `${v}%`);
    const velocity = useVelocity(progress);
    const scaleX = useTransform(velocity, [-700, 0, 700], [1.3, 1, 1.3], { clamp: true });

    // Only logos drawn dark-on-transparent need a light backing to stay visible
    // against the dark card. Light-on-transparent marks (ClariPet, UI) must sit
    // directly on the card instead, or the backing erases them.
    const needsLightBacking = ["Capella Multidana Finance"];

    const ExperienceData = [
        {
            title: "Fullstack Developer Intern",
            institution: "Capella Multidana Finance",
            duration: "April 2026 - Present",
            photo: "/img/CapellaMultiDana.png"
        },
        {
            title: "Kerja Praktek - Payment Automation",
            institution: "DOPFMA Universitas Indonesia",
            duration: "June 2026 - Dec 2026",
            photo: "/img/UI.png"
        },
        {
            title: "Freelance Fullstack Developer",
            institution: "ClariPet",
            duration: "May 2026 - Aug 2026",
            photo: "/img/ClariPet.png"
        },
        {
            title: "Software Engineer",
            institution: "Exercise FTUI",
            duration: "Oct 2024 - Present",
            photo: "/img/Exercise.png"
        }
    ];

    const EducationData = [
        {
            institution: "University of Indonesia",
            study: "Bachelor of Computer Engineering",
            duration: "Aug 2024 - Aug 2028",
            photo: "/img/UI.png"

        },
        {
            institution: "SMA Tunas Bangsa",
            study: "Science",
            duration: "Aug 2021 - Aug 2024",
            photo: "/img/TB.png"

        },
    ];
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-4 pt-12 sm:pt-16">
                <div className='w-full flex flex-col justify-center items-center gap-4'>
                    <div className="relative w-full h-8 grays2bg text-white flex p-1 rounded-lg">
                        <motion.div
                            aria-hidden="true"
                            className="absolute top-1 bottom-1 grays rounded-md"
                            style={{
                                left: 4,
                                width: 'calc(50% - 4px)',
                                x,
                                scaleX,
                                transformOrigin: activeIndex === 1 ? 'left center' : 'right center',
                            }}
                        />
                        {sections.map((section) => (
                            <motion.button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                whileTap={{ scale: 0.95 }}
                                className="relative z-10 w-1/2 p-1 inter flex items-center justify-center text-xs sm:text-sm"
                            >
                                {section}
                            </motion.button>
                        ))}
                    </div>
                    <div
                        className="w-full border-[1px] inter grays2border rounded-lg"
                    >{(activeSection === 'Experience' ? ExperienceData : EducationData).map((item, index) => (
                        <div key={index} className="flex items-center p-3 sm:p-4 gap-3">
                            {needsLightBacking.includes(item.institution) ? (
                                <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0'>
                                    <Image src={item.photo} width={40} height={40} sizes="40px" priority alt="Logo" className='w-full h-full object-contain' />
                                </div>
                            ) : (
                                <Image src={item.photo} width={40} height={40} sizes="40px" priority alt="Logo" className='w-9 h-9 sm:w-10 sm:h-10' />
                            )}
                            <div>
                                <h1 className='text-xs grays2'>{item.duration}</h1>
                                <h1 className='text-sm sm:text-base inter-bold'>{item.institution}</h1>
                                <h1 className='text-xs sm:text-sm grays2'>{item.title || item.study}</h1>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="hidden">
                        {EducationData.map((item) => (
                            <Image key={item.photo} src={item.photo} width={40} height={40} sizes="40px" priority alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default ExperienceEducation;
