import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import { useNavigate } from "react-router-dom"; // Importe useNavigate
import {
    Column,
    Padding,
    Row,
    RowResponse,
} from "../../Style/GlobalStyles";
import {
    Container,
    SheetLogin,
    Title,
    Title2,
    Title3,
} from "../Feedback/style";

import Input from "../Input";

import ButtonsNextProx from "../Buttons/ButtonsNextProx";
import logo from "../../assets/images/ON_Padrão.svg";
function Login() {


    const [nome, setNome] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();


    const handleButtonClick = () => {
        if (nome.trim() === "") {
            setErrorMessage("É necessário informar um valor no campo.");
        } else {
            // console.log(nome);
            setErrorMessage("");
            setNome("");
            navigate("/autoavaliacao", { state: { nome } });
        }
    };


    return (
        <Container>
            <Row style={{ justifyContent: "center" }}>
                <Title>Autoavaliação</Title>
            </Row>
            <Padding padding="28px" />
            <SheetLogin>
                <RowResponse>
                    <Padding padding="111px 10% 64px 12%">
                        <Column>
                            <Row id="start">
                                <Title3>Nome</Title3>
                            </Row>

                            <Padding padding="16px" />

                            <Row id="center">
                                <Input value={nome} width={"400px"} onChange={(e: any) => { setNome(e.target.value); }} type="text" placeholder="Informe seu nome" />
                            </Row>

                            {errorMessage && (
                                <Row id="center" style={{ color: "red", padding: "10px", marginTop: "10px"}}>
                                    {errorMessage}
                                </Row>
                            )}
                            <Padding padding="16px" />


                            <Row id="center">
                                <ButtonsNextProx
                                    width="250"
                                    title="Formulário"
                                    onClick={handleButtonClick}
                                />

                            </Row>
                        </Column>
                    </Padding>
                </RowResponse>
            </SheetLogin>
            <Padding padding="32px" />
        </Container>
    );
};

export default Login;

