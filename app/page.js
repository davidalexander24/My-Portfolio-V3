import ExperienceEducation from './components/ExperienceEducation';
import TechStack from './components/TechStack';
import Footers from './components/Footers';
import Projects from './components/Projects';
import PortfolioChatbot from "./components/PortfolioChatbot";
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen grays flex flex-col text-gray-300">
      <div className="flex-grow w-full flex justify-center overflow-x-hidden">
        <div className="w-full max-w-[800px] px-4 sm:px-6 flex flex-col gap-3 pt-20 sm:pt-32 animate-fade-in2">
          <Hero />
          <ExperienceEducation />
          <TechStack />
          <Projects />
          <PortfolioChatbot />
        </div>
      </div>
      <Footers />
    </div>
  );
}