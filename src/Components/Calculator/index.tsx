import { Column, Padding, Row } from "../../Style/GlobalStyles";
import ButtonCalculator from "../Buttons/ButtonsCalculator";
import { Back, Card, Container, Visor } from "./style";

const Calculator = () => {
    return (
        <Container>
            <Card>
                <Padding padding="32px">
                    <Column>
                        <Row id="center">
                            <Back>
                                <Visor />
                            </Back>
                        </Row>
                        <Padding padding="8px" />
                        <Row id="space-between">
                            <ButtonCalculator title="Ac" />
                            <ButtonCalculator title="+/-" />
                            <ButtonCalculator title="%" />
                            <ButtonCalculator title="÷" />
                        </Row>
                        <Padding padding="8px" />
                        <Row id="space-between">
                            <ButtonCalculator title="7" />
                            <ButtonCalculator title="8" />
                            <ButtonCalculator title="9" />
                            <ButtonCalculator title="x" />
                        </Row>
                        <Padding padding="8px" />
                        <Row id="space-between">
                            <ButtonCalculator title="4" />
                            <ButtonCalculator title="5" />
                            <ButtonCalculator title="6" />
                            <ButtonCalculator title="-" />
                        </Row>
                        <Padding padding="8px" />
                        <Row id="space-between">
                            <ButtonCalculator title="1" />
                            <ButtonCalculator title="2" />
                            <ButtonCalculator title="3" />
                            <ButtonCalculator title="+" />
                        </Row>
                        <Padding padding="8px" />
                        <Row id="space-between">
                            <ButtonCalculator width="110" title="0" />
                            <ButtonCalculator title="." />
                            <ButtonCalculator title="=" />
                        </Row>
                    </Column>
                </Padding>
            </Card>
        </Container>
    )
}

export default Calculator;