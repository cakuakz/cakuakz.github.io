import { useState } from "react";
import project from "../data/projects";
import PortfolioCard from "../component/PortfolioCard";
import LANGUAGE from "../utils/languange";
import { capitalCase, sentenceCase } from "text-case";


const AllPortfolio = () => {
    const [cardData] = useState(project)

    return ( 
        <div className="flex flex-col mt-32 lg:px-36 px-3 lg:mb-10 mb-6">
            <h1 className="text-5xl font-bold">{capitalCase(LANGUAGE.PROJECTS.TITLE)}</h1>
            <p className="text-sm font-normal text-[#a59c95] mt-4">{sentenceCase(LANGUAGE.PROJECTS.SUBTITLE)}</p>
            <div className="grid xl:grid-cols-3 gap-y-6 mt-6">
                {cardData.map((cardItem) => (
                    <PortfolioCard 
                        title={cardItem.title}
                        projectType={cardItem.projectType}
                        image={cardItem.image}
                        description={cardItem.description}
                        stackPict={cardItem.stackPict}
                        link={cardItem.link}
                        dataAos="fade-right"
                    />
                ))}
            </div>
        </div>
     );
}
 
export default AllPortfolio;