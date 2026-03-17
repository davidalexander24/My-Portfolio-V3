"use client";
import React, { useState } from 'react';
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { RxVercelLogo } from "react-icons/rx";
import { useMouseMove } from '../hooks/useMouseMove';
import { BiLogoTypescript } from "react-icons/bi";


function TechStackItem({ icon, name }) {
  const { position, handleMouseMove, style } = useMouseMove();

  return (
    <div 
      className="text-4xl flex items-center gap-2 grays3bg py-2 px-3 rounded-md relative overflow-hidden group"
      onMouseMove={handleMouseMove}
      style={style}
    >
      {icon}
      <div className="text-sm inter z-10 relative">
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
  return(
    <div className="pt-16">
      <h1 className="inter-extrabold text-[35px]">Tech Stack</h1>
      <h1 className="grays2 text-base pb-4">Tools, resources and software I use.</h1>
      <div className="w-full border-2 grays3border p-8 flex flex-col gap-4 select-none rounded-md">
        <div className="flex flex-row gap-5">
          <TechStackItem icon={<BiLogoTypescript />} name="TypeScript" />
          <TechStackItem icon={<TbBrandNextjs />} name="Next.js" />
          <TechStackItem icon={<FaReact />} name="React" />
          <TechStackItem icon={<FaHtml5 />} name="HTML"/>
          <TechStackItem icon={<RiTailwindCssFill />} name="Tailwind CSS" />
          
        </div>
        <div className="flex flex-row gap-5">
          <TechStackItem icon={<IoLogoFirebase />} name="Firebase" />
          <div className="ml-1"><TechStackItem icon={<RiSupabaseLine />} name="Supabase" /></div>
          <div className="w-[106px]"><TechStackItem icon={<FaGitAlt />} name="Git" /></div>
          <div className="w-[114px]"><TechStackItem icon={<IoLogoGithub />} name="Github" /></div>
          <div className="w-[140px]"><TechStackItem icon={<RxVercelLogo />} name="Vercel"/></div>
        </div>
      </div>
    </div>
  )
}

export default TechStack;