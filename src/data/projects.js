import { 
    RiNextjsFill,
 } from "react-icons/ri";
 import { BiLogoPostgresql } from "react-icons/bi";
 import { TbBrandReactNative } from "react-icons/tb";
 import { 
    SiKotlin,
    SiTensorflow,
    SiFirebase,
    SiTypescript,
    SiFlutter,
    SiPrisma,
    SiTailwindcss,
    SiDotnet,
    SiAntdesign,
    SiPostgresql,
    SiExpo,
    SiLaravel,
    SiPhp
 } from "react-icons/si";

const project = [
    {
        title: 'Kalma Project',
        projectType: 'Thesis Project',
        description: `This project is a mobile-based application designed to provide users with a self-healing experience for managing their mental health. It is my final project for obtaining a bachelor's degree. The project is built using Flutter for mobile, Express.js for the backend, and Next.js for the admin website.`,
        image: '/kalma_pict.png',
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
        projectType: 'Bangkit Academy - Final Group Project',
        description: 'this project is a project to create a mobile application that can facilitate people who want to learn about SDGs and can connect villages and students for the betterment of the village which is used as a means of development for students who use this application.',
        image: '/amati_pict.png',
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
        projectType: 'Internship Project',
        description: 'This is an app i made with NTT Technology Indonesia while doing internship for internal accounting which is automation platform for processing customer needs related to IFRS and or PSAK',
        image: '/regla_pict.png',
        stackPict: [
            <RiNextjsFill />,
            <SiTypescript />,
            <SiTailwindcss />,
            <SiDotnet />
        ],
        link: '#'
    },
    {
        title: 'JSB Agency - Company Profile',
        projectType: 'Freelance Group Project',
        description: 'The JSB Agency website is created as a company profile for the agency, which specializes in providing trade services for shipments. The features included in this website are static web pages that contain information about JSB Agency, such as services, profiles, and contact details.',
        image: '/jsb_agency_pict.png',
        stackPict: [
            <RiNextjsFill />,
            <SiTypescript />,
            <SiTailwindcss />,
        ],
        link: '#'
    },
    {
        title: 'Monito - Petshop Admin Panel',
        projectType: 'Personal Project',
        description: 'Monito admin panel is a web-based tool for pet shop owners to manage inventory, orders, and customer data. It simplifies daily tasks, helping streamline operations and track business performance. It uses Next.Js Typescript with Ant Design and TailwindCSS for the frontend stack, and using Next.Js API Route collaborate with postgres/vercel for the backend, and using NextAuth for the authentication.',
        image: '/monito_pict.png',
        stackPict: [
            <RiNextjsFill />,
            <SiTypescript />,
            <SiTailwindcss />,
            <SiAntdesign />,
            <SiPostgresql />
        ],
        link: '#'
    },
    {
        title: 'Bang Beli Authentication Page',
        projectType: 'Pre - Internship Project',
        description: 'This project is a mobile app project to implement the authentication page for a startup in Indonesia named Bang Beli to join their internship program and this code of implementation made me get the internship. This is using React Native Typescript and Expo.',
        image: '/bangbeli_pict.png',
        stackPict: [
            <TbBrandReactNative />,
            <SiTypescript />,
            <SiExpo />,
        ],
        link: '#'
    },
    {
        title: 'Trashure',
        projectType: 'College Group Project',
        description: 'This is a website application project to make it easier for people to pick up the trash from their homes. This webapp is built using Laravel PHP for the simple CRUD and using only HTML CSS and Javascript for the website interaction.',
        image: '/trashure_pict.png',
        stackPict: [
            <SiLaravel />,
            <SiPhp />
        ],
        link: '#'
    }
]

export default project;