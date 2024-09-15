import { useState } from "react";
import project from "../data/projects";
import PortfolioCard from "../component/PortfolioCard";


const AllPortfolio = () => {
    const [cardData] = useState(project)

    return ( 
        <div className="flex flex-col mt-32 px-36 mb-10">
            <h1 className="text-5xl font-bold">Projects</h1>
            <p className="text-sm font-normal text-[#a59c95] mt-4">Showcase of my projects on software development</p>
            <div className="grid grid-cols-3 gap-y-6 mt-6">
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