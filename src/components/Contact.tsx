import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { siteData } from "@/data/site";

const { personal } = siteData;

const field =
  "w-full rounded-2xl border-2 border-line bg-bg px-4 py-3.5 text-fg placeholder:text-muted/70 focus:border-blue focus:outline-none transition-colors";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      // The EmailJS template reads the form fields by name: name, email, message.
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY },
      );
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 py-20 sm:py-28">
      <div className="reveal card grid gap-12 p-6 sm:p-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="contact-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fg">
            Need a backend that holds up?
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-muted">
            I'm open to backend and full-stack opportunities, remote or hybrid, from Pakistan (UTC+5). Send a message and I'll
            reply within a day.
          </p>
          <a href={`mailto:${personal.email}`} className="btn-primary mt-8">
            <FiMail className="h-5 w-5" aria-hidden="true" />
            Email me
          </a>
          <ul className="mt-10 space-y-4 text-lg text-muted">
            <li className="flex items-center gap-3">
              <FiMail className="h-5 w-5 text-blue" aria-hidden="true" />
              <a href={`mailto:${personal.email}`} className="hover:text-fg transition-colors break-all">
                {personal.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="h-5 w-5 text-yellow" aria-hidden="true" />
              <a href={`tel:${personal.phone.replace(/\s+/g, "")}`} className="hover:text-fg transition-colors">
                {personal.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiMapPin className="h-5 w-5 text-red" aria-hidden="true" />
              {personal.location}
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <label className="block">
            <span className="mb-2 block font-semibold text-fg">Name</span>
            <input name="name" required minLength={2} autoComplete="name" placeholder="Your name" className={field} />
          </label>
          <label className="block">
            <span className="mb-2 block font-semibold text-fg">Email</span>
            <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
          </label>
          <label className="block">
            <span className="mb-2 block font-semibold text-fg">Message</span>
            <textarea name="message" required minLength={10} rows={5} placeholder="What are you working on?" className={`${field} resize-y`} />
          </label>
          <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-50">
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          <p role="status" className="text-center">
            {status === "sent" && <span className="text-[#34d399]">Message sent. I'll get back to you soon.</span>}
            {status === "error" && (
              <span className="text-red">Message not sent. Please email me directly at {personal.email}.</span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
