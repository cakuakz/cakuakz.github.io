const Description = () => {
    return ( 
        <div className="bg-black py-[144px] px-[48px] subpixel-antialiased" id="description">
            <div  data-aos="fade-right" data-aos-duration="500" data-aos-offset="300" data-aos-once="once">
                <h1 className="text-white text-[55px] font-semibold text-center">Let’s get to know<br/> about me!</h1>

                <p className="text-[#CDCCCB] leading-relaxed text-[24px] text-center font-medium mt-[74px]">Third-year Information Systems student with hard-working and highly<br/>dedicated traits. Responsible person with interest in Android Software<br/>Development, and Website Development. Experienced in several<br/>projects in Software Development.</p>

                <div className="grid xl:grid-cols-2 mt-[75px] items-center">
                    <div className="flex justify-center xl:justify-end xl:pr-[18px] space-x-[14px]">
                        <h1 className="text-[#A8BCDB] text-center text-[64px] font-semibold">4</h1>
                        <p className="text-[#CDCCCB] pt-4 text-[22px]">Completed<br/> Projects</p>
                    </div>
                    <div className="flex justify-center xl:justify-start xl:pl-[30px] space-x-[14px]">
                        <h1 className="text-[#A8BCDB] text-center text-[64px] font-semibold">2</h1>
                        <p className="text-[#CDCCCB] pt-4 text-[22px] font-normal">Years of<br/> Experience</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Description;