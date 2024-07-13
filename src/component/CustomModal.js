import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Button } from "@nextui-org/react"
import LANGUAGE from "../utils/languange"
import { capitalCase } from "text-case"

const CustomModal = ({
    modalTitle,
    modalBody,
    isOpen, 
    modalPlacement, 
    onOpenChange,
    useCloseButton,
    useSubmitButton,
    submitAction
}) => {
    return (
        <Modal
            isOpen={isOpen} 
            placement={modalPlacement}
            onOpenChange={onOpenChange} 
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{modalTitle}</ModalHeader>
                        <ModalBody>
                            {modalBody}
                        </ModalBody>
                        <ModalFooter>
                            {useCloseButton && (
                                <Button color="danger" variant="light" onPress={onClose}>
                                    {capitalCase(LANGUAGE.BUTTON.CLOSE)}
                                </Button>
                            )}
                            {useSubmitButton && (
                                <Button color="primary" onPress={submitAction}>
                                    {capitalCase(LANGUAGE.BUTTON.SUBMIT)}
                                </Button>
                            )}
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default CustomModal