import React from "react";
import { InputStyle, Size, Text } from "./style";

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
            <Size width={width}>
                <Text style={style}>
                    {text}
                </Text>
                <InputStyle type={type} value={value} onChange={onChange} width={width}/>
             </Size>
    )
}

export default Input;