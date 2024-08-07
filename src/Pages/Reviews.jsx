import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { ReviewData } from '../data'

const Container = styled.div`
    height: 100rem;
   
`

const BackgroundImage = styled.div`
    height:20rem;
    width:98.9vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://universalpainters.co.uk/wp-content/uploads/2024/01/photo-1633613286991-611fe299c4be-scaled-1.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: background-color 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
`;
const Overlay = styled.div`
display: flex;
justify-content: center;
align-items: center;
    height:20rem;
    width:100vw;
    background-color: black;
    opacity: 0.5;
    text-align: center;
    color: black;
    h1{
        color: white;
        font-size: 3rem;
    }
`
const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F0F0F0;
    
`
const ReviewCards = styled.div` 
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    padding: 1rem;

`
const ReviewCard = styled.div`
    flex:50%;
    min-height: 15rem;
    width: 30rem;
    padding: 2rem;
    border-radius: 1rem;
      background-color: #FFFFFF;
     &:hover{
    box-shadow: 0px 5px 15px 10px rgba(0, 0, 0, 0.16); ;
    }
`
const Reviews = () => {
    return <Container>
        <Layout>
            <BackgroundImage>
                <Overlay><h1>Reviews</h1></Overlay>
            </BackgroundImage>
            <ReviewContainer>
                <h1>Over 200+ positive reviews and feedback</h1>
                <h3>See what our customers have to say about us</h3>
                <ReviewCards>
                    {ReviewData.map((props) => {
                        return <ReviewCards>
                            <ReviewCard key={props.id}>
                                <h2>{props.title}</h2>
                                ⭐⭐⭐⭐⭐
                                <p>{props.desc}</p>
                                <h4>Location:{props.loc}</h4>
                            </ReviewCard>
                        </ReviewCards>
                    })}
                </ReviewCards>
            </ReviewContainer>

        </Layout>
    </Container>
}

export default Reviews
