import Navigation from "@/components/navigation/Nav";
import LeftBar from "@/components/left-bar/LeftBar";
import CenterBar from "@/components/center-bar/CenterBar";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex flex-row">
        <LeftBar />
        <CenterBar />
      </main>
    </>
  );
}
