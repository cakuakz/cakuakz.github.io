import SkillCircle from "./SkillCircle";

const SkillLists = ({ skills }) => {
    return ( 
        <div className="flex flex-col lg:grid lg:grid-cols-2 xl:flex xl:flex-row justify-center items-center mb-12 xl:space-x-10">
            {skills.map((skill, index) => (
                <SkillCircle 
                    key={index}
                    image={skill.image}
                    className={`py-[34px] pr-[34px] pl-[31.5px] ${
                        index % 2 === 0 ? 'lg:justify-self-end xl:justify-self-start' : 'lg:justify-self-start xl:justify-self-end'
                    }`}
                />
            ))}
        </div>
     );
}

export default SkillLists;

