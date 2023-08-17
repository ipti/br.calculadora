import React from "react";
import { Background, Container, Padding, Row } from "../../Style/GlobalStyles";
import vectorLeft from "../../assets/images/vector-left.svg";
import vectorTop from "../../assets/images/vector-top.svg";
import vectorRight from "../../assets/images/vector-right.svg";
import { VectorLeft, VectorRight, VectorTop, Stack } from "./style";
import Button from "../Buttons/button";

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
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
                    <Padding padding="32px">
                        <Row id="start">
                            <Button title={"Calculadora"} type="primary" />
                            <Button title={"Autoavaliação"} type="secondary" />
                        </Row>
                           {children}
                    </Padding>
                </Container>
            </Stack>

        </div>
    )
}

export default Layout;