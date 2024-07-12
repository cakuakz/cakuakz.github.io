import PortfolioCard from "./PortfolioCard";

const PortfolioCardList = ({ card }) => {
    return ( 
        <div className="flex flex-row space-x-8 justify-center mb-16 w-screen">
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