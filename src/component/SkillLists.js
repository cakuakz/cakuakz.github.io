import SkillCircle from "./SkillCircle";

const SkillLists = ({ skills }) => {
    return ( 
        <div className="grid lg:flex lg:flex-row justify-center space-y-10 lg:space-x-[50px]">
            <SkillCircle image={skills[0].image} className="py-[34px] pr-[34px] pl-[31.5px]"/>
            <SkillCircle image={skills[1].image} className="py-[34px] pr-[34px] pl-[31.5px]"/>
            <SkillCircle image={skills[2].image} className="py-[32px] pr-[34px] pl-[31.5px]"/>
            <SkillCircle image={skills[3].image} className="py-[34px] pr-[34px] pl-[31.5px]"/>
            <SkillCircle image={skills[4].image} className="py-[34px] pr-[34px] pl-[31.5px]"/>
        </div>
     );
}
 
export default SkillLists;