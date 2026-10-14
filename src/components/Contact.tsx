import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiLoader, FiMapPin } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { useFlash } from "@/contexts/FlashContext";
import { portfolioService } from "@/services/portfolioService";
import { Button } from "@/components/ui/button";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .required("Your name is required"),
  email: Yup.string()
    .trim()
    .email("Please provide a valid email address")
    .required("Email address is required"),
  subject: Yup.string()
    .trim()
    .max(120, "Subject must be under 120 characters"),
  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .required("Message content is required"),
});

export interface ContactProps {
  personal: PersonalGetResponseDTO;
}

export default function Contact({ personal }: ContactProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { dispatch } = useFlash();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const response = await portfolioService.post(values);

        dispatch({
          type: FlashReducerActions.SUCCESS,
          text: response.message || "Message sent successfully! I will reply shortly.",
        });

        resetForm();
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : "Failed to deliver message.";
        dispatch({
          type: FlashReducerActions.ERROR,
          text: errorMsg,
        });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <section id="contact" className="section-padding">
      <div className="section-container max-w-5xl">
        <SectionHeader
          label="Contact"
          title="Start a Conversation"
          subtitle="Looking for a software engineer to architect robust backend systems, video pipelines, or APIs? Let's talk."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid md:grid-cols-12 gap-10 mt-14"
        >
          <div className="md:col-span-5 space-y-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-primary mb-3">
                Direct Channels
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Reach out directly via email or phone. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="surface-card p-4 flex items-center gap-3.5 group hover:border-primary/40 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-muted uppercase">Email</span>
                  <span className="text-sm font-semibold text-primary group-hover:underline">
                    {personal.email}
                  </span>
                </div>
              </a>

              {personal.phone && (
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                  className="surface-card p-4 flex items-center gap-3.5 group hover:border-primary/40 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-muted uppercase">Phone</span>
                    <span className="text-sm font-semibold text-primary group-hover:underline">
                      {personal.phone}
                    </span>
                  </div>
                </a>
              )}

              {personal.location && (
                <div className="surface-card p-4 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-muted uppercase">Location</span>
                    <span className="text-sm font-medium text-primary">
                      {personal.location}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 flex items-center gap-3">
              {personal.github && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl surface-card text-muted hover:text-primary hover:border-primary/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
              )}
              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl surface-card text-muted hover:text-primary hover:border-primary/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={formik.handleSubmit}
              className="surface-card p-6 sm:p-8 space-y-5"
              noValidate
            >
              <div>
                <label htmlFor="name" className="block text-xs font-mono font-semibold text-primary mb-1.5 uppercase">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...formik.getFieldProps("name")}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-primary placeholder-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                    formik.touched.name && formik.errors.name
                      ? "border-rose-500 focus:border-rose-500"
                      : "border-border focus:border-primary"
                  }`}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="mt-1 text-xs text-rose-500 font-medium">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono font-semibold text-primary mb-1.5 uppercase">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-primary placeholder-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                    formik.touched.email && formik.errors.email
                      ? "border-rose-500 focus:border-rose-500"
                      : "border-border focus:border-primary"
                  }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-xs text-rose-500 font-medium">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono font-semibold text-primary mb-1.5 uppercase">
                  Subject (Optional)
                </label>
                <input
                  id="subject"
                  type="text"
                  {...formik.getFieldProps("subject")}
                  placeholder="Project inquiry / Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm text-primary placeholder-muted/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono font-semibold text-primary mb-1.5 uppercase">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...formik.getFieldProps("message")}
                  placeholder="Tell me about your project, timeline, or requirements..."
                  className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-primary placeholder-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none ${
                    formik.touched.message && formik.errors.message
                      ? "border-rose-500 focus:border-rose-500"
                      : "border-border focus:border-primary"
                  }`}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="mt-1 text-xs text-rose-500 font-medium">
                    {formik.errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-sm font-semibold flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="w-4 h-4 animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
