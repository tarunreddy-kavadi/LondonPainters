import React from 'react'
import styled from 'styled-components'
import { CardsData } from '../data'
import ResponsiveSetup from '../Responsive/ResponsiveSetup';

const Container = styled.div`
display: flex;
flex-direction: column;
padding-top:0rem ;
padding-bottom: 3rem;
max-width:100%;

h1{
    display: flex;
    justify-content: center;
    padding: 2rem;
};
${ResponsiveSetup({
    padding: '0rem'

})}
`;
const CardsContainer = styled.div`
display: flex;
justify-content:center;
gap:2rem;
flex-direction: row;
${ResponsiveSetup({
    flexDirection: 'column',
    alignItems: 'center',

})}
`
const Card = styled.div`
display: flex;
flex-direction: column;
min-height: 25rem;
max-width: 17.5rem;
border-radius: 0.5rem;
padding: 2.5rem;
background-position: right;
background-position-y: bottom;
background-size: 15rem;
background-image:url('https://kramersseafood.com/wp-content/uploads/2021/08/KramersSeafood_umfelt_hoek.png');
background-repeat: no-repeat;
word-wrap: break-word;
&:hover{
box-shadow:0.9rem 0.9rem 0.9rem 0.9rem rgba(0,0,0,0.16);;
}
${ResponsiveSetup({
    width: '65%',
    height: '20rem'
})}
`
const Cards = () => {
    return <Container>
        <h1>Why Choose Us</h1>
        <CardsContainer>
            {CardsData.map((data) => {
                return <Card key={data.id}>
                    {data.img}
                    <h2>{data.title}</h2>
                    <p>{data.desc}</p>
                </Card>
            })}
        </CardsContainer>
    </Container>
}

export default Cards
