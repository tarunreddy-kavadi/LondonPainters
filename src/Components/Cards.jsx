import React from 'react'
import styled from 'styled-components'
import { CardsData } from '../data'

const Containetr = styled.div`
height: 50rem;
display: flex;
flex-direction: column;
padding:10rem;
padding-top:0rem ;
padding-bottom: 3rem;

h1{
    display: flex;
    justify-content: center;
    padding: 2rem;
}
`;
const CardsContainer = styled.div`
display: flex;
justify-content:space-around;
flex-direction: row;
`
const Card = styled.div`
display: flex;
flex-direction: column;
height: 25rem;
width: 17.5rem;
border-radius: 0.5rem;
padding: 2.5rem;
background-position: right;
background-position-y: bottom;
background-size: 15rem;
background-image:url('https://kramersseafood.com/wp-content/uploads/2021/08/KramersSeafood_umfelt_hoek.png');
background-repeat: no-repeat;
&:hover{
box-shadow:0.9rem 0.9rem 0.9rem 0.9rem rgba(0,0,0,0.16);;
}
`
const Cards = () => {
    return <Containetr>
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
    </Containetr>
}

export default Cards
