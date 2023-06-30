
const About = () => {
    return ( 
        <div className="grid xl:grid-cols-2 pt-[169px] items-center mb-[169px] text-center xl:text-start" id="about">
            <div className="px-[20px] xl:pl-[160px] pt-[45px] space-y-[31px]">
                <h1 className="text-[64px] font-semibold">Rafi Irfansyah<br></br> is here!</h1>
                <h3 className="text-[28px] text-slate-400">I like to develop beautiful websites for businesses around the world.</h3>
                
            </div>
            <div className="pl-[150px] lg:pl-[150px] xl:pl-[200px] opacity-0 2xl:pl-[250px] lg:opacity-100 items-center">
                <img src="profilepict.png" alt="" className="bg-clip-border bg-gradient-to-t from-white to-[#859FC7] rounded-t-full" />
            </div>
            
        </div>
     );
}
 
export default About;