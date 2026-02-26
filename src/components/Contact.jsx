import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from "react-icons/fi";
import { personal } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulated send — wire up to Formspree or EmailJS in production
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid md:grid-cols-5 gap-10 mt-14"
        >
          {/* Info panel */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                Get in touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                I'm always open to discussing new projects, consulting opportunities, or just a
                friendly chat about tech.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 group text-sm"
              >
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-500 dark:text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-all">
                  <FiMail size={16} />
                </div>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                  {personal.email}
                </span>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-3 group text-sm"
              >
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-500 dark:text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-all">
                  <FiPhone size={16} />
                </div>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                  {personal.phone}
                </span>
              </a>
            </div>

            <div className="flex gap-3 pt-2">
              {[
                { icon: FiGithub, href: personal.github, label: "GitHub" },
                { icon: FiLinkedin, href: personal.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-xl card text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-10 text-center h-full flex flex-col items-center justify-center gap-4"
              >
                <FiCheckCircle size={48} className="text-emerald-500" />
                <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">
                  Message Sent!
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-shadow disabled:opacity-70"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
