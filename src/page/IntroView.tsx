import React from "react";
import { Box, Heading, Image, VStack } from "@chakra-ui/react";

import feelsBirthdayManImage from "/assets/FeelsBirthdayMan.3x.png";
import clapImage from "/assets/Clap.3x.gif";

export interface IIntroViewProps {
    onProgress: () => void;
}

export const IntroView = () => {
    // Container
    // FeelsBirthdayMan Clap
    // Opt: TTS?
    // Blurb
    // Audio button
    // (trig) confirm
    return (
        <VStack mt={48} shouldWrapChildren>
            <Box>
                <Image display="inline" src={feelsBirthdayManImage} />
                <Image display="inline" src={clapImage} />
            </Box>
            <Heading size="lg" mt={20}>
                Yo John,
            </Heading>
        </VStack>
    );
}
