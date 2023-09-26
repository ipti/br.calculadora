import React from "react";
import { BackNP, ButtonsNP } from "./style";

interface PropsAttributes {
    title?: string,
    onClick?: () => void,
    width?: string,
}

const ButtonsNextProx: React.FC<PropsAttributes> = ({ title, onClick, width }) => {
    const handleClickProx = () => {
        // console.log(`O botão "${title}" foi clicado.`);
        if (onClick) {
            onClick();
        }
    };

    return (
        <div onClick={handleClickProx}>
            <BackNP width={width} >
                <ButtonsNP width={width}>
                    <h1>{title}</h1>
                </ButtonsNP>
            </BackNP>
        </div>
    );
};

export default ButtonsNextProx;
