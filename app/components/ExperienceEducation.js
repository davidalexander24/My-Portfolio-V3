"use client";
import React, { useState } from 'react';
import Image from 'next/image';


const ExperienceEducation = () => {
    const [activeSection, setActiveSection] = useState('Experience')

    const ExperienceData = [
        {
            title: "Fullstack Developer Intern",
            institution: "Capella Multidana Finance",
            duration: "April 2026 - Present",
            photo: "/img/CapellaMultiDana.png"
        },
        {
            title: "Senior Software Developer",
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
                    <div className="w-full h-8 grays2bg text-white flex justify-center p-1 rounded-lg">
                        <div className='w-1/2 flex justify-center'>
                            <button
                                className={`p-1 w-full inter flex items-center text-xs sm:text-sm rounded-md justify-center transition-all duration-300 ${activeSection === 'Experience' ? 'grays' : 'grays2bg'
                                    }`}
                                onClick={() => setActiveSection('Experience')}
                            >
                                Experience
                            </button>
                        </div>

                        <div className='w-1/2 flex justify-center'>
                            <button
                                className={`p-1 w-full inter flex items-center text-xs sm:text-sm rounded-md justify-center transition-all duration-300 ${activeSection === 'Education' ? 'grays' : 'grays2bg'
                                    }`}
                                onClick={() => setActiveSection('Education')}
                            >
                                Education
                            </button>
                        </div>
                    </div>
                    <div
                        key={activeSection}
                        className={`w-full border-[1px] inter grays2border rounded-lg 
                                        ${activeSection === 'Education' || activeSection === 'Experience' ? 'animate-fade-in' : ''}`}
                    >{(activeSection === 'Experience' ? ExperienceData : EducationData).map((item, index) => (
                        <div key={index} className="flex items-center p-3 sm:p-4 gap-3">
                            {item.institution === "Capella Multidana Finance" ? (
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
                </div>
            </div>
        </>
    )
};

export default ExperienceEducation;
