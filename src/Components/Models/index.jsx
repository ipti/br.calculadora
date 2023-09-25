import React from 'react';
import {
  ResultCardContainer,
  ResultCard,
  ResultCardHeading,
  FloatImage,
  ResultCardList, // Adicione a importação para ResultCardList
  ResultCardListItem, // Adicione a importação para ResultCardListItem
} from './style'; // Importe os estilos do arquivo style.ts
import { Background } from '../../Style/GlobalStyles';

const ResultComponent = ({ category, activities, result, imageUrl, isVisible }) => {
  if (isVisible) {
    // Dividir a string result em substrings usando uma vírgula como separador
    const resultElements = result.split(', ');

    return (
      <ResultCardContainer>
        <ResultCard>
          <ResultCardHeading>Atividade: <br />{category}</ResultCardHeading>

          {/* Use ResultCardList para criar uma lista ordenada */}
          <ResultCardList>
            {resultElements.map((element, index) => (
              <ResultCardListItem key={index}>{index + 1}. {element}</ResultCardListItem>
            ))}
          </ResultCardList>
          <FloatImage src={imageUrl} alt={`Imagem de ${category}`} />
        </ResultCard>
      </ResultCardContainer>
    );
  }
};

export default ResultComponent;
