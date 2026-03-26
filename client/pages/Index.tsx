import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import MouseTrail from "@/components/MouseTrail";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <MouseTrail />
      <Header />
      <Hero />
      <Education />
      <Projects />
      <Experience />
      <Leadership />
      <Skills />
      <Contact />
    </div>
  );
}
