import React from 'react'
import styled from 'styled-components'
import { ExperienceData } from '../data';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import Form from './Form';
import ResponsiveSetup from '../Responsive/ResponsiveSetup';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
${ResponsiveSetup({
    flexDirection: 'column',
    alignItems: 'center'
})}
`;
const Quotation = styled.div`
display: flex;
flex-direction: row;
padding: 2rem;
    
`;
const ExpContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;

`;
const Experience = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 3rem;
width: 20rem;
border: 1px solid black;
padding:.5rem;
margin-top: 1rem;
h3{
    padding: 1rem;
}
`
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
