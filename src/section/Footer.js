import { GithubIcon, LinkedinIcon, MailIcon } from "../component/internalIcons";

const Footer = () => {
    return ( 
        <div className="bg-[#1F1F1F] pt-[122px] pb-[97px] justify-center space-y-[30px]" id="footer">
            <h1 className="text-center font-semibold text-[45px] lg:text-[55px] text-white">Wanna make awesome and<br/>impactful Website?</h1>
            <p className="text-center font-medium text-[14px] lg:text-[22px] text-[#CDCCCB]">Contact Me Through</p>
            <div className="flex flex-row justify-center space-x-[25.32px]">
                <a href="https://github.com/cakuakz" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                    <GithubIcon />
                </a>
                <a href="/" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                    <MailIcon />
                </a>
                <a href="https://www.linkedin.com/in/mohamad-rafi-irfansyah-413551212/" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                    <LinkedinIcon />
                </a>
            </div>
        </div>
     );
}
 
export default Footer;