"use client";

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import { ExperienceDetails } from "./experience-details";

const experienceConfig = [
  {
    position: "Software Engineer",
    company: "Axiata Digital Labs",
    time: "2022 — 2024",
    address: "Colombo, Sri Lanka",
    companyLink: "https://www.axiatadigitallabs.com/",
    work: `Spearheaded developing of microservices-based applications for customer data management within the Digi Migration System. 
    Designed and implemented scalable solutions utilizing Java Spring Boot ,JPA and associated technologies for optimal system 
    performance and reliability.
`,
  },
  {
    position: "Software Engineer",
    company: "Xeptagon",
    time: "2021-2022",
    address: "Colombo, Sri Lanka",
    companyLink: "https://www.xeptagon.com/",
    work: `Led autonomous drone-based antenna detection system development, combining expertise in Python, Java, and machine learning 
    technologies.`,
  },
  {
    position: "Intern",
    company: "Singapore University of Technology and Design",
    time: "2018 Jun — 2018 Dec",
    address: "Colombo, Sri Lanka",
    companyLink: "https://www.creativesoftware.com/",
    work: `Drove real-time analysis of oil rig behaviours by designing and developing ReactJS and TypeScript-based web application in
partnership with 3D Development Team. Architected and developed Site Reliability Engineering (SRE) dashboard and
supporting services using the MERN stack, alongside a deployment workflow for efficient management of customer
information. Ensured robust security measures by engineering secure, cookie-based authentication system utilising Google
OAuth for server-side user authentication.`,
  },
];

export const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          {experienceConfig.map((experience, index) => (
            <ExperienceDetails
              key={index}
              position={experience.position}
              company={experience.company}
              time={experience.time}
              address={experience.address}
              companyLink={experience.companyLink}
              work={experience.work}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
