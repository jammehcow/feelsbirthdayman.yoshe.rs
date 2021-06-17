import React from "react";
import { Container, Image, Text, VStack } from "@chakra-ui/react";

import peepoBye from "/assets/peepoBye.3x.gif";

export const ExitView = () => {
    return (
        <VStack textAlign="center" shouldWrapChildren>
            <Image mt={30} w={300} src={peepoBye} />
            <Container>
                <Text mt={40} fontSize="lg">
                    Hope you enjoyed this stuff and the little yoshi.
                    <br />
                    Thanks to all of the people who contributed in some shape or form to this. Y'all some real ones
                </Text>
            </Container>
            <Text mt={50} fontSize="md">
                cbtL
                <br />
                ~jammeh
            </Text>
        </VStack>
    );
}
