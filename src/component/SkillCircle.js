const SkillCircle = ({ image, className, aos, aosDuration, aosEasing, aosOnce, aosDelay }) => {
    return (
      <div className={`skill-inner saturate-0 hover:saturate-100 justify-center rounded-full w-[190px] h-[197px] bg-[#F4F4F4] border-2 border-[#F4F4F4] hover:border-white hover:bg-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ${className}`}>
        {image}
      </div>
    );
  };
  
  export default SkillCircle;