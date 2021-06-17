import React, { useState } from "react";
import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Twemoji } from "react-emoji-render";

import feelsBirthdayManImage from "/assets/FeelsBirthdayMan.3x.png";
import clapImage from "/assets/Clap.3x.gif";

import ttsSound from "/assets/tts.mp3";

export interface IIntroViewProps {
    onProgress: () => void;
}

const ttsAudioPlayer = new Audio(ttsSound);

export const IntroView = () => {
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
                <Image display="inline" src={feelsBirthdayManImage} />
                <Image display="inline" src={clapImage} />
            </Box>
            <Heading size="lg" mt={20}>
                Yo John,
            </Heading>
            <Text mt={5} fontSize="lg">
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
        </VStack>
    );
}
