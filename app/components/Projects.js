"use client";
import dynamic from 'next/dynamic'
import { RiSupabaseLine } from "react-icons/ri";
import { useMouseMove } from '../hooks/useMouseMove';
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { SiPostgresql, SiCloudinary } from "react-icons/si";


const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false
}); 

function Projects() {
    const { position, handleMouseMove} = useMouseMove();
    


    return (
        <div className="pt-12 sm:pt-16 pb-20 sm:pb-32">
            <h1 className="text-3xl sm:text-[38px] inter-extrabold ml-1 sm:ml-2">
                Projects
            </h1>
            <h1 className="grays2 text-sm sm:text-base pb-5 sm:pb-6 ml-1 sm:ml-2">
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


                    <div className='p-4 sm:p-6 pt-6 sm:pt-8 pb-5 sm:pb-6'>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                            <div>
                                <h1 className='inter-bold text-2xl sm:text-3xl'>
                                    Teknik Charity Run
                                </h1>
                                <p className='inter grays2 text-sm sm:text-base pt-2'>
                                    Built as Software Developer at Exercise FTUI.
                                </p>
                            </div>
                            <span className="inline-flex items-center gap-2 grays py-2 px-3 sm:py-2.5 sm:px-4 rounded-md text-sm sm:text-base inter transition-all duration-200 group-hover:translate-x-1 sm:shrink-0 sm:mt-1">
                                Visit Website
                                <span aria-hidden="true">↗</span>
                            </span>
                        </div>
                        <div className="flex flex-row flex-wrap gap-2 sm:gap-3 pt-4 text-2xl sm:text-3xl">
                            <div className="flex justify-center items-center gap-2 grays py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-md">
                                <TbBrandNextjs />
                                <div className="text-xs sm:text-sm inter">
                                    Next.js
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-md">
                                <RiSupabaseLine />
                                <div className="text-xs sm:text-sm inter">
                                    Supabase
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-md">
                                <SiPostgresql />
                                <div className="text-xs sm:text-sm inter">
                                    PostgreSQL
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-md">
                                <BiLogoTypescript />
                                <div className="text-xs sm:text-sm inter">
                                    TypeScript
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-md">
                                <SiCloudinary />
                                <div className="text-xs sm:text-sm inter">
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
                    
                    <div className='p-4 sm:p-6 pt-6 sm:pt-8 pb-5 sm:pb-6'>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                            <div>
                                <h1 className='inter-bold text-2xl sm:text-3xl'>
                                    EXERTION 2025
                                </h1>
                                <p className='inter grays2 text-sm sm:text-base pt-2'>
                                    Built as Software Developer at Exercise FTUI.
                                </p>
                            </div>
                            <span className="inline-flex items-center gap-2 grays py-2 px-3 sm:py-2.5 sm:px-4 rounded-md text-sm sm:text-base inter transition-all duration-200 group-hover:translate-x-1 sm:shrink-0 sm:mt-1">
                                Visit Website
                                <span aria-hidden="true">↗</span>
                            </span>
                        </div>
                        <div className="flex flex-row flex-wrap gap-2 sm:gap-3 pt-4 text-2xl sm:text-3xl">
                            <div className="flex justify-center items-center gap-2 grays py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-md">
                                <TbBrandNextjs />
                                <div className="text-xs sm:text-sm inter">
                                    Next.js
                                </div>
                            </div>
                            
                            <div className="flex justify-center items-center gap-2 grays py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-md">
                                <BiLogoTypescript />
                                <div className="text-xs sm:text-sm inter">
                                    TypeScript
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-md">
                                <RiSupabaseLine />
                                <div className="text-xs sm:text-sm inter">
                                    Supabase
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 grays py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-md">
                                <SiPostgresql />
                                <div className="text-xs sm:text-sm inter">
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