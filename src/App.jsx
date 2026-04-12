import { Suspense, lazy, useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WelcomeToast from "./components/WelcomeToast";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Certifications = lazy(() => import("./components/Certifications"));
const Volunteering = lazy(() => import("./components/Volunteering"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

const LoadingFallback = () => (
  <div className="w-full h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
    <div className="w-10 h-10 border-2 border-brand-500/20 border-t-brand-500 rounded-full animate-spin" />
  </div>
);

export default function App() {
  const { toggle, isDark } = useTheme();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-body overflow-x-hidden">
      <WelcomeToast />
      <Navbar toggle={toggle} isDark={isDark} />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
          <About />
          <Experience />
          <Certifications />
          <Volunteering />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
