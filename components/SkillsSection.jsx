import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiC } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 size={65} color="#DD4B25" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3 size={65} color="#2D53E5" />,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript size={65} color="#EFD81D" />,
    },
    {
      name: "React",
      icon: <FaReact size={65} color="#1399C4" />,
    },
    {
      name: "Next Js",
      icon: <TbBrandNextjs size={65} color="#DEDEDE" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt size={65} color="#E84D31" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap size={65} color="#8211F5" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={65} color="#36B7F0" />,
    },
    {
      name: "Angular",
      icon: <FaAngular size={65} color="#D6002F" />,
    },
    {
      name: "Java",
      icon: <FaJava size={65} color="#E51F24" />,
    },
    {
      name: "Spring",
      icon: <BiLogoSpringBoot size={65} color="#5DB72E" />,
    },
    {
      name: "Native C",
      icon: <SiC size={65} color="#A4B4C7" />,
    },
    {
      name: "Microsoft SQL Server",
      icon: <SiMicrosoftsqlserver size={65} color="#C42F2E" />,
    },
  ];
  return (
    <section className="bg-[#0C0D6B] px-9 py-12">
      <p className="text-5xl text-[#fff] font-semibold mb-10 text-center">
        Tecnologías usadas en nuestros proyectos
      </p>
      <div className="flex flex-row gap-x-7 md:w-4/6 md:mx-auto gap-y-5 flex-wrap w-full mx-3 justify-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col  items-center w-[85px] gap-y-2"
          >
            <div>{skill.icon}</div>
            <div className="text-center">
              <p className="font-semibold">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
