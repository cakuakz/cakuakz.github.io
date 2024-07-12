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
        description: `This project is a mobile-based application designed to provide users with a self-healing experience for managing their mental health. It is my final project for obtaining a bachelor's degree. The project is built using Flutter for mobile, Express.js for the backend, and Next.js for the admin website.`,
        image: 'project_image.png',
        stackPict: [
            <SiFlutter />,
            <SiTypescript />,
            <BiLogoPostgresql />,
            <SiPrisma />
        ],
        link: 'https://github.com/orgs/Kalma-Project/repositories'
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