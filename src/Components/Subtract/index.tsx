import { useState } from "react";
import { Column, Padding, Row } from "../../Style/GlobalStyles";
import Input from "../Input";
import { BackgroundBody, Container, IconPlus, Title } from "./style";


const Subtract = () => {


    const [custoProduc, setCustoProduc] = useState(0);
    const [maoObra, setMaoObra] = useState(0);


    var totais = (parseFloat(custoProduc.toString()) + parseFloat(maoObra.toString()))

    return (
        <>
            <Container>
                <BackgroundBody>
                    <Row id="center">
                        <Column style={{ alignItems: "center" }}>
                            <Padding padding="32px" />
                            <Title style={{ margin: "auto" }}>Preço na Prática</Title>
                            <Padding padding="32px" />
                            <Row id="center">
                                <Input value={custoProduc} onChange={(e: any) => {setCustoProduc(e.target.value);}} type="number" text="Custo de Produção" />
                                <Column id="center">
                                    <IconPlus color="#EC64A1;">+</IconPlus>
                                </Column>
                                <Input value={maoObra} onChange={(e: any) => {setMaoObra(e.target.value);}} type="number" text="Mão de Obra" />
                                <Column id="center">
                                    <IconPlus color="#80BB3A">=</IconPlus>
                                </Column>
                                <Input value={totais}  text="Custos Totais (CT)" />
                            </Row>
                            <Padding padding="16px" />
                            <Row id="center">
                                <Input value={totais} text="Custos Totais (CT)" />
                                <Column id="center">
                                    <IconPlus color="#475DA7">+</IconPlus>
                                </Column>
                                <Input value={0.3} text="0,3 (30% de lucro)" />
                                <Column id="center">
                                    <IconPlus color="#E7362F">=</IconPlus>
                                </Column>
                                <Input value={(totais*0.3).toFixed(2)} text="Lucro" />
                            </Row>
                            <Padding padding="16px" />
                            <Row id="center">
                                <Input value={totais} text="Custos Totais" />
                                <Column id="center">
                                    <IconPlus color="#BE7CB3">+</IconPlus>
                                </Column>
                                <Input value={(totais*0.3).toFixed(2)} text="Lucro para o Negócio" />
                                <Column id="center">
                                    <IconPlus color="#F3B03D">=</IconPlus>
                                </Column>
                                <Input value={(totais + totais*0.3).toFixed(2)} text="Preço" />
                            </Row>
                            <Padding padding="32px" />
                        </Column>
                    </Row>
                </BackgroundBody>
                <Padding padding="16px" />
                <BackgroundBody>
                    <Column style={{ alignItems: "center" }}>
                        <Padding padding="32px" />
                        <Title style={{ fontSize: "30.478px" }}>2° forma de calcular o preço</Title>
                        <Padding padding="32px" />
                        <Row>
                            <Padding padding="2px" width="8%" />
                            <Input value={"100%"} width="50%" text="Preço" />
                            <Input value={"50%"} width="50%" text="Custo" />
                            <Input value={"25%"} text="Pagamento pelo trabalho" />
                            <Input value={"25%"}text="Lucro para o Negócio" />
                        </Row>
                        <Padding padding="32px" />
                    </Column>
                </BackgroundBody>
                <Padding padding="16px" />
            </Container>
        </>
    )
}

export default Subtract;