
const About = () => {
    return ( 
        <div className="grid xl:grid-cols-2 pt-[169px] items-center mb-[169px] text-center xl:text-start" id="about" data-aos="fade-up" data-aos-duration="3000">
            <div className="px-[20px] xl:pl-[160px] pt-[45px] space-y-[31px]">
                <div>
                    <span className="name text-[54px] font-semibold">Rafi Irfansyah</span>
                    <h1 className="name text-[54px] font-semibold relative">is here!</h1>
                </div>
                <h3 className="text-[28px] text-slate-400">Hardworking person interested in Website Developer, and Software Developer.</h3>
                
            </div>
            <div className="pl-[68px] lg:pl-[150px] xl:pl-[200px] 2xl:pl-[250px] pt-[100px] w-[85%] lg:pt-0 lg:opacity-100 lg:items-center">
                <img src="profilepict.png" alt="" className="bg-clip-border bg-gradient-to-t from-white to-[#859FC7] rounded-t-full" />
            </div>
            
        </div>
     );
}
 
export default About;