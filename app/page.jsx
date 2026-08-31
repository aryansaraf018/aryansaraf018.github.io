import StatusBar from "@/components/StatusBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CmdK from "@/components/CmdK";

export default function Page() {
  return (
    <main>
      <StatusBar />
      <Nav />
      <Hero />
      <Work />
      <Projects />
      <Stack />
      <Education />
      <Contact />
      <Footer />
      <CmdK />
    </main>
  );
}
