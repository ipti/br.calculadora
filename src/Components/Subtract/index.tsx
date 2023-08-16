import { useState } from "react";
import { Column, Padding, Row } from "../../Style/GlobalStyles";
import Input from "../Input";
import { BackgroundBody, Container, IconPlus, Title } from "./style";


const Subtract = () => {

    const [value1, setValue1] = useState<number | null | undefined>(42723);

    const [custoProduc, setCustoProduc] = useState(0);
    const [maoObra, setMaoObra] = useState(0);

    const soma = (a: number, b: number) => {
        const somas = parseInt(a.toString()) + parseInt(b.toString())
        console.log(somas)
        return somas
    }

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
                                <Input value={custoProduc} onChange={(e: any) => setCustoProduc(e.target.value)} type="number" text="Custo de Produção" />
                                <Column id="center">
                                    <IconPlus color="#EC64A1;">+</IconPlus>
                                </Column>
                                <Input value={maoObra} onChange={(e: any) => setMaoObra(e.target.value)} type="number" text="Mão de Obra" />
                                <Column id="center">
                                    <IconPlus color="#80BB3A">=</IconPlus>
                                </Column>
                                <Input value={soma(custoProduc, maoObra)} text="Custos Totais (CT)" />
                            </Row>
                            <Padding padding="16px" />
                            <Row id="center">
                                <Input text="Custos Totais (CT)" />
                                <Column id="center">
                                    <IconPlus color="#475DA7">+</IconPlus>
                                </Column>
                                <Input text="0,3 (30% de lucro)" />
                                <Column id="center">
                                    <IconPlus color="#E7362F">=</IconPlus>
                                </Column>
                                <Input text="Lucro" />
                            </Row>
                            <Padding padding="16px" />
                            <Row id="center">
                                <Input text="Custos Totais" />
                                <Column id="center">
                                    <IconPlus color="#BE7CB3">+</IconPlus>
                                </Column>
                                <Input text="Lucro para o Negócio" />
                                <Column id="center">
                                    <IconPlus color="#F3B03D">=</IconPlus>
                                </Column>
                                <Input text="Preço" />
                            </Row>
                            <Padding padding="64px" />
                        </Column>
                    </Row>
                </BackgroundBody>
                <Padding padding="16px" />
                <BackgroundBody>
                    <Column style={{ alignItems: "center" }}>
                        <Padding padding="32px" />
                        <Title style={{ fontSize: "34.478px" }}>2° forma de calcular o preço</Title>
                        <Padding padding="32px" />
                        <Row>
                            <Padding padding="2px" width="8%" />
                            <Input width="70%" text="Preço" />
                            <Input width="70%" text="Custo" />
                            <Input text="Pagamento pelo trabalho" />
                            <Input text="Lucro para o Negócio" />
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