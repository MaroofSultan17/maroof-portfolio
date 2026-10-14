import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { usePortfolio } from "@/hooks/usePortfolio";
import { FlashProvider } from "@/contexts/FlashContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Flashes from "@/components/layout/Flashes";
import PortfolioSkeleton from "@/components/PortfolioSkeleton";

function PortfolioApp() {
  const { toggle, isDark } = useTheme();
  const { portfolio, isLoading, errorMessage } = usePortfolio();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg text-primary font-body overflow-x-hidden selection:bg-primary-light selection:text-primary">
      <Flashes />
      <Navbar toggle={toggle} isDark={isDark} />

      {errorMessage && (
        <div className="pt-28 pb-12 section-container text-center">
          <p className="text-danger font-mono text-sm mb-4" role="alert">
            {errorMessage}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium"
          >
            Retry
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        {isLoading || !portfolio ? (
          <motion.main
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PortfolioSkeleton />
          </motion.main>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Hero personal={portfolio.personal} />
            <About personal={portfolio.personal} />
            <Skills skills={portfolio.skills} />
            <Experience experiences={portfolio.experiences} />
            <Projects projects={portfolio.projects} />
            <Education education={portfolio.education} />
            <Contact personal={portfolio.personal} />
          </motion.main>
        )}
      </AnimatePresence>

      <Footer personal={portfolio?.personal} />
    </div>
  );
}

export default function App() {
  return (
    <FlashProvider>
      <PortfolioApp />
    </FlashProvider>
  );
}
