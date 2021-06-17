import React, { useState } from "react";
import { Box, Button, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
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
    );
}