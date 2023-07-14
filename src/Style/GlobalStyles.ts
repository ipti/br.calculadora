import styled from "styled-components";
import style from "./index"

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
  html,
body,
#root {
    margin: 0px;
    height: 100%;
    width: 100vw;
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: "Poppins Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Poppins Regular"),
        url("./../font/Poppins-Regular.woff") format("woff");
}

@font-face {
    font-family: "Poppins ExtraLight";
    font-style: normal;
    font-weight: normal;
    src: local("Poppins ExtraLight"),
        url("../font/Poppins-ExtraLight.woff") format("woff");
}

@font-face {
    font-family: "Poppins Light";
    font-style: normal;
    font-weight: normal;
    src: local("Poppins Light"), url("../font/Poppins-Light.woff") format("woff");
}

@font-face {
    font-family: "Poppins SemiBold";
    font-style: normal;
    font-weight: normal;
    src: local("Poppins SemiBold"),
        url("../font/Poppins-SemiBold.woff") format("woff");
}

@font-face {
    font-family: "Poppins Bold";
    font-style: normal;
    font-weight: normal;
    src: local("Poppins Bold"), url("../font/Poppins-Bold.woff") format("woff");
}

@font-face {
    font-family: "Inter Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Inter Regular"), url("../font/Inter-Regular.ttf") format("truetype");
}
`;

export default GlobalStyle;

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    #space-between{
        justify-content: space-between;
    }
    #center{
        justify-content: center;
    }
    #start{
        justify-content: start;
    }
    #end{
        justify-content: end;
    }

`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px; 

    #space-between{
        justify-content: space-between;
    }
    #center{
        justify-content: center;
    }
    #start{
        justify-content: start;
    }
    #end{
        justify-content: end;
    }

`;

interface PaddingAttributes {
    padding?: string,
    width?: string
}

export const Padding = styled.div<PaddingAttributes>`
    padding: ${props => props.padding || "4px"};
    width: ${props => props.width || "100%"};
`;

export const Container = styled.div`
display: flex;
flex: 1;
    height: 100%;
    width: 100%;
    font-size: ${style.typography.font.medium};
    font-family: ${style.typography.types.inter};
`;

export const Background = styled.div`
    background-color: #EDEDED;
    opacity: 0.8;
    background-image:  linear-gradient(#DFE4E5 1.6px, transparent 1.6px), linear-gradient(to right, #DFE4E5 1.6px, #EDEDED 1.6px);
    background-size: 32px 32px;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 10
`;