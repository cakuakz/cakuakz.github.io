import PortfolioCard from "./PortfolioCard";

const PortfolioCardList = ({ card }) => {
    return ( 
        <div className="flex flex-col px-3 xl:flex-row xl:space-x-6 xl:justify-center mb-16 w-screen">
            <PortfolioCard 
                title={card[0].title}
                projectType={card[0].projectType}
                image={card[0].image}
                description={card[0].description}
                stackPict={card[0].stackPict}
                link={card[0].link}
                dataAos="fade-right"
            />
            <PortfolioCard 
                title={card[1].title}
                projectType={card[1].projectType}
                image={card[1].image}
                description={card[1].description}
                stackPict={card[1].stackPict}
                link={card[1].link}
                dataAos="fade-right"
            />
            <PortfolioCard 
                title={card[2].title}
                projectType={card[2].projectType}
                image={card[2].image}
                description={card[2].description}
                stackPict={card[2].stackPict}
                link={card[2].link}
                dataAos="fade-right"
            />
        </div>
     );
}
 
export default PortfolioCardList;