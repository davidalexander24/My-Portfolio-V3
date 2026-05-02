"use client";
import dynamic from 'next/dynamic'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { RiSupabaseLine } from "react-icons/ri";
import { useState } from 'react';
import { useMouseMove } from '../hooks/useMouseMove';
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { SiPostgresql, SiCloudinary } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";


const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false
}); 

function Projects() {
    const [isHovered, setIsHovered] = useState(false);
    const { position, handleMouseMove} = useMouseMove();
    


    return (
        <div className="pt-12">
            <h1 className="text-[38px] inter-extrabold ml-2">
                Projects
            </h1>
            <h1 className="grays2 text-base pb-6 ml-2">
                A showcase of my work.
            </h1>

        <a href='https://www.kersosftui.com/'>
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
                    <ReactPlayer 
                        url='/video/0317-copy.mp4'
                        controls={false}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="100%"
                        height="auto"
                        style={{ 
                            userSelect: 'none', 
                            pointerEvents: 'none',
                            borderRadius: '20px',
                            overflow: 'hidden'
                        }}
                    />


                    <div className='p-6 pt-8 pb-6'>
                        
                        <div className="flex items-center gap-3 justify-between sm:flex-row sm:items-start">
                            <h1 className='inter-bold text-xl md:text-3xl'>
                                Teknik Charity Run
                            </h1>
                            <span className="inline-flex items-center gap-2 grays py-2.5 px-4 rounded-md text-base inter transition-all duration-200 group-hover:translate-x-1 shrink-0">
                                Visit Website
                                <span aria-hidden="true">↗</span>
                            </span>
                        </div>
                        <p className='inter grays2 text-base'>
                            Built as Software Developer at Exercise FTUI.
                        </p>
                            
                            
                        
                        <div className="flex flex-row flex-wrap gap-3 pt-4 text-3xl">
                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <TbBrandNextjs />
                                <div className="text-sm inter">
                                    Next.js
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <RiSupabaseLine />
                                <div className="text-sm inter">
                                    Supabase
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <SiPostgresql />
                                <div className="text-sm inter">
                                    PostgreSQL
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <BiLogoTypescript />
                                <div className="text-sm inter">
                                    TypeScript
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <SiCloudinary />
                                <div className="text-sm inter">
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
                    <ReactPlayer 
                        url='/video/Exertion.mp4'
                        controls={false}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="100%"
                        height="auto"
                        style={{ 
                            userSelect: 'none', 
                            pointerEvents: 'none',
                            borderRadius: '20px',
                            overflow: 'hidden'
                        }}
                    />
                    
                    <div className='p-6 pt-8 pb-6'>
                        
                        <div className="flex items-center gap-3 justify-between sm:flex-row sm:items-start">
                            <h1 className='inter-bold text-xl md:text-3xl'>
                                EXERTION 2025
                            </h1>
                            <span className="inline-flex items-center gap-2 grays py-2.5 px-4 rounded-md text-base inter transition-all duration-200 group-hover:translate-x-1 shrink-0">
                                Visit Website
                                <span aria-hidden="true">↗</span>
                            </span>
                        </div>
                        <p className='inter grays2 text-base'>
                            Built as Software Developer at Exercise FTUI.
                        </p>

                        <div className="flex flex-row flex-wrap gap-3 pt-4 text-3xl">
                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <TbBrandNextjs />
                                <div className="text-sm inter">
                                    Next.js
                                </div>
                            </div>
                            
                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <BiLogoTypescript />
                                <div className="text-sm inter">
                                    TypeScript
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <RiSupabaseLine />
                                <div className="text-sm inter">
                                    Supabase
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <SiPostgresql />
                                <div className="text-sm inter">
                                    PostgreSQL
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
                    <ReactPlayer 
                        url='/video/AI-Workflow-Automation-Tool.mp4'
                        controls={false}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="100%"
                        height="auto"
                        style={{ 
                            userSelect: 'none', 
                            pointerEvents: 'none',
                            borderRadius: '20px',
                            overflow: 'hidden'
                        }}
                    />


                    <div className='p-6 pt-8 pb-6'>

                        <div className="flex items-center gap-3 justify-between sm:flex-row sm:items-start">
                            <h1 className='inter-bold text-xl md:text-3xl'>
                                AI Workflow Automation Tool
                            </h1>
                            <span className="inline-flex items-center gap-2 grays py-2.5 px-4 rounded-md text-base inter transition-all duration-200 group-hover:translate-x-1 shrink-0">
                                Visit Website
                                <span aria-hidden="true">↗</span>
                            </span>
                        </div>

                        <div className="flex flex-row flex-wrap gap-3 pt-4 text-3xl">
                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <SiNestjs />
                                <div className="text-sm inter">
                                    Nest.js
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <TbBrandNextjs />
                                <div className="text-sm inter">
                                    Next.js
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <RiSupabaseLine />
                                <div className="text-sm inter">
                                    Supabase
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <SiPostgresql />
                                <div className="text-sm inter">
                                    PostgreSQL
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <BiLogoTypescript />
                                <div className="text-sm inter">
                                    TypeScript
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                                <SiPrisma />
                                <div className="text-sm inter">
                                    Prisma
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