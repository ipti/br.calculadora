import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Importe Route diretamente

import Calculator from "../../Components/Calculator";
import Layout from "../../Components/Layout";
import Subtract from "../../Components/Subtract";
import { Padding } from "../../Style/GlobalStyles";
import { ContainerHome, Grid } from "./style";
import NotFound from "../../Components/NotFound"

const Homepage = () => {
    const [page, setPage] = useState(0);

    return (
        <Router>
            <Layout value={page} set={setPage}>
                <Routes>
                    <Route path="/" element={
                        <ContainerHome>
                            <Padding padding="16px" />
                            <Grid>
                                <Subtract />
                                <Calculator />
                            </Grid>
                        </ContainerHome>
                    } />
                    <Route path="*" element={ // Rota para "Not found" caso não exista nenhuma outra chamada
                        <ContainerHome>
                            <NotFound />
                        </ContainerHome>
                    } />
                </Routes>
            </Layout>
        </Router>
    );
};

export default Homepage;
