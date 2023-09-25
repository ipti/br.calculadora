import React, { useState } from 'react'

import ResultComponent from '../Models'

import imagemEspelho from '../../assets/images/imagesWord/espelho.svg';
import imagemMeuLugar from '../../assets/images/imagesWord/meu_lugar.svg';
import imagemInspira from '../../assets/images/imagesWord/inspira.svg';
import imagemDescoberta from '../../assets/images/imagesWord/descoberta.svg';
import imagemFazNegocios from '../../assets/images/imagesWord/faz_negocios.svg';
import imagemNaJornada from '../../assets/images/imagesWord/na_jornada.svg';
import imagemMinhaHistoria from '../../assets/images/imagesWord/minha_historia.svg';
import imagemNaPratica from '../../assets/images/imagesWord/na_pratica.svg';

const atividadesPorMundo = {
    "Mundo Espelho": {
        atividades: [
            "Swot pessoal",
            "Proposta de valor",
            "Canvas",
        ],
        imagemUrl: imagemEspelho,
    },
    "Mundo Meu Lugar": {
        atividades: [
            "Identidade",
            "Descrevendo meu lugar",
            "Nome do meu negócio",
        ],
        imagemUrl: imagemMeuLugar,
    },
    "Mundo Inspira": {
        atividades: [
            "Pesquisando referências",
            "Visitando quem faz",
            "Negócio social?",
        ],
        imagemUrl: imagemInspira,
    },
    "Mundo Descoberta": {
        atividades: [
            "Como é hoje e como poderia ser?",
            "Swot adaptada",
            "Minha receita",
        ],
        imagemUrl: imagemDescoberta,
    },
    "Mundo Faz Negócios": {
        atividades: [
            "Game On",
            "Raio-X do cliente",
            "Jornada do cliente",
        ],
        imagemUrl: imagemFazNegocios,
    },

    "Mundo Na Jornada": {
        atividades: [
            "Catalogando",
            "Precificando",
            "Preço na prática",
        ],
        imagemUrl: imagemNaJornada,
    },

    "Mundo Minha História": {
        atividades: [
            "Minha história e meu negócio",
            "Venda se puder",
            "Minha narrativa",
        ],
        imagemUrl: imagemMinhaHistoria,
    },
    "Mundo Na Prática": {
        atividades: [
            "Plano de ação (Mvp)",
            "Teste",
            "Análise dos resultados",
        ],
        imagemUrl: imagemNaPratica,
    },
};

const mapeamentoAtividades = {
    "Mundo Espelho": atividadesPorMundo["Mundo Espelho"].atividades,
    "Mundo Meu Lugar": atividadesPorMundo["Mundo Meu Lugar"].atividades,
    "Mundo Inspira": atividadesPorMundo["Mundo Inspira"].atividades,
    "Mundo Descoberta": atividadesPorMundo["Mundo Descoberta"].atividades,
    "Mundo Faz Negócios": atividadesPorMundo["Mundo Faz Negócios"].atividades,
    "Mundo Na Jornada": atividadesPorMundo["Mundo Na Jornada"].atividades,
    "Mundo Minha História": atividadesPorMundo["Mundo Minha História"].atividades,
    "Mundo Na Prática": atividadesPorMundo["Mundo Na Prática"].atividades,
};


const Activity = ({ questions, passar }) => {
    const results = {};

    const carregar = (dados) => {
        passar(dados);
    }

    for (const [category, questionList] of Object.entries(questions)) {
        let result = "";
        let indicesBetween6And9 = [];

        if (questionList.some((question) => question <= 5)) {
            result = atividadesPorMundo[category].atividades.join(", ");
        } else {
            indicesBetween6And9 = questionList
                .map((question, index) => ({ value: question, index }))
                .filter(({ value }) => value >= 6 && value <= 9)
                .map(({ index }) => index);

            if (indicesBetween6And9.length > 0) {
                result = indicesBetween6And9.map(index => atividadesPorMundo[category].atividades[index]).join(", ");
            }
        }
        results[category] = result;
    }


    const displayResults = () => {
        const resultComponents = [];
        const dadosNovo = [];

        for (const [category, questionList] of Object.entries(questions)) {
            if (results[category]) {

                const novoTeste = {
                    category: category,
                    activities: questionList,
                    result: results[category],
                }

                dadosNovo.push(
                    novoTeste
                )

                resultComponents.push(
                    <ResultComponent
                        key={category}
                        category={category}
                        activities={questionList}
                        result={results[category]}
                        imageUrl={atividadesPorMundo[category].imagemUrl}
                        isVisible={true}

                    />
                );
            }
        }
        carregar(dadosNovo);
        return resultComponents;
    };

    return (
        <div>
            {displayResults()}
        </div>
    );
};

export default Activity;