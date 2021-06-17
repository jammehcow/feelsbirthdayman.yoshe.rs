import {
    Box,
    Button,
    Center,
    Divider,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text
} from "@chakra-ui/react";
import React, { useState } from "react";

export interface IPresentProps {
    src: string;
    width: string | number;
    title: string;
    footer?: JSX.Element | Array<JSX.Element> | undefined;
    children: JSX.Element | Array<JSX.Element> | undefined;
}

export const Present = ({title, src: imageSource, width, children}: IPresentProps) => {
    let [isModalOpen, setModalOpen] = useState(false);

    return (
        <Box>
            <Image src={imageSource}
                  cursor="pointer"
                  w={width}
                  p={6}
                  alt="Present clipart"
                  onClick={() => setModalOpen(true)} />
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} isCentered>
                <ModalOverlay />
                <ModalContent p="10" minW="40vw">
                    <ModalHeader fontSize="2xl">
                        {title}
                        <Divider />
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Center>
                            {children}
                        </Center>
                    </ModalBody>
                    <ModalFooter>
                        {footer}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}
