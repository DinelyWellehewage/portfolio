"use client";

import { motion } from "framer-motion";

import {
  DockerIcon,
  Grafana,
  Java,
  JavaScriptIcon,
  JenkinsIcon,
  KubernetesIcon,
  MySqlIcon,
  PostGreSqlIcon,
  RabbitMq,
  ReactIcon,
  RedisIcon,
  SonarQube,
  Spring,
  Swagger,
  TypeScriptIcon,
} from "./icons";

type SkillType = {
  name: string;
  icon: React.FC<{ className: string }>;
};

const config: SkillType[] = [
  { name: "Java", icon: Java },
  { name: "Spring", icon: Spring },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "React", icon: ReactIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Kubernetes", icon: KubernetesIcon },
  { name: "Jenkins", icon: JenkinsIcon },
  { name: "MySql", icon: MySqlIcon },
  { name: "Postgresql", icon: PostGreSqlIcon },
  { name: "Redis", icon: RedisIcon },
  { name: "RabbitMq", icon: RabbitMq },
  { name: "SonarQube", icon: SonarQube },
  { name: "Swagger", icon: Swagger },
  { name: "Grafana", icon: Grafana },
];

export const Skills = () => (
  <>
    <h2 className="text-dark font-bold text-8xl mt-64 w-full text-center mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8">
      Skills
    </h2>
    <div className="w-full h-full grid grid-cols-7 gap-10 xl:grid-cols-5 md:grid-cols-4 xs:grid-cols-2">
      {config.map(({ name, icon: Icon }) => (
        <motion.div
          key={name}
          className="flex flex-col items-center cursor-pointer"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.08 }}
        >
          <Icon className="w-20" />
          <span className="mt-2 text-sm font-semibold text-dark">{name}</span>
        </motion.div>
      ))}
    </div>
  </>
);
