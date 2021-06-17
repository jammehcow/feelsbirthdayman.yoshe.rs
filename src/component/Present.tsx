import { Box, Image } from "@chakra-ui/react";
import React from "react";

export interface IPresentProps {
    imageSource: string;
    width: string | number;
    modalContent: JSX.Element;
}

export const Present = ({imageSource, width, modalContent}: IPresentProps) => {
    return (
        <Box>
            <Image src={imageSource} alt="Present clipart" />
        </Box>
    );
}
