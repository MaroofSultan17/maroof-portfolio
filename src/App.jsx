import { Suspense, lazy } from "react";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WelcomeToast from "./components/WelcomeToast";

// Senior Optimization: Lazy load heavy sections to improve First Contentful Paint (FCP)
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

/**
 * LoadingFallback Component
 * Displays a full-screen branded placeholder during component hydration
 * to prevent the Footer from jumping to the middle of the screen.
 */
const LoadingFallback = () => (
  <div className="w-full h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
    <div className="w-10 h-10 border-2 border-brand-500/20 border-t-brand-500 rounded-full animate-spin" />
  </div>
);

/**
 * App Component
 * Root application container with optimized rendering architecture.
 */
export default function App() {
  const { toggle, isDark } = useTheme();

  return (
    <div className="min-h-screen font-body overflow-x-hidden transition-colors duration-300">
      <WelcomeToast />
      <Navbar toggle={toggle} isDark={isDark} />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
