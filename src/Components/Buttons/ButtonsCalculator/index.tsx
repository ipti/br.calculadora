import React from "react";
import { Back, Buttons } from "./style";

interface PropsAttributes {
    title?: string,
    onClick?: () => void,
    width?: string
}

const ButtonCalculator: React.FC<PropsAttributes> = ({ title, onClick, width }) => {
    return (
        <Back width={width}>
            <Buttons width={width} onClick={onClick}>
                <h1>{title}</h1>
            </Buttons>
        </Back>
    )
}

export default ButtonCalculator;