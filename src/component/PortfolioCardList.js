import PortfolioCard from "./PortfolioCard";

const PortfolioCardList = ({ card }) => {
    return ( 
        <div className="flex flex-col px-3 xl:flex-row xl:space-x-6 xl:justify-center mb-16 w-screen">
            {card.map((cardItem) => (
                <PortfolioCard 
                    title={cardItem.title}
                    image={cardItem.image}
                    description={cardItem.description}
                    stackPict={cardItem.stackPict}
                    link={cardItem.link}
                    dataAos="fade-right"
                />
            ))}
        </div>
     );
}
 
export default PortfolioCardList;