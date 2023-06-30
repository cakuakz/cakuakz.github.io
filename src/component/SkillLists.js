import SkillCircle from "./SkillCircle";

const SkillLists = ({ skills }) => {
    return ( 
        <div className="grid gap-y-8 lg:flex lg:flex-row justify-center lg:space-x-[50px]">
            <SkillCircle 
                image={skills[0].image} 
                className="py-[34px] pr-[34px] pl-[31.5px]"
                aos="fade-up"
                aosDuration="750"
                aosEasing="linear"
                aosOnce="true"
                />

            <SkillCircle 
                image={skills[1].image} 
                className="py-[34px] pr-[34px] pl-[31.5px]"
                aos="fade-up"
                aosDuration="750"
                aosEasing="linear"
                aosOnce="true"
                aosDelay="500"
                />

            <SkillCircle 
                image={skills[2].image} 
                className="py-[32px] pr-[34px] pl-[31.5px]"
                aos="fade-up"
                aosDuration="750"
                aosEasing="linear"
                aosOnce="true"
                aosDelay="1000"
                />

            <SkillCircle 
                image={skills[3].image} 
                className="py-[34px] pr-[34px] pl-[31.5px]"
                aos="fade-up"
                aosDuration="750"
                aosEasing="linear"
                aosOnce="true"
                aosDelay="1500"
                />

            <SkillCircle 
                image={skills[4].image} 
                className="py-[34px] pr-[34px] pl-[31.5px]"
                aos="fade-up"
                aosDuration="750"
                aosEasing="linear"
                aosOnce="true"
                aosDelay="2000"
                />
        </div>
     );
}
 
export default SkillLists;