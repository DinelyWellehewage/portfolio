'use client';

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import { EducationDetails } from "./education-details";

export const Education = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8">
        Education
      </h2>
      <div className="w-[75%] lg:w-[90%] mx-auto relative" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2" >
          <EducationDetails
            type="Bachelor of Science (Hons) in Engineering - Electronic and Telecommunication Engineering"
            time="2017 - 2021"
            place="Colombo, Sri Lanka"
            info="University of Moratuwa"
          />
        </ul>
      </div>
    </>
  );
};
