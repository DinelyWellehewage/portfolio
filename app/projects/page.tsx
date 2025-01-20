import { AnimatedText } from "@/components/animated-text";
import { FeaturedProject } from "@/components/featured-project";
import { Layout } from "@/components/layout";
import gameHub from "../../public/images/projects/gameHub.png";
import ecommerce from "../../public/images/projects/ecommerce.png";
import indoor from "../../public/images/projects/indoor.png";
const projects = [
  {
    title: "Virtual Experience for Indoor Cycling",
    summary: "Research paper published on Conference ICVARS",
    img: indoor,
    // github: "https://github.com/hasithajayasundara/frontend-mentor-mini-projects/tree/main/space-travel",
    link: "https://dl.acm.org/doi/10.1145/3546607.3546608",
  },
  {
    title: "Game Hub",
    summary: "Platform with a diverse collection of games",
    img: gameHub,
    github: "https://github.com/DinelyWellehewage/game-hub",
    link: "https://game-hub-ten-bice.vercel.app/",
  },
  {
    title: "Ocean Prime E-Commerce ",
    summary:
      "E-commerce application designed to provide a seamless online shopping experience",
    img: ecommerce,
    github:
      "https://github.com/DinelyWellehewage/ocean-prime-ecommerce?tab=readme-ov-file",
    link: "https://github.com/DinelyWellehewage/ocean-prime-ecommerce?tab=readme-ov-file",
  },
];
const Projects = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText
          text="Projects"
          className="mb-16 lg:!text-7xl sm:!mb-8m sm:!text-6xl xs:!text-4xl"
        />
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
  );
};
export default Projects;
