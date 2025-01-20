import Image from "next/image";

import { AnimatedText } from "@/components/animated-text";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Layout } from "@/components/layout";
import { Skills } from "@/components/skills";
import profilePic from "../../public/images/profile/dinely-about.png";
import { Publication } from "@/components/publication";
const About = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText
          text="About me"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <div className="grid grid-cols-4 gap-16 sm:gap-8">
          <div className="col-span-3 flex flex-col items-start justify-start lg:col-span-4 lg:order-2 text-dark">
            <p className="font-medium">
              Solutions-driven Full Stack Developer with expertise in
              microservices architecture and enterprise application development.
              Demonstrated success in designing scalable RESTful APIs,
              optimizing system performance, and implementing robust software
              solutions using Java Spring Boot and React ecosystems. Strong
              track record in delivering complex technical solutions,to
              mission-critical telecom applications. 
            </p>
            <p className="font-medium my-4">
              Combines deep technical knowledge with innovative problem-solving capabilities,
              particularly in developing high-performance applications with
              focus on user experience and system reliability. Proven ability to
              work independently and drive projects from conception to
              deployment, while maintaining high code quality standards and
              optimal system performance.
            </p>
            <p className="font-medium my-4">
              Passionate about continuously evolving technical expertise,
              exploring emerging technologies, and delivering innovative
              software engineering solutions. Known for driving seamless
              integration of complex systems, improving code quality, and
              improving application maintainability through best practices.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-4 flex items-center justify-center lg:order-1">
            <Image
              priority
              src={profilePic}
              alt="Hasitha Jayasundara's image"
              className="w-max h-auto rounded-2xl border-2 border-solid border-dark"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <Skills />
        <Publication/>
        <Experience />
        <Education />
      </Layout>
    </main>
  );
};

export default About;
