import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import ExperienceEducation from './components/ExperienceEducation';
import TechStack from './components/TechStack';
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineLinkedin } from "react-icons/ai";
import Footers from './components/Footers';
import Projects from './components/Projects';

export default function Home() {
  return (
    <div className="min-h-screen grays flex flex-col text-gray-300">
      <div className="flex-grow w-full flex justify-center overflow-x-hidden">
        <div className="w-[800px] flex flex-col gap-3 pt-32 animate-fade-in2">
          <div className="inter-bold text-5xl">
            <h1 className="mr-2">
              David Alexander,
            </h1> 
            <div className="flex pt-3">
              <h1 className="mr-3">
                Full-Stack
              </h1>
              <h1 className="grays2">
                Developer.
              </h1>
            </div>
          </div>
          <div className="text-xl inter flex flex-col grays2">
            <div className="flex flex-row">
              <h1 className="mt-1"><IoLocationOutline /></h1>
              <h1>
              Jakarta, Indonesia
              </h1>
            </div>
            <div className="flex flex-row text-[40px] pt-3 gap-2 items-center">
              <a className="hover:opacity-60 duration-300 ease-in-out" href="https://www.github.com/davidalexander2411"><IoLogoGithub /></a>
              <a className="text-[44px] hover:opacity-60 duration-300 ease-in-out" href="https://www.linkedin.com/in/david-alexander-3a3601325/"><AiOutlineLinkedin/></a>
              <a className="hover:opacity-60 duration-300 ease-in-out" href="https://www.instagram.com/david.alexander24"><FaInstagram /></a>
            </div>
          </div>
          <ExperienceEducation />
          <TechStack />
          <Projects />
        </div>
      </div>
      <Footers />
    </div>
  );
}