import Image from "next/image";
import Link from "next/link";

import { AnimatedText } from "@/components/animated-text";
import { Layout } from "@/components/layout";
import profilePic from "../public/images/profile/dinely.png";

const Home = () => {
  return (
    <main className="flex items-center w-full min-h-screen text-dark">
      <Layout className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-center w-full lg:flex-col gap-16">
          <div className="w-96 flex items-center justify-center">
            <Image
              priority
              src={profilePic}
              alt="Dinely Shanuka's picture"
              className="w-full md:inline-block"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center text-dark">
            <AnimatedText
              text="Hi, I'm Dinely"
              className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a results-driven software developer with extensive experience
              in building innovative and scalable solutions, I am passionate
              about crafting efficient software that exceeds business
              expectations. With a proven track record in backend and full-stack
              development, I excel at delivering high-quality, cutting-edge
              applications that optimize operations and empower businesses to
              achieve their goals.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              {/*<Link
                href="#"
                className="flex items-center gap-5 bg-dark text-light p-2 px-6 rounded-lg text-lg 
                font-semibold hover:bg-light hover:text-dark border-2
                border-solid border-transparent hover:border-dark"
                download={true}
              >
                Resume
                <ExternalLink />
              </Link>*/}
              <Link
                href="mailto:dinelywh78@gmail.com"
                className="flex items-center gap-5 bg-dark text-light p-2 px-6 rounded-lg text-lg 
                font-semibold hover:bg-light hover:text-dark border-2
                border-solid border-transparent hover:border-dark"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Home;
