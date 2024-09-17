import { useState } from "react";
import NumberPortfolio from "../component/NumberPortfolio";
import SkillLists from "../component/SkillLists";
import LANGUAGE from "../utils/languange";
import skills from "../data/skills";

const Experience = () => {

    const [skillData] = useState(skills)

    return ( 
        <div className="flex flex-col justify-center text-center mt-40" id="about">
            <div className="flex flex-col justify-between px-6 lg:flex-row lg:px-64 lg:ml-12 mb-7">
                {LANGUAGE.ABOUT_PAGE.ABOUT.map((item, index) => (
                    <NumberPortfolio title={item.TITLE} number={item.NUMBER} key={index}/>
                ))}
            </div>
            <p className="text-[#b597f2] text-base mb-6">{LANGUAGE.ABOUT_PAGE.LANGUAGE}</p>
            <h1 className="text-6xl text-[#404040] dark:text-[#dcf6ff] font-semibold mb-8">{LANGUAGE.ABOUT_PAGE.TITLE}</h1>
            <p className=" text-sm text-center font-normal text-[#a59c95] mb-16">{LANGUAGE.ABOUT_PAGE.SUBTITLE}</p>
            <SkillLists skills={skillData}/>
        </div>
     );
}
 
export default Experience;