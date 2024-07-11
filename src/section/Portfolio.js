import { useState } from "react";
import PortfolioCardList from "../component/PortfolioCardList";
import LANGUAGE from "../utils/languange";
import project from "../data/projects";
import { capitalCase } from "text-case";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
    const [cardData] = useState(project)

    return ( 
        <div className="flex flex-col items-center text-center mt-40" id="portfolio">
            <p className="text-[#b597f2] text-base mb-6">{LANGUAGE.PORTFOLIO_PAGE.TITLE}</p>
            <h1 className="text-6xl text-[#404040] font-semibold mb-8">{LANGUAGE.PORTFOLIO_PAGE.SUBTITLE}</h1>
            <p className=" text-sm text-center font-normal text-[#a59c95] mb-16">{LANGUAGE.PORTFOLIO_PAGE.DESCRIPTION}</p>
            <PortfolioCardList card={cardData}/>
            <button className="arrow-button">
                <p className="text-medium font-normal">{capitalCase(LANGUAGE.BUTTON.SEE_PROJECTS)}</p>
                <FaArrowRight className="right-arrow-portfolio"/>
            </button>
        </div>
     );
}
 
export default Portfolio;