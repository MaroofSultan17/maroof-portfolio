import Hero, { Navbar } from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Hero />
        <main>
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
