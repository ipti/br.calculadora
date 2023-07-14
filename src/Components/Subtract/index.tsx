import { useState } from "react";
import { Background, BackgroundJournal, Container, } from "./style";
import { InputNumber } from 'primereact/inputnumber';
import { Column, Row } from "../../Style/GlobalStyles";
import Input from "../Input";


const Subtract = () => {
    const [value1, setValue1] = useState<number | null | undefined>(42723);
    return (
        <>
            <Container>
                <Background>
                    <Column>
                        <h1>Preço na Prática</h1>
                        <Row>
                            <Input />
                            <h1>+</h1>
                            <Input />
                        </Row>
                        <Row>
                            <Input />
                            <h1>+</h1>
                            <Input />
                        </Row>
                        <Row>
                            <Input />
                            <h1>+</h1>
                            <Input />
                        </Row>
                    </Column>
                </Background>
                <BackgroundJournal>
                    <h1>Preço na Prática</h1>
                </BackgroundJournal>
            </Container>
        </>
    )
}

export default Subtract;