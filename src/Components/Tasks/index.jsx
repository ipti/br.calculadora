import React, { useState, useRef } from "react";
import { Column, Grid, Padding, Row, RowResponse } from "../../Style/GlobalStyles";
import { useLocation, useSearchParams } from "react-router-dom";
import { Container, CenterButton, CustomButton, TextName } from "./style";
import Activity from "../Activity";
import Button from "../Buttons/button";
import { FaFilePdf, FaArrowDown } from 'react-icons/fa';
import ButtonCalculator from "../Buttons/ButtonsCalculator";

import { useNavigate } from "react-router-dom";
import AnswersPDF from "../Reports/Answers";

import { Title2 } from "../Feedback/style";


const Tasks = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { nome, questions } = location.state || {};
    const dadosObjRef = useRef({});

    console.log("Recebendo o nome para tasks", nome);


    const receberDados = (dados) => {
        dadosObjRef.current = dados;
    }

    const handleNavigateToLogin = () => {
        navigate("/");
    }

    const handleGeneratePDF = ({ nome, dados }) => {
        console.log("mostrando valores passados para handleGeneratePDF", nome, dados)
        AnswersPDF.renderHelloWorld({ nome, dados });
    }


    return (
        <>
            <Container>
                <Padding padding="10px" />
                <Button
                    title={<><FaArrowDown style={{ marginRight: '8px' }} /> Baixar PDF</>}
                    type={"ternary"}
                    onClick={() => handleGeneratePDF({ nome, dados: dadosObjRef.current })}

                    className="hover-button"
                />
                <Padding padding="10px" />
                <Row style={{ justifyContent: "center" }}>
                <TextName>
                    <Title2>Nome: {nome} </Title2>
                    </TextName>
                </Row>
                
                <Padding padding="10px" />
                <RowResponse>
                    <Row id="center"></Row>
                    <Activity questions={questions} passar={receberDados} />
                </RowResponse>
                <Padding padding="16px" />
                <div className="center_button">
                    <CenterButton>
                        <ButtonCalculator
                            width="250"
                            title="Sair"
                            onClick={handleNavigateToLogin}
                        />
                    </CenterButton>
                </div>
                <Padding padding="32px" />
            </Container>
        </>
    );
};

export default Tasks;