import Calculator from "../../Components/Calculator";
import Layout from "../../Components/Layout";
import Subtract from "../../Components/Subtract";
import { Padding } from "../../Style/GlobalStyles";
import { ContainerHome, Grid } from "./style";


const Homepage = () => {
    return (
        <Layout>
            <ContainerHome>
                <Grid>
                    <Subtract />
                    {/* <Padding padding="10%"/> */}
                    <Calculator />
                </Grid>
            </ContainerHome>
        </Layout>
    )
}

export default Homepage;