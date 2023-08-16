import React from "react";
import { InputStyle, Size, Text } from "./style";
import { Column, Padding } from "../../Style/GlobalStyles";

interface PropsInput {
    text?: string,
    style?: React.CSSProperties,
    width?: string,
    type?: string,
    onChange?: any,
    value?: any
}

const Input = ({ text, style, width, type, onChange, value }: PropsInput) => {
    return (
        <Column>
            <Size width={width}>
                <Text style={style}>
                    {text}
                </Text>
                <Padding />
                <InputStyle type={type} value={value} onChange={onChange} width={width}/>
            </Size>
        </Column>
    )
}

export default Input;