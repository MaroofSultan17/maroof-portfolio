import { motion } from "framer-motion";
import { volunteering } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { FiHeart, FiHexagon } from "react-icons/fi";

export default function Volunteering() {
  return (
    <section
      id="volunteering"
      className="section-pad bg-gray-50/50 dark:bg-gray-900/50"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Volunteering"
          title="Community Impact"
          subtitle="Contributing back to the tech community and participating in innovation events."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {volunteering.map((item, index) => (
            <motion.div
              key={item.role + item.organization}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-8 flex flex-col items-start gap-6 border-l-4 border-l-brand-500"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/20">
                  <FiHeart size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-brand-500">
                    {item.organization} • {item.period}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>

              <ul className="space-y-3">
                {item.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <FiHexagon
                      size={14}
                      className="mt-1 text-brand-400 shrink-0"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
