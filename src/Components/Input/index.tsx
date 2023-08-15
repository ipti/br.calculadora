import React from "react";
import { InputStyle, Text } from "./style";
import { Column } from "../../Style/GlobalStyles";

interface PropsInput {
    text?: string
}

const Input = ({ text }: PropsInput) => {
    return (
        <>
            {/* <Text>
                {text}
            </Text> */}
            <InputStyle />
        </>
    )
}

export default Input;