import { useState } from "react";
import { BackgroundJournal, Container, IconPlus, Pratica, Title, } from "./style";
import { Column, Padding, Row } from "../../Style/GlobalStyles";
import Input from "../Input";


const Subtract = () => {
    const [value1, setValue1] = useState<number | null | undefined>(42723);
    return (
        <>
            <Container>
                <Pratica>
                    <Row>
                        <Column>
                            <Title>Preço na Prática</Title>
                            <Padding padding="16px" />
                            <Row>
                                <Input />
                                <Column id="center">
                                    <IconPlus color="#EC64A1;">+</IconPlus>
                                </Column>
                                <Input />
                                <Column id="center">
                                    <IconPlus color="#80BB3A">=</IconPlus>
                                </Column>
                                <Input />
                            </Row>
                            <Padding padding="16px" />
                            <Row>
                                <Input />
                                <Column id="center">
                                    <IconPlus color="#475DA7">+</IconPlus>
                                </Column>                                <Input />
                                <Column id="center">
                                    <IconPlus color="#E7362F">=</IconPlus>
                                </Column>
                                <Input />
                            </Row>
                            <Padding padding="16px" />
                            <Row>
                                <Input />
                                <Column id="center">
                                    <IconPlus color="#BE7CB3">+</IconPlus>
                                </Column>
                                <Input />
                                <Column id="center">
                                    <IconPlus color="#F3B03D">=</IconPlus>
                                </Column>
                                <Input />
                            </Row>
                        </Column>
                    </Row>
                </Pratica>
                <Padding padding="16px" />
                <Pratica>
                    <Title style={{ fontSize: "34.478px" }}>2ª forma de calcular o preço</Title>
                    <Row>
                        <Input text="Preço" />
                        <Input text="Custo" />
                        <Input text="Pagamento pelo trabalho" />
                        <Input text="Lucro para o Negócio" />
                    </Row>
                </Pratica>
            </Container>
        </>
    )
}

export default Subtract;