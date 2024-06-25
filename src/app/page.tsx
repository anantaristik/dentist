import Hero from "../components/Hero";
import WaveDivider from "@/components/divider";
import Penyakit from "@/components/Penyakit";
import PerawatanGigi from "@/components/PerawatanGigi";
import PentingKeDokter from "@/components/PentingKeDokter";
import Makanan from "@/components/Makanan";
import AnakTidakTakutKeDrg from "@/components/AnakTidakTakutKeDrg";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero/>
      <WaveDivider/>
      <Penyakit/>
      <WaveDivider bgColor="bg-biru" waveColor="text-white"/>
      <PerawatanGigi/>
      <PentingKeDokter/>
      <Makanan/>
      <WaveDivider bgColor="bg-white" waveColor="text-biru"/>
      <AnakTidakTakutKeDrg/>
      
    </main>
  );
}
