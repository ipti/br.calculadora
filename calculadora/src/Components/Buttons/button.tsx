import React from "react";
import { ButtonStyle } from "./style";


interface ButtonProps {
    title?: string,
    onClick?: () => void,
    type?: string
}

const Button: React.FC <ButtonProps> = ({ title, onClick, type }) => {
    return (
        <ButtonStyle id={type} onClick={onClick}>
            {title}
        </ButtonStyle>
    )
}

export default Button;