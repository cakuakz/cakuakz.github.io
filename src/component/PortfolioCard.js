import { Card, CardBody, CardFooter, CardHeader, Image, useDisclosure } from "@nextui-org/react";
import CustomModal from "./CustomModal";
import LANGUAGE from "../utils/languange";
import { capitalCase, sentenceCase } from "text-case";

const PortfolioCard = ({ title, projectType, image, description, dataAos, stackPict, link }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return ( 
        <>
            <CustomModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                modalTitle={capitalCase(LANGUAGE.WARNING.RESTRICTED_PROJECT)}
                modalBody={<p className="text-gray-600">{sentenceCase(LANGUAGE.WARNING.RESTRICTED_PROJECT_DETAIL)}</p>}
                modalPlacement="center"
            />
            <Card
                isPressable 
                className="p-3 max-w-sm self-center z-0 mb-4 lg:mb-0 lg:self-auto" 
                data-aos={dataAos}
                isHoverable
                onPress={() => {
                    if (link === '#') {
                        onOpen()
                    } else {
                        window.location.href = link
                    }
                }}
            >
                <CardHeader className="pb-0 pt-2 flex-col items-start">
                    <p className="text-tiny mb-3 font-normal">{projectType}</p>
                    <h4 className="font-bold text-large">{title}</h4>
                </CardHeader>
                <CardBody className="flex flex-col items-center space-y-5">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={image}
                        width={330}
                        height={70}
                    />
                    <p className="text-tiny mb-3 font-normal">{description}</p>
                </CardBody>
                <CardFooter className="mt-5 px-3 flex flex-row justify-between">
                    <p className="text-tiny uppercase font-bold">Stack Used:</p>
                    <div className="flex flex-row items-center space-x-3">
                        {stackPict.map((pict) => (
                            pict
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </>
     );
}
 
export default PortfolioCard;