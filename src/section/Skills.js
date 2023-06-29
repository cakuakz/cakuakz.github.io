import React from "react";
import SkillLists from "../component/SkillLists";
import skillsData from "../data/skills"

const Skills = () => {

    const [dataSkills] = React.useState(skillsData)

    return ( 
        <div className="flex flex-col mx-auto mb-[300px]">
            <h1 className="text-center text-[50px] font-semibold mb-[143px]">Skills That I've Mastered</h1>
            <SkillLists skills={dataSkills} />
        </div>
     );
}
 
export default Skills;