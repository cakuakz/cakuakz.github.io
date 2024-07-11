import { 
    RiNextjsFill,
 } from "react-icons/ri";
 import { BiLogoPostgresql } from "react-icons/bi";
 import { 
    SiKotlin,
    SiTensorflow,
    SiFirebase,
    SiTypescript,
    SiFlutter,
    SiPrisma,
    SiTailwindcss,
    SiDotnet
 } from "react-icons/si";

const project = [
    {
        title: 'Kalma Project',
        description: 'This project is to make a company profile website for PT. Jangkar Sampuran Berkat, an indonesian company which serve the one stop ship and logistic services in indonesia port and area.',
        image: 'project_image.png',
        stackPict: [
            <SiFlutter />,
            <SiTypescript />,
            <BiLogoPostgresql />,
            <SiPrisma />
        ],
        link: 'https://github.com/cakuakz/JSB-Agency.git'
    },
    {
        title: 'AMATI Indonesia Mobile App',
        description: 'this project is a project to create a mobile application that can facilitate people who want to learn about SDGs and can connect villages and students for the betterment of the village which is used as a means of development for students who use this application.',
        image: 'project_image.png',
        stackPict: [
            <SiKotlin />,
            <SiTensorflow />,
            <SiFirebase />,
            <BiLogoPostgresql />,
        ],
        link: 'https://github.com/cakuakz/bangkit_amati.git'
    },
    {
        title: 'REGLA IFRS 9',
        description: 'This is an app i made with NTT Technology Indonesia while doing internship for internal accounting which is automation platform for processing customer needs related to IFRS and or PSAK',
        image: 'project_image.png',
        stackPict: [
            <RiNextjsFill />,
            <SiTypescript />,
            <SiTailwindcss />,
            <SiDotnet />
        ],
        link: '#'
    },
]

export default project;