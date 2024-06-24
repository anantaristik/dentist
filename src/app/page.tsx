import Hero from "../components/Hero";
import WaveDivider from "@/components/divider";
import Penyakit from "@/components/Penyakit";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero/>
      <WaveDivider/>
      <Penyakit/>
    </main>
  );
}
