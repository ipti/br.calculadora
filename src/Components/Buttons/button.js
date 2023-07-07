import React from "react";
import { ButtonStyle } from "./style";


const Button = ({ title, onclick, type }) => {
    return (
        <ButtonStyle id={type} onClick={onclick}>
            {title}
        </ButtonStyle>
    )
}

export default Button;