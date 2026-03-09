import Archemy from "../assets/Archemy.png";
import pybank from "../assets/pyBank.png";
import bytedesabor from "../assets/bytedesabor.png";
import CTF from "../assets/CTF.png";
import Reveal from "./Reveal";
import React from "react";
import { useTranslation } from 'react-i18next';

import {
    FaReact,
    FaJs,
    FaNodeJs,
    FaPython,
    FaGithubSquare,
    FaLinkedin
} from "react-icons/fa";

import { 
    SiGnubash,
    SiMongodb,
    SiRedux,
    SiLeetcode
} from "react-icons/si";

const Portifolio = () => {
    const { t } = useTranslation();

    const projects = [
        {
            img: bytedesabor,
            title: t('portfolio.projects.0.title'),
            description: t('portfolio.projects.0.description'),
            skills: [<FaReact/>, <SiRedux />, <FaJs/>, <SiMongodb/>],
        },
        {
            img: Archemy,
            title: t('portfolio.projects.1.title'),
            skills: [<SiGnubash/>],
            description: t('portfolio.projects.1.description'),
        },
        {
            img: CTF,
            title: t('portfolio.projects.2.title'),
            skills: [],
            description: t('portfolio.projects.2.description'),
        },
        {
            img: pybank,
            title: t('portfolio.projects.3.title'),
            skills: [<FaPython/>],
            description: t('portfolio.projects.3.description'),
        },
    ];

    return (
        <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
            <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>{t('portfolio.title')}</h1>

            {projects.map((project, index) => (
                <Reveal key={index}>
                    <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                        
                        <div className="w-full md:w-1/2">
                            <img 
                                src={project.img} 
                                alt={project.title}
                                className="w-full h-full object-cover rounded-lg shadow-lg" 
                            />
                        </div>

                        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                            
                            <div className="mb-4">
                                <h3 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center">
                                    {project.title}

                                    <span className="ml-4 flex space-x-2">
                                        {project.skills.map((skill, index) => (
                                            <span key={index}>{skill}</span>
                                        ))}
                                    </span>
                                </h3>
                            </div>    

                            <p className="text-gray-300 mb-4">{project.description}</p>

                        </div>

                    </div>
                </Reveal>
            ))}

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-10 text-3xl text-gray-300">
                
                <a
                    href="https://github.com/devalucky85"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithubSquare />
                </a>

                <a
                    href="https://linkedin.com/in/devkumarrr45"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://leetcode.com/DEVKUMAR4522"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiLeetcode />
                </a>

            </div>

        </div>
    )
}

export default Portifolio;