import {
    Box,
    Button,
    Center,
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
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Center>
                            {children}
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
}
