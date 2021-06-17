import { Button } from "@chakra-ui/react";
import React from "react";

import {Present} from "../component";

export interface IPresentsViewProps {
    onAllOpened: () => void;
}

export const PresentView = ({onAllOpened}: IPresentsViewProps) => {
    return (
        <>
            <Present src="/assets/present_01.png" title="A cameo from Carolina Ravassa" width="20vh">
                <video src="/assets/cameo.mp4"
                      style={{"maxHeight": "60vh"}}
                      onLoadStart={(v) => v.currentTarget.volume = .5}
                      controls />
            </Present>
            <Present src="/assets/present_02.png" title="Yo" width="20vh">
                {/* TODO: video */}
            </Present>
            <Present src="/assets/present_03.png" title="Yo" width="20vh">
                {/* TODO: video */}
            </Present>
            <Present src="/assets/present_04.png" title="Yo" width="20vh">
                {/* TODO: video */}
            </Present>
            <Button onClick={onAllOpened}>Click me</Button>
        </>
    );
}
