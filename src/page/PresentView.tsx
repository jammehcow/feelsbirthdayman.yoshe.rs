import { Box, Button, Flex, Heading, Image, LinkBox, LinkOverlay, ScaleFade, Text, VStack } from "@chakra-ui/react";
import React from "react";

import {Present} from "../component";
import pagChompImage from "/assets/PagChomp.3x.png";
import matArtImage from "/assets/matArt.png";

import present01 from "/assets/present_01.png";
import present02 from "/assets/present_02.png";
import present03 from "/assets/present_03.png";
import present04 from "/assets/present_04.png";
import present05 from "/assets/present_05.jpg";

export interface IPresentsViewProps {
    onAllOpened: () => void;
}

export const PresentView = ({onAllOpened}: IPresentsViewProps) => {
    return (
        <ScaleFade in={true}>
            <VStack shouldWrapChildren>
                <Box mt={32} textAlign="center">
                    <Heading fontSize="2xl">
                        <Image display="inline-block"
                            src={pagChompImage}
                            w={10}
                            mr={5}
                            alt="PagChomp BetterTTV emote" />
                        Presents time
                    </Heading>
                    <Text fontSize="lg" mt={4}>
                        Shitty images for shitty presents, pick one!
                    </Text>
                </Box>
                <Flex w="65vh"
                    mt={32}
                    ml="auto"
                    flexDir="row"
                    flexWrap="wrap"
                    justifyContent="space-around">
                    <Present src={present01}
                        audioClip="/assets/oot_reveal.mp3"
                        revealDelay={7900}
                        volume={0.5}
                        title="A cameo from Carolina Ravassa"
                        width="20vh">
                        <video src="/assets/cameo.mp4"
                            style={{"maxHeight": "60vh"}}
                            onLoadStart={(v) => v.currentTarget.volume = .5}
                            controls />
                    </Present>
                    <Present src={present02}
                        audioClip="/assets/drumroll.mp3"
                        revealDelay={4350}
                        volume={.2}
                        title="cbtDank does the wiggle"
                        width="20vh"
                        footer={<Text fontSize="md">Clipped by twitch.tv/Abillaze</Text>}>
                        <video src="/assets/bill_twitchclip.mp4"
                            height="70vh"
                            onLoadStart={(v) => v.currentTarget.volume = .5}
                            controls />
                    </Present>
                    <Present src={present03}
                        audioClip="/assets/win95_shutdown.mp3"
                        revealDelay={700}
                        volume={.3}
                        title="Kudoboard from the Offliners"
                        width="20vh">
                        <LinkBox>
                            <LinkOverlay href="https://www.kudoboard.com/boards/PbUvpgXX" isExternal>
                                <Image src="/assets/kudoboard-logo.webp"
                                    p={5}
                                    borderRadius={10}
                                    bg="rgba(0, 0, 0, .3)"
                                    alt="Kudboard logo" />
                            </LinkOverlay>
                        </LinkBox>
                    </Present>
                    <Present src={present04}
                        audioClip="/assets/cheese.mp3"
                        revealDelay={300}
                        volume={.3}
                        title="Some weirdos saying/doing stuff"
                        footer={<Text fontSize="md">by whaleship, cam top left</Text>}
                        width="20vh">
                        <Box w="100%" h="40vh">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/5LePOlgi_IA"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
                        </Box>
                    </Present>
                    <Present src={present05}
                        audioClip="/assets/dadSmash.mp3"
                        revealDelay={3000}
                        volume={.3}
                        title="Fred reborn"
                        footer={<Text fontSize="md">Art by Mat4ba</Text>}
                        width="20vh">
                        <Image src={matArtImage}
                            w="40vw"
                            alt="Dragon art by Mat4ba" />
                    </Present>
                </Flex>
                <Button colorScheme="green"
                    mt={20}
                    onClick={onAllOpened}>
                    I'm finished :)
                </Button>
            </VStack>
        </ScaleFade>
    );
}
