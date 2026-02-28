import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { certifications } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import {
  FiAward,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { SiUdemy, SiLinkedin, SiDatacamp } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

function BrandIcon({ issuer }) {
  const name = issuer.toLowerCase();

  const iconVariants = {
    hover: {
      y: [0, -4, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const getIcon = () => {
    if (name.includes("microsoft"))
      return <FaMicrosoft className="text-[#00A4EF]" />;
    if (name.includes("udemy")) return <SiUdemy className="text-[#A435F0]" />;
    if (name.includes("linkedin"))
      return <SiLinkedin className="text-[#0A66C2]" />;
    if (name.includes("datacamp"))
      return <SiDatacamp className="text-[#05192D] dark:text-brand-400" />;
    return <FiAward className="text-brand-500" />;
  };

  return (
    <motion.div variants={iconVariants} whileHover="hover" aria-label={`${issuer} icon`}>
      {getIcon()}
    </motion.div>
  );
}

export default function Certifications() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    breakpoints: {
      "(min-width: 1024px)": { active: false },
    },
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="certifications"
      className="section-pad bg-white dark:bg-gray-950 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Certifications"
          title="Licenses & Training"
          subtitle="Verified professional certifications and technical specializations across major platforms."
        />

        <div className="relative">
          <div className="overflow-visible" ref={emblaRef}>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="flex lg:grid lg:grid-cols-3 gap-6 mt-5"
            >
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-none min-w-0"
                >
                  <motion.div
                    variants={item}
                    className="card group p-7 flex flex-col h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-transparent hover:border-t-brand-500"
                  >
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="text-3xl p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 group-hover:bg-brand-500/5 transition-colors">
                        <BrandIcon issuer={cert.issuer} />
                      </div>
                      {cert.id && (
                        <span className="text-[10px] font-mono font-bold tracking-tighter px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                          {cert.id}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-brand-500 transition-colors">
                      {cert.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-6">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {cert.issuer}
                      </p>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-200 dark:bg-gray-800" />
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {cert.date}
                      </p>
                    </div>

                    <div className="mt-auto space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-brand-500 hover:text-brand-600 transition-colors py-2 px-3 rounded-lg bg-brand-500/5 border border-brand-500/10 hover:bg-brand-500/10"
                          aria-label={`Verify ${cert.title} credential from ${cert.issuer}`}
                        >
                          <FiExternalLink size={14} />
                          Verify Credential
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-10 lg:hidden">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "w-8 bg-brand-500"
                  : "w-1.5 bg-gray-200 dark:bg-gray-800"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
