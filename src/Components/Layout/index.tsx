import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/button";
import { Background, Container, Padding, Row } from "../../Style/GlobalStyles";
import vectorLeft from "../../assets/images/vector-left.svg";
import vectorTop from "../../assets/images/vector-top.svg";
import vectorRight from "../../assets/images/vector-right.svg";
import { VectorLeft, VectorRight, VectorTop, Stack } from "./style";

interface Props {
    children: React.ReactNode;
    set: React.Dispatch<React.SetStateAction<number>>;
    value?: number;
}

const Layout = ({ children, set, value }: Props) => {
    return (
        <div style={{ width: "100%", height: "100%", position: "fixed" }}>
            <Stack>
                <Background />
                <VectorLeft>
                    <img alt="" src={vectorLeft} />
                </VectorLeft>
                <VectorTop>
                    <img alt="" src={vectorTop} />
                </VectorTop>
                <VectorRight>
                    <img alt="" src={vectorRight} />
                </VectorRight>
                <Container>
                    <Padding padding="32px 12px">
                        {children}
                    </Padding>
                </Container>
            </Stack>
        </div>
    );
};

export default Layout;
