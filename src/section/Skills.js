import React from "react";
import SkillLists from "../component/SkillLists";
import skillsData from "../data/skills"

const Skills = () => {

    const [dataSkills] = React.useState(skillsData)

    return ( 
        <div className="flex flex-col mx-auto mb-[270px] mt-[122px]" id="skills">
            <h1 className="text-center px-[18px] text-[50px] font-semibold mb-[75px] xl:mb-[143px]">Skills That I've Mastered</h1>
            <SkillLists skills={dataSkills} />
        </div>
     );
}
 
export default Skills;