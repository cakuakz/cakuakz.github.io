import Navbar from "../component/Navbar";
import LANGUAGE from "../utils/languange";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {

    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = `${process.env.PUBLIC_URL}/rafiresume.pdf`
        link.download = 'rafiresume.pdf'
        link.click()
      }

    return ( 
        <div className="flex flex-col">
            <Navbar />
            <div className="grid justify-center xl:grid-cols-2 pt-56 items-center text-center xl:text-start" id="home" data-aos="fade-up" data-aos-duration="3000">
                <div className="flex flex-col items-center lg:items-start px-[20px] xl:pl-[160px]">
                    <span className="name text-[54px] font-semibold">{LANGUAGE.HOME.SHORTNAME}</span>
                    <h3 className="text-[28px] text-slate-400 mb-10">{LANGUAGE.HOME.BIO_DESC}</h3>
                    <button className="arrow-button" onClick={handleDownload}>
                        <p className="text-medium font-normal">Download CV</p>
                        <FaArrowRight className="right-arrow-portfolio"/>
                    </button>
                </div>
                <div className="pl-[68px] lg:pl-[150px] xl:pl-[200px] 2xl:pl-[250px] pt-[100px] w-[85%] lg:pt-0 lg:opacity-100 lg:items-center">
                    <img src="profilepict.png" alt="" className="bg-clip-border bg-gradient-to-t from-white to-[#859FC7] rounded-t-full" />
                </div>
            </div>
        </div>
     );
}
 
export default Home;