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
    work: `Spearheaded the development of microservices-based applications within the Digi Migration System, focusing on customer 
    data management. Designed and implemented scalable solutions using Java Spring Boot, JPA, and related technologies to enhance 
    system performance and reliability. Key achievements include the development of high-performance RESTful APIs for efficient data 
    handling, implementation of caching mechanisms to improve response times, and the architecture of an event-driven microservice to 
    ensure scalability. Observability and monitoring tools were integrated to enable proactive performance monitoring, while rigorous 
    unit testing and SonarQube compliance ensured exceptional code quality.
`,
  },
  {
    position: "Software Engineer",
    company: "Xeptagon",
    time: "2021-2022",
    address: "Colombo, Sri Lanka",
    companyLink: "https://www.xeptagon.com/",
    work: `Led the development of an autonomous drone-based antenna detection system, leveraging Python, Java, and machine learning 
    technologies. The project was independently managed from research to implementation, showcasing end-to-end ownership. Key 
    achievements include the creation of an automated drone flight path system using the DJI Mavic Pro 3 Drone Mobile SDK and the 
    implementation of a YOLOv3-based object detection system for accurate antenna identification on telecommunication towers.`,
  },
  {
    position: "Intern",
    company: "Singapore University of Technology and Design",
    time: "2018 Jun — 2018 Dec",
    address: "Colombo, Sri Lanka",
    companyLink: "https://www.sutd.edu.sg/",
    work: `Conducted research on indoor localization, utilizing ROS and computer vision technologies to enhance navigation accuracy. 
    Implemented and evaluated ORB-SLAM2 with Intel RealSense T265 tracking and D435 depth cameras, significantly improving spatial 
    awareness. Key achievements include the development of custom odometry fusion algorithms in Java and Python, optimized through 
    benchmarking against the Robot Localization package, and boosting CNN model performance by applying iterative training strategies 
    using X-ray machine datasets.`,
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
