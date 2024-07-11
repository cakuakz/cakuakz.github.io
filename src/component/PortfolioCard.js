import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";

const PortfolioCard = ({ title, image, description, dataAos, stackPict }) => {
    return ( 
        <Card
            isPressable 
            className="transition ease-in-out py-4 px-4 max-w-sm hover:-translate-y-1 z-0" 
            data-aos={dataAos}
            isHoverable
        >
            <CardHeader className="pb-0 pt-2 flex-col items-start">
                <p className="text-tiny mb-3 font-normal">My Project</p>
                <h4 className="font-bold text-large">{title}</h4>
            </CardHeader>
            <CardBody className="flex flex-col items-center space-y-5">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={image}
                    width={330}
                />
                <p className="text-tiny mb-3 font-normal">{description}</p>
                <CardFooter className="mt-5 px-0 flex flex-row justify-between">
                    <p className="text-tiny uppercase font-bold">Stack Used:</p>
                    <div className="flex flex-row items-center space-x-3">
                        {stackPict.map((pict) => (
                            pict
                        ))}
                    </div>
                </CardFooter>
            </CardBody>
        </Card>
     );
}
 
export default PortfolioCard;