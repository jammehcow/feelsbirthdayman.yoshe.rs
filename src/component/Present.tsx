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
import React, { useEffect, useState } from "react";

export interface IPresentProps {
    src: string;
    width: string | number;
    title: string;
    audioClip: string | undefined;
    volume?: number | undefined;
    revealDelay: number;
    footer?: JSX.Element | Array<JSX.Element> | undefined;
    children: JSX.Element | Array<JSX.Element> | undefined;
}

export const Present = ({title, src: imageSource, width, children, footer, audioClip, revealDelay, volume}: IPresentProps) => {
    let [isModalOpen, setModalOpen] = useState(false);
    let [hasOpened, setHasOpened] = useState(false);

    useEffect(() => {
        // Just sets the opacity as soon as the modal opens for the first time
        if (isModalOpen)
            setHasOpened(true);
    }, [isModalOpen]);

    function open() {
        if (!audioClip || hasOpened) {
            setModalOpen(true);
            return;
        }

        const audioSource = new Audio(audioClip);
        if (!!volume) {
            audioSource.volume = volume;
        }
        audioSource.play();

        setTimeout(() => {
            setModalOpen(true);
        }, revealDelay);
    }

    return (
        <Box>
            <Image src={imageSource}
                  opacity={hasOpened ? 0.4 : 1}
                  cursor="pointer"
                  w={width}
                  p={6}
                  alt="Present clipart"
                  onClick={() => open()} />
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
