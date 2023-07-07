import React from "react";
import { Background, Container, Padding, Row } from "../../Style/GlobalStyles";
import Button from "../Buttons/button";
import vectorLeft from "../../assets/images/vector-left.svg";
import vectorTop from "../../assets/images/vector-top.svg";
import vectorRight from "../../assets/images/vector-right.svg";
import { VectorLeft, VectorRight, VectorTop, Stack } from "./style";


const Layout = ({ children }) => {
    return (
        <>
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
                <Row>
                    <Button title={"Calculadora"} type="primary" />
                    <Padding />
                    <Button title={"Calculadora"} type="secondary" />
                </Row>
                {children}
            </Container>
        </Stack>

        </>
    )
}

export default Layout;