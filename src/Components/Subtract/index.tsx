import { useState } from "react";
import { Column, Grid, Padding, Row, RowResponse } from "../../Style/GlobalStyles";
import Input from "../Input";
import { BackgroundBody, BackgroundBodyDown, Container, IconPlus, RowRed, Rows, Title, CustomRow, TitleSmall } from "./style";


const Subtract = () => {


    const [custoProduc, setCustoProduc] = useState(0);
    const [maoObra, setMaoObra] = useState(0);
    const [custo, setCusto] = useState(0)


    var totais = (parseFloat(custoProduc.toString()) + parseFloat(maoObra.toString()))


    return (
        <>
            <Container>
                <BackgroundBodyDown>
                    <RowResponse>
                        <RowRed />
                        <Rows>
                            <Column style={{ alignItems: "center" }}>

                                <Title style={{ margin: "2px auto" }}>Preço na Prática</Title>
                                <Padding padding="0px" />
                                <Padding />
                                <TitleSmall>1° forma de calcular o preço</TitleSmall>
                                <Row>
                                    <Padding padding="2px" width="auto" />
                                    <Grid checkMockup={[{}, {}, {}, {}]}>
                                        <Input value={custo ? ((custo * 0.5) * 2 + parseFloat(custo.toString())).toFixed(2) : "100%"} text="Preço" />
                                        <Input value={custo} type="number" onChange={(e: any) => setCusto(e.target.value)} text="Custo" />
                                        <Input value={custo ? custo * 0.5 : "25%"} text="Pagamento pelo trabalho" />
                                        <Input value={custo ? custo * 0.5 : "25%"} text="Lucro para o Negócio" />
                                    </Grid>
                                </Row>
                                <Padding padding="20px" />
                            </Column>
                        </Rows>
                    </RowResponse>
                </BackgroundBodyDown>
                <Padding padding="16px" />
                <BackgroundBody>
                    <RowResponse style={{ width: "100%" }}>
                        {/* <RowRed /> */}
                        <Rows>
                            <Column style={{ alignItems: "center", marginTop: "59px", marginLeft: "0px", padding: "10px" }}>

                                <TitleSmall>2° forma de calcular o preço</TitleSmall>
                                <Padding padding="20px" />
                                <CustomRow>
                                    <Row id="center">
                                        <Input value={custoProduc} onChange={(e: any) => { setCustoProduc(e.target.value); }} type="number" text="Custo de Produção" />
                                        <Column id="center">
                                            <IconPlus color="#EC64A1;">+</IconPlus>
                                        </Column>
                                        <Input value={maoObra} onChange={(e: any) => { setMaoObra(e.target.value); }} type="number" text="Mão de Obra" />
                                        <Column id="center">
                                            <IconPlus color="#80BB3A">=</IconPlus>
                                        </Column>
                                        <Input value={totais} text="Custos Totais (CT)" />
                                    </Row>
                                    <Padding padding="16px" />
                                    <Row id="center">
                                        <Input value={totais} text="Custos Totais (CT)" />
                                        <Column id="center">
                                            <IconPlus color="#475DA7">x</IconPlus>
                                        </Column>
                                        <Input value={0.3} text="0,3 (30% de lucro)" />
                                        <Column id="center">
                                            <IconPlus color="#E7362F">=</IconPlus>
                                        </Column>
                                        <Input value={(totais * 0.3).toFixed(2)} text="Lucro" />
                                    </Row>
                                    <Padding padding="16px" />
                                    <Row id="center">
                                        <Input value={totais} text="Custos Totais" />
                                        <Column id="center">
                                            <IconPlus color="#BE7CB3">+</IconPlus>
                                        </Column>
                                        <Input value={(totais * 0.3).toFixed(2)} text="Lucro (Negócio)" />
                                        <Column id="center">
                                            <IconPlus color="#F3B03D">=</IconPlus>
                                        </Column>
                                        <Input value={(totais + totais * 0.3).toFixed(2)} text="Preço" />
                                    </Row>
                                </CustomRow>
                                <Padding padding="20px" />
                            </Column>
                        </Rows>
                    </RowResponse>
                </BackgroundBody>
                <Padding padding="16px" />

            </Container>
        </>
    )
}

export default Subtract;