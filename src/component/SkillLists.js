import SkillCircle from "./SkillCircle";

const SkillLists = ({ skills }) => {
    return ( 
        <div className="flex flex-row justify-center mb-12 space-x-10">
            {skills.map((skill) => (
                <SkillCircle 
                    image={skill.image}
                    className="py-[34px] pr-[34px] pl-[31.5px]"
                />
            ))}
        </div>
     );
}
 
export default SkillLists;