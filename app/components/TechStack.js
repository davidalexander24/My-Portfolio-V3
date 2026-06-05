"use client";

import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

import { FaGitAlt } from "react-icons/fa";
import { SiLaravel, SiPostgresql, SiDocker, SiNodedotjs, SiNestjs, SiMongodb } from "react-icons/si";
import { useMouseMove } from '../hooks/useMouseMove';
import { BiLogoTypescript } from "react-icons/bi";


function TechStackItem({ icon, name, iconScaleClass = "" }) {
  const { position, handleMouseMove, style } = useMouseMove();

  return (
    <div
      className="text-3xl sm:text-4xl flex items-center gap-2 grays3bg py-1.5 sm:py-2 px-2.5 sm:px-3 lg:px-4 rounded-md relative overflow-hidden group"
      onMouseMove={handleMouseMove}
      style={style}
    >
      <span className={`flex items-center ${iconScaleClass}`}>
        {icon}
      </span>
      <div className="text-xs sm:text-sm inter z-10 relative">
        {name}
      </div>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.3), transparent 90%)`
        }}
      />
    </div>
  );
}

function TechStack() {
  return (
    <div className="pt-12 sm:pt-16">
      <h1 className="inter-extrabold text-[27px] md:text-[35px]">Tech Stack</h1>
      <h1 className="grays2 text-sm md:text-base pb-3 sm:pb-4">Tools, languages and software I use.</h1>
      <div className="w-full border-2 grays3border p-4 sm:p-8 select-none rounded-md">
        <div className="flex flex-col gap-3 sm:gap-5">
          <div className="flex flex-wrap md:flex-nowrap md:justify-between gap-3 sm:gap-5">
            <TechStackItem icon={<BiLogoTypescript />} name="TypeScript" />
            <TechStackItem icon={<TbBrandNextjs />} name="Next.js" />
            <TechStackItem icon={<FaReact />} name="React" />
            <TechStackItem icon={<SiLaravel />} name="Laravel" />
            <TechStackItem icon={<SiNestjs />} name="Nest.js" iconScaleClass="text-[0.9em]" />
          </div>
          <div className="flex flex-wrap md:flex-nowrap md:justify-between gap-3 sm:gap-5">
            <TechStackItem icon={<SiNodedotjs />} name="Node.js" iconScaleClass="text-[0.93em]" />
            <TechStackItem icon={<SiMongodb />} name="MongoDB" iconScaleClass="text-[0.93em]" />
            <TechStackItem icon={<FaGitAlt />} name="Git" iconScaleClass="text-[0.94em]" />
            <TechStackItem icon={<SiDocker />} name="Docker" iconScaleClass="text-[0.93em]" />
            <TechStackItem icon={<SiPostgresql />} name="PostgreSQL" iconScaleClass="text-[0.8em]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack;