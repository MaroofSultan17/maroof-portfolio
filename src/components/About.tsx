import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCode, FiCpu, FiLayers, FiUsers } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { Card } from "@/components/ui/card";

export interface AboutProps {
  personal: PersonalGetResponseDTO;
}

export default function About({ personal }: AboutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const highlights = [
    {
      icon: FiCode,
      title: "Backend & Systems",
      desc: "Architecting high-throughput RESTful APIs, queue workers with BullMQ & Redis, and event pipelines with RabbitMQ.",
    },
    {
      icon: FiCpu,
      title: "Streaming & Payments",
      desc: "Integrating Mux adaptive video streaming and secure multi-method checkouts using Braintree, Stripe, and PayPal.",
    },
    {
      icon: FiLayers,
      title: "Database Performance",
      desc: "Optimizing relational & document databases (MySQL, MongoDB, PostgreSQL) through aggregation pipelines and indexing.",
    },
    {
      icon: FiUsers,
      title: "Technical Mentorship",
      desc: "Mentoring junior engineers, conducting thorough code reviews, and enforcing clean architecture standards.",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="About"
          title="Engineering Background"
          subtitle="Building reliable distributed web applications, streaming pipelines, and high-volume commerce platforms."
        />

        <div ref={ref} className="mt-14 grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-5 text-muted text-base sm:text-lg leading-relaxed"
          >
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-primary">
              Engineering with pragmatism and scale.
            </h3>

            <p>
              {personal.bio}
            </p>

            <p>
              Currently, I build backend infrastructure for FilmLauncher, engineering adaptive
              HLS video playback via the Mux Video API, distributed BullMQ queue workers on Redis,
              and decoupled microservices coordinated with RabbitMQ.
            </p>

            <p>
              Previously at AlphaSoft360, I contributed to Gempacked, a platform serving over
              7,000 active users with a catalog exceeding 40,000 items. I engineered Symfony
              REST APIs for Next.js interfaces, integrated Braintree payment workflows, and
              mentored junior developers on production delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="group p-5 flex flex-col justify-between hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-2.5 w-fit rounded-xl bg-primary/10 text-primary border border-primary/20 mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-primary mb-1.5 group-hover:text-primary-hover transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
