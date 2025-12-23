import LightRays from "./components/LightRays";
import TiltedCard from "./components/TiltedCard";

export default function Page() {

  return (
    <main
      className="h-screen w-full flex items-center justify-center relative text-center text-white bg-black"
    >
      <div className="h-screen w-full relative">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        <div className="absolute inset-0">
          <TiltedCard
            rotateAmplitude={12}
            scaleOnHover={1.2}
          />
        </div>

      </div>
    </main>
  );
}
