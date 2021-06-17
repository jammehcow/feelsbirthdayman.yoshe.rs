import React, { useState } from "react";
import { Box, Button, Center, Container, Heading, HStack, Image, LinkOverlay, Text, VStack } from "@chakra-ui/react";
import { Twemoji } from "react-emoji-render";

import feelsBirthdayManImage from "/assets/FeelsBirthdayMan.3x.png";
import clapImage from "/assets/Clap.3x.gif";

import ttsSound from "/assets/tts.mp3";

export interface IIntroViewProps {
    onProgress: () => void;
}

const ttsAudioPlayer = new Audio(ttsSound);

export const IntroView = ({onProgress}: IIntroViewProps) => {
    // Container
    // FeelsBirthdayMan Clap
    // Opt: TTS?
    // Blurb
    // Audio button
    // (trig) confirm
    let [isTtsLoading, setTtsLoading] = useState(false);

    function ttsButtonCallback() {
        // Prevent doubleclick + leak
        if (isTtsLoading)
            return;

        // Now this is a dirty hack!
        // You can trick the browser into playing an audio source outside of the onClick event
        // by playing it and pausing it straight away prior to the setTimeout.
        // I wonder what sites use this to get around that restriction :\
        //
        // https://stackoverflow.com/a/38521250
        ttsAudioPlayer.play();
        ttsAudioPlayer.pause();

        // Yeah this instantiates a new audio player each time, but we have 3s to play with
        setTtsLoading(true);
        setTimeout(() => {
            setTtsLoading(false);
            ttsAudioPlayer.play();
        }, 3000);
    }

    return (
        <>
            <VStack mt={48} shouldWrapChildren>
                <Box>
                    <Image display="inline-block" src={feelsBirthdayManImage} pl={10} mr={5} alt="FeelsBirthdayMan BetterTTV emote" />
                    <Image display="inline-block" src={clapImage} alt="Clap BetterTTV emote" />
                </Box>
                <Heading size="xl" mt={20}>
                    Yo John,
                </Heading>
                <Text mt={5} fontSize="xl">
                    I know reading isn't your strongpoint so click
                    <Button mx={2}
                        variant="outline"
                        borderColor="#ccc"
                        pt={1}
                        size="sm"
                        fontSize="lg"
                        isLoading={isTtsLoading}
                        onClick={ttsButtonCallback}>
                        <Twemoji svg className="twemoji" text=" :point_right::speaker::point_left: "/>
                    </Button>
                    to enable TTS
                </Text>
                <Container>
                    <Text mt={10} align="center" fontSize="lg">
                        Happy birthday Mr Yoshi from everyone in your community. We thought we'd put together a few cool things to celebrate this&nbsp;
                        <Text as="s">unfortunate</Text> exciting occasion of turning 15.
                        <br />
                        Pog
                    </Text>
                </Container>
                <Button mt={20}
                    size="lg"
                    colorScheme="teal"
                    rightIcon={<Twemoji text=":arrow_right:" />}
                    onClick={onProgress}>
                    Continue
                </Button>
            </VStack>
            <Box pos="absolute" bottom={0} left="0">
                <Center w="100vw">
                    <LinkOverlay pb={4} href="https://github.com/jammehcow/feelsbirthdayman.yoshe.rs/">
                        <HStack spacing={5}>
                            <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
                                <path fill="#eee" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                            <Text fontSize="lg" display="inline">
                                Source Code
                            </Text>
                        </HStack>
                    </LinkOverlay>
                </Center>
            </Box>
        </>
    );
}
