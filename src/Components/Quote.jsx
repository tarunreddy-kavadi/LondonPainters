import React from 'react'
import styled from 'styled-components'
import { ExperienceData } from '../data';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import Form from './Form';
import ResponsiveSetup from '../Responsive/ResponsiveSetup';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: initial;
${ResponsiveSetup({
    flexDirection: 'column',
    alignItems: 'center'
})}
`;

const ExpContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 50%;

`;
const Experience = styled.div`
display: flex;
align-items: center;
max-height: 3rem; 
max-width: 35rem; 
border: 1px solid black;
padding:.5rem;
margin-top: 1rem;
h3{
    padding: 1rem;
    @media screen and (max-width:375px) {
        padding:0rem;
        word-break: break-all;
    }
    }
    @media screen and (max-width:375px){
        padding:0rem;
        max-height:none;
        max-width:none;
    }
`;
const Quotation = styled.div`
padding: 2rem;
min-width: 40%;
`;
const Quote = () => {
    return <Container>
        <ExpContainer>
            {ExperienceData.map((data) => {
                return <Experience key={data.id}>
                    <FormatPaintIcon style={{ backgroundColor: "whitesmoke", padding: ".5rem", borderRadius: "10rem", color: "blue" }} />
                    <h3>{data.desc}</h3>
                </Experience>
            })}
        </ExpContainer>
        <Quotation><Form /></Quotation>
    </Container>
}

export default Quote
