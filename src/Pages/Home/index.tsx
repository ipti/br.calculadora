import React from "react";
import Layout from "../../Components/Layout";
import Subtract from "../../Components/Subtract";
import { Grid } from "./style";
import Calculator from "../../Components/Calculator";

const Homepage = () => {
    return (
        <Layout>
            <div>
                <Grid>
                    <Subtract />
                    <Calculator />
                </Grid>
            </div>
            <div>
                sadkjbsdajkdbsa
            </div>
        </Layout>
    )
}

export default Homepage;