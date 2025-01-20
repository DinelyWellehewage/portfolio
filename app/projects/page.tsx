import { AnimatedText } from "@/components/animated-text";
import { FeaturedProject } from "@/components/featured-project";
import { Layout } from "@/components/layout";

import manageLandingPage from '../../public/images/projects/manage-landing-page.png';
import nexter from '../../public/images/projects/nexter.png';
import slackClone from '../../public/images/projects/slack-clone.png';
import spaceTravel from '../../public/images/projects/space-travel.png';
import gameHub from '../../public/images/projects/gameHub.png';
import ecommerce from '../../public/images/projects/ecommerce.png';
import indoor from '../../public/images/projects/indoor.png';

const projects = [
  {
    title: "360-Degree Immersive Experience for Indoor Cycling",
    summary: "Research paper published on Conference ICVARS :International Conference on Virtual and Augmented Reality Simulations:",
    img: indoor,
    // github: "https://github.com/hasithajayasundara/frontend-mentor-mini-projects/tree/main/space-travel",
    link: "https://dl.acm.org/doi/10.1145/3546607.3546608",
  },
  {
    title: "Game Hub",
    summary: "Platform with a diverse collection of games",
    img: gameHub,
    github: "https://github.com/hasithajayasundara/frontend-mentor-mini-projects/tree/main/manage-landing-page",
    link: "https://managelphnj.netlify.app/",
  },
  {
    title: "Ocean Prime E-Commerce ",
    summary: "E-commerce application designed to provide a seamless online shopping experience",
    img: ecommerce,
    github: "https://github.com/DinelyWellehewage/ocean-prime-ecommerce?tab=readme-ov-file",
  },
];

const Projects = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText text="Projects" className="mb-16 lg:!text-7xl sm:!mb-8m sm:!text-6xl xs:!text-4xl" />
        <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          {projects.map((project, index) => (
            <div key={index} className="col-span-4 md:col-span-12">
              <FeaturedProject
                title={project.title}
                summary={project.summary}
                img={project.img}
                github={project.github}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </Layout>
    </main>
  )
};

export default Projects;
