import { Button } from "@chakra-ui/react";
import React from "react";

export interface IPresentsViewProps {
    onAllOpened: () => void;
}

export const PresentView = ({onAllOpened}: IPresentsViewProps) => {
    return (
        <Button onClick={onAllOpened}>Click me</Button>
    );
}
