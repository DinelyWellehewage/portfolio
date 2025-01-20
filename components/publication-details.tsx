import { motion } from "framer-motion";
import { useRef } from "react";

import { ListIcon } from "./list-icon";
import Link from "next/link";

type Props = {
  type: string;
  link: string;
  info: string;
};

export const PublicationDetails = ({ type, link, info }: Props) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ListIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <p className="font-medium w-full text-dark">{info}</p>
        <Link className="text-wrap block text-dark" target="_blank" href={link}>
          {link}
        </Link>
      </motion.div>
    </li>
  );
};
