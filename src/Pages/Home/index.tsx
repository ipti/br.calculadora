import Calculator from "../../Components/Calculator";
import Layout from "../../Components/Layout";
import Subtract from "../../Components/Subtract";
import { ContainerHome, Grid } from "./style";


const Homepage = () => {
    return (
        <Layout>
            <ContainerHome>
                <Grid>
                    <Subtract />
                    <Calculator />
                </Grid>
            </ContainerHome>
        </Layout>
    )
}

export default Homepage;