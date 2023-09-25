import React, { useState, useRef } from "react";
import { Column, Grid, Padding, Row, RowResponse } from "../../Style/GlobalStyles";
import { useLocation, useSearchParams } from "react-router-dom";
import { Container, CenterButton, CustomButton } from "./style";
import Activity from "../Activity";
import Button from "../Buttons/button";
import { FaFilePdf, FaArrowDown } from 'react-icons/fa';
import ButtonCalculator from "../Buttons/ButtonsCalculator";

import { useNavigate } from "react-router-dom";
import AnswersPDF from "../Reports/Answers";


const Tasks = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { questions } = location.state || {};
    const dadosObjRef = useRef({});


    const receberDados = (dados) => {
        dadosObjRef.current = dados;
    }

    const handleNavigateToLogin = () => {
        navigate("/");
    }

    const handleGeneratePDF = (props) => {
        AnswersPDF.renderHelloWorld(props);
    }


    return (
        <>
            <Container>
                <Padding padding="10px" />
                <Button
                    title={<><FaArrowDown style={{ marginRight: '8px' }} /> Baixar PDF</>}
                    type={"ternary"}
                    onClick={() => handleGeneratePDF(dadosObjRef.current)}
                    className="hover-button"
                />
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