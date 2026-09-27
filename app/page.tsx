import Navbar     from "@/components/Navbar";
import Hero       from "@/components/Hero";
import About      from "@/components/About";
import Skills     from "@/components/Skills";
import Projects   from "@/components/Projects";
import Experience from "@/components/Experience";
import Services   from "@/components/Services";
import GitHub     from "@/components/GitHub";
import Contact    from "@/components/Contact";
import Footer     from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <GitHub />
      <Contact />
      <Footer />
    </main>
  );
}
