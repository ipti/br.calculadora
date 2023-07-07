import { Children, cloneElement } from "react";
import { styled } from "styled-components";


export const Stack = ({ children }) => {
    const arrayChildren = Children.toArray(children);

    return (
        <>
            {Children.map(arrayChildren, (child, index) => {
                return cloneElement(child,  {
                   style: {
                    ...(child.props.style),
                    'zIndex': index * 100,
                    'position': 'absolute'
                   },
                   onlick: () => console.log(index)
                })
            })}
        </>);
};


export const VectorLeft = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    /* position: relative; */
    img {
        position: absolute;
    }
`;

export const VectorTop = styled.div`
width: 100%;
    margin-left: auto;
    img {
        position: absolute;
    }
`;

export const VectorRight = styled.div`
    img {
        position: absolute;
    }
`;