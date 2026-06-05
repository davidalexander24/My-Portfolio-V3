import ExperienceEducation from './components/ExperienceEducation';
import TechStack from './components/TechStack';
import Footers from './components/Footers';
import Projects from './components/Projects';
import PortfolioChatbot from "./components/PortfolioChatbot";
import Hero from './components/Hero';
import Grainient from './components/Grainient';

export default function Home() {
  return (
    <div className="min-h-screen grays flex flex-col text-gray-300">
      <div className="fixed inset-0 z-0 opacity-50 grainient-bg">
        <Grainient
          color1="#3e3e3e"
          color2="#0a0a0a"
          color3="#424242"
          timeSpeed={0.8}
          colorBalance={0.0}
          warpStrength={0.8}
          warpFrequency={3.0}
          warpSpeed={10}
          warpAmplitude={60.0}
          blendAngle={0}
          blendSoftness={0.2}
          rotationAmount={450.0}
          noiseScale={1.4}
          grainAmount={0.05}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.5}
          gamma={1.0}
          saturation={0.8}
          centerX={0.0}
          centerY={0.0}
          zoom={0.85}
        />
      </div>
      <div className="flex-grow w-full flex justify-center overflow-x-hidden relative z-10">
        <div className="w-full max-w-[800px] px-4 sm:px-6 flex flex-col gap-3 pt-10 md:pt-32 animate-fade-in2">
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