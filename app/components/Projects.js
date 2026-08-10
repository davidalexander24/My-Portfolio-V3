"use client";
import Image from 'next/image'
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { RiSupabaseLine } from "react-icons/ri";
import { useState } from 'react';
import { useMouseMove } from '../hooks/useMouseMove';
import { useLazyVideo } from '../hooks/useLazyVideo';
import { TbBrandNextjs, TbBrandTypescript, TbSparkles } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { SiPostgresql, SiCloudinary, SiMongodb, SiExpress, SiRedis, SiSpringboot, SiDocker, SiTailscale } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";

function Projects() {
    const [isHovered, setIsHovered] = useState(false);
    const { position, handleMouseMove } = useMouseMove();
    const video1 = useLazyVideo();
    const video2 = useLazyVideo();
    const video3 = useLazyVideo();
    const video4 = useLazyVideo();



    return (
        <div className="pt-12">
            <h1 className="text-[27px] md:text-[35px] inter-extrabold ml-2">
                Projects
            </h1>
            <h1 className="grays2 text-sm md:text-base pb-6 ml-2">
                A showcase of my work.
            </h1>

            <a href='https://primecapitaledger.vercel.app'>
                <div
                    className="gradient-border relative group"
                    onMouseMove={handleMouseMove}
                    style={{
                        '--x': `${position.x}px`,
                        '--y': `${position.y}px`,
                        borderRadius: '24px',
                        padding: '5px 5px 5px 6px',
                    }}
                >
                    <div className='grays3bg rounded-3xl flex flex-col relative z-10'>
                        <Image
                            src='/img/prime-capital-ledger.png'
                            alt='Prime Capital Ledger'
                            width={1200}
                            height={675}
                            sizes="(max-width: 768px) 100vw, 768px"
                            className='w-full h-auto select-none pointer-events-none'
                            style={{
                                borderRadius: '20px',
                            }}
                        />

                        <div className='p-6 pt-8 pb-6'>

                            <div className="flex items-center gap-3 justify-between sm:flex-row sm:items-start">
                                <h1 className='inter-bold text-xl md:text-3xl'>
                                    Prime Capital Ledger
                                </h1>
                                <span className="inline-flex items-center gap-2 grays py-1.5 px-3 md:py-2.5 md:px-4 rounded-md text-sm md:text-base inter transition-all duration-200 group-hover:translate-x-1 shrink-0">
                                    Visit Website
                                    <span aria-hidden="true">↗</span>
                                </span>
                            </div>
                            <p className='mt-1 inter grays2 text-xs md:text-base'>
                                A full-stack portfolio management and financial analytics platform for tracking holdings, ingesting broker statements, and monitoring performance across global equity markets.
                            </p>

                            <div className="flex flex-row flex-wrap gap-1.5 md:gap-3 pt-4 text-xl md:text-3xl">
                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <TbBrandNextjs />
                                    <div className="text-[11px] md:text-sm inter">
                                        Next.js
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <BiLogoTypescript />
                                    <div className="text-[11px] md:text-sm inter">
                                        TypeScript
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiPrisma />
                                    <div className="text-[11px] md:text-sm inter">
                                        Prisma
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiPostgresql />
                                    <div className="text-[11px] md:text-sm inter">
                                        PostgreSQL
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiRedis />
                                    <div className="text-[11px] md:text-sm inter">
                                        Redis
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>

            <a href='https://ai-workflow-automation-tool-production.vercel.app/workflows'>
                <div
                    className="gradient-border relative group mt-10"
                    onMouseMove={handleMouseMove}
                    style={{
                        '--x': `${position.x}px`,
                        '--y': `${position.y}px`,
                        borderRadius: '24px',
                        padding: '5px 5px 5px 6px',
                    }}
                >
                    <div className='grays3bg rounded-3xl flex flex-col relative z-10'>
                        <video
                            ref={video1.ref}
                            poster="/img/posters/AI-Workflow-Automation-Tool.webp"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload={video1.inView ? "auto" : "none"}
                            className="w-full aspect-[16/9] object-cover select-none pointer-events-none"
                            style={{ borderRadius: '20px' }}
                        >
                            {video1.inView && <source src="/video/AI-Workflow-Automation-Tool.mp4" type="video/mp4" />}
                        </video>

                        <div className='p-6 pt-8 pb-6'>

                            <div className="flex items-center gap-3 justify-between sm:flex-row sm:items-start">
                                <h1 className='inter-bold text-xl md:text-3xl'>
                                    AI Workflow Automation Tool
                                </h1>
                                <span className="inline-flex items-center gap-2 grays py-1.5 px-3 md:py-2.5 md:px-4rounded-md text-sm md:text-base inter transition-all duration-200 group-hover:translate-x-1 shrink-0">
                                    Visit Website
                                    <span aria-hidden="true">↗</span>
                                </span>
                            </div>
                            <p className='mt-1 inter grays2 text-xs md:text-base'>
                                A full-stack tool built to help users define, manage, and execute reusable AI-driven workflow templates in a dashboard.
                            </p>

                            <div className="flex flex-row flex-wrap gap-1.5 md:gap-3 pt-4 text-xl md:text-3xl">
                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <TbSparkles className="text-blue-400" />
                                    <div className="text-[11px] md:text-sm inter">
                                        Gen AI
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiNestjs />
                                    <div className="text-[11px] md:text-sm inter">
                                        Nest.js
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiPostgresql />
                                    <div className="text-[11px] md:text-sm inter">
                                        PostgreSQL
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <BiLogoTypescript />
                                    <div className="text-[11px] md:text-sm inter">
                                        TypeScript
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiPrisma />
                                    <div className="text-[11px] md:text-sm inter">
                                        Prisma
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>

            <a href='https://www.kersosftui.com/'>
                <div
                    className="gradient-border relative group mt-10"
                    onMouseMove={handleMouseMove}
                    style={{
                        '--x': `${position.x}px`,
                        '--y': `${position.y}px`,
                        borderRadius: '24px',
                        padding: '5px 5px 5px 6px',
                    }}
                >
                    <div className='grays3bg rounded-3xl flex flex-col relative z-10'>
                        <video
                            ref={video2.ref}
                            poster="/img/posters/0317-copy.webp"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload={video2.inView ? "auto" : "none"}
                            className="w-full aspect-[16/9] object-cover select-none pointer-events-none"
                            style={{ borderRadius: '20px' }}
                        >
                            {video2.inView && <source src="/video/0317-copy.mp4" type="video/mp4" />}
                        </video>


                        <div className='p-6 pt-8 pb-6'>

                            <div className="flex items-center gap-3 justify-between sm:flex-row sm:items-start">
                                <h1 className='inter-bold text-xl md:text-3xl'>
                                    Teknik Charity Run
                                </h1>
                                <span className="inline-flex items-center gap-2 grays py-1.5 px-3 md:py-2.5 md:px-4 rounded-md text-sm md:text-base inter transition-all duration-200 group-hover:translate-x-1 shrink-0">
                                    Visit Website
                                    <span aria-hidden="true">↗</span>
                                </span>
                            </div>
                            <p className='mt-1 inter grays2 text-xs md:text-base'>
                                Full-stack registration and digital-payment platform for a UI-hosted charity race, serving 1,000+ registered users. Built as Software Developer at Exercise FTUI.
                            </p>



                            <div className="flex flex-row flex-wrap gap-1.5 md:gap-3 pt-4 text-xl md:text-3xl">
                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <TbBrandNextjs />
                                    <div className="text-[11px] md:text-sm inter">
                                        Next.js
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiPostgresql />
                                    <div className="text-[11px] md:text-sm inter">
                                        PostgreSQL
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <BiLogoTypescript />
                                    <div className="text-[11px] md:text-sm inter">
                                        TypeScript
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiCloudinary />
                                    <div className="text-[11px] md:text-sm inter">
                                        Cloudinary
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>


            <a href='https://www.exertionftui.com/'>
                <div
                    className="gradient-border relative mt-10 group"
                    onMouseMove={handleMouseMove}
                    style={{
                        '--x': `${position.x}px`,
                        '--y': `${position.y}px`,
                        borderRadius: '24px',
                        padding: '5px 5px 5px 6px',
                    }}
                >
                    <div className='grays3bg rounded-3xl flex flex-col relative z-10'>
                        <video
                            ref={video3.ref}
                            poster="/img/posters/Exertion.webp"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload={video3.inView ? "auto" : "none"}
                            className="w-full aspect-[16/9] object-cover select-none pointer-events-none"
                            style={{ borderRadius: '20px' }}
                        >
                            {video3.inView && <source src="/video/Exertion.mp4" type="video/mp4" />}
                        </video>

                        <div className='p-6 pt-8 pb-6'>

                            <div className="flex items-center gap-3 justify-between sm:flex-row sm:items-start">
                                <h1 className='inter-bold text-xl md:text-3xl'>
                                    EXERTION 2025
                                </h1>
                                <span className="inline-flex items-center gap-2 grays py-1.5 px-3 md:py-2.5 md:px-4 rounded-md text-sm md:text-base inter transition-all duration-200 group-hover:translate-x-1 shrink-0">
                                    Visit Website
                                    <span aria-hidden="true">↗</span>
                                </span>
                            </div>
                            <p className='mt-1 inter grays2 text-xs md:text-base'>
                                End-to-end competition registration platform with payment gateway and secure media pipeline, serving 500+ users with 100+ successful payments. Built as Software Developer at Exercise FTUI.
                            </p>

                            <div className="flex flex-row flex-wrap gap-1.5 md:gap-3 pt-4 text-xl md:text-3xl">
                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <TbBrandNextjs />
                                    <div className="text-[11px] md:text-sm inter">
                                        Next.js
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <BiLogoTypescript />
                                    <div className="text-[11px] md:text-sm inter">
                                        TypeScript
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <RiSupabaseLine />
                                    <div className="text-[11px] md:text-sm inter">
                                        Supabase
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiPostgresql />
                                    <div className="text-[11px] md:text-sm inter">
                                        PostgreSQL
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </a>

            <a href='https://micro-do.vercel.app/'>
                <div
                    className="gradient-border relative group mt-10"
                    onMouseMove={handleMouseMove}
                    style={{
                        '--x': `${position.x}px`,
                        '--y': `${position.y}px`,
                        borderRadius: '24px',
                        padding: '5px 5px 5px 6px',
                    }}
                >
                    <div className='grays3bg rounded-3xl flex flex-col relative z-10'>
                        <video
                            ref={video4.ref}
                            poster="/img/posters/MicroDo.webp"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload={video4.inView ? "auto" : "none"}
                            className="w-full aspect-[16/9] object-cover select-none pointer-events-none"
                            style={{ borderRadius: '20px' }}
                        >
                            {video4.inView && <source src="/video/MicroDo.mp4" type="video/mp4" />}
                        </video>


                        <div className='p-6 pt-8 pb-6'>

                            <div className="flex items-center gap-3 justify-between sm:flex-row sm:items-start">
                                <h1 className='inter-bold text-xl md:text-3xl'>
                                    MicroDo
                                </h1>
                                <span className="inline-flex items-center gap-2 grays py-1.5 px-3 md:py-2.5 md:px-4 rounded-md text-sm md:text-base inter transition-all duration-200 group-hover:translate-x-1 shrink-0">
                                    Visit Website
                                    <span aria-hidden="true">↗</span>
                                </span>
                            </div>
                            <p className='mt-1 inter grays2 text-xs md:text-base'>
                                An AI-powered web app that breaks down large, complex goals into highly actionable micro-steps.
                            </p>

                            <div className="flex flex-row flex-wrap gap-1.5 md:gap-3 pt-4 text-xl md:text-3xl">
                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <TbSparkles className="text-blue-400" />
                                    <div className="text-[11px] md:text-sm inter">
                                        Gen AI
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <FaNodeJs />
                                    <div className="text-[11px] md:text-sm inter">
                                        Node.js
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiExpress />
                                    <div className="text-[11px] md:text-sm inter">
                                        Express.js
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiMongodb />
                                    <div className="text-[11px] md:text-sm inter">
                                        MongoDB
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <FaReact />
                                    <div className="text-[11px] md:text-sm inter">
                                        React
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>

            <a href='https://davidalexanderr.itch.io/astrodrill'>
                <div
                    className="gradient-border relative group mt-10"
                    onMouseMove={handleMouseMove}
                    style={{
                        '--x': `${position.x}px`,
                        '--y': `${position.y}px`,
                        borderRadius: '24px',
                        padding: '5px 5px 5px 6px',
                    }}
                >
                    <div className='grays3bg rounded-3xl flex flex-col relative z-10'>
                        <Image
                            src='/img/AstroDrill.png'
                            alt='Astrodrill'
                            width={1200}
                            height={675}
                            sizes="(max-width: 768px) 100vw, 768px"
                            className='w-full h-auto select-none pointer-events-none'
                            style={{
                                borderRadius: '20px',
                            }}
                        />

                        <div className='p-6 pt-8 pb-6'>

                            <div className="flex items-center gap-3 justify-between sm:flex-row sm:items-start">
                                <h1 className='inter-bold text-xl md:text-3xl'>
                                    Astrodrill
                                </h1>
                                <span className="inline-flex items-center gap-2 grays py-1.5 px-3 md:py-2.5 md:px-4 rounded-md text-sm md:text-base inter transition-all duration-200 group-hover:translate-x-1 shrink-0">
                                    Play Game
                                    <span aria-hidden="true">↗</span>
                                </span>
                            </div>
                            <p className='mt-1 inter grays2 text-xs md:text-base'>
                                A 2D sandbox factory-automation and mining game, built from scratch in Java with LibGDX on a Spring Boot backend.
                            </p>

                            <div className="flex flex-row flex-wrap gap-1.5 md:gap-3 pt-4 text-xl md:text-3xl">
                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <FaJava />
                                    <div className="text-[11px] md:text-sm inter">
                                        Java
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiSpringboot />
                                    <div className="text-[11px] md:text-sm inter">
                                        Spring Boot
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiDocker />
                                    <div className="text-[11px] md:text-sm inter">
                                        Docker
                                    </div>
                                </div>

                                <div className="text-[27px] flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiTailscale />
                                    <div className="text-[11px] md:text-sm inter">
                                        Tailscale
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 md:gap-2 grays py-1 px-2 md:py-2 md:px-3 rounded-md">
                                    <SiPostgresql />
                                    <div className="text-[11px] md:text-sm inter">
                                        PostgreSQL
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>

        </div>
    );
}

export default Projects;