import { Box, Button, Flex, Heading, Image, LinkBox, LinkOverlay, Text, VStack } from "@chakra-ui/react";
import React from "react";

import {Present} from "../component";
import pagChompImage from "/assets/PagChomp.3x.png";

export interface IPresentsViewProps {
    onAllOpened: () => void;
}

export const PresentView = ({onAllOpened}: IPresentsViewProps) => {
    return (
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
                <Present src="/assets/present_01.png"
                      audioClip="/assets/oot_reveal.mp3"
                      revealDelay={7900}
                      volume={0.3}
                      title="A cameo from Carolina Ravassa"
                      width="25vh">
                    <video src="/assets/cameo.mp4"
                          style={{"maxHeight": "60vh"}}
                          onLoadStart={(v) => v.currentTarget.volume = .5}
                          controls />
                </Present>
                <Present src="/assets/present_02.png"
                      audioClip="/assets/drumroll.mp3"
                      revealDelay={4350}
                      volume={.2}
                      title="cbtDank does the wiggle"
                      width="25vh"
                      footer={<h1>Clipped by twitch.tv/Abillaze</h1>}>
                    <video src="/assets/bill_twitchclip.mp4"
                          height="70vh"
                          onLoadStart={(v) => v.currentTarget.volume = .5}
                          controls />
                </Present>
                <Present src="/assets/present_03.png"
                      audioClip="/assets/win95_shutdown.mp3"
                      revealDelay={700}
                      volume={.3}
                      title="Kudoboard from the Offliners"
                      width="25vh">
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
                {/* TODOL video from whal */}
                {/* <Present src="/assets/present_04.png"
                    title="Yo"
                    width="25vh">
                </Present> */}
            </Flex>
            <Button colorScheme="green"
                  mt={20}
                  onClick={onAllOpened}>
                I'm finished :)
            </Button>
        </VStack>
    );
}
