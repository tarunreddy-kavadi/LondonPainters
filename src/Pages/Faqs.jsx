import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout';

const Container = styled.div`
height:100rem;
`;
const BgImage = styled.div`
     height:20rem;
    width:98.9vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://universalpainters.co.uk/wp-content/uploads/2023/09/background.png");
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
  
    h1{
        color: white;
        font-size: 3rem;
    }
`;
const QuestionContainer = styled.div`

`
const Faqs = () => {
    return <Container>
        <Layout>
            <BgImage>
                <Overlay>
                    <h1>FAQ'S</h1>
                </Overlay>
            </BgImage>
            <QuestionContainer>
                <p>Welcome to the Universal Painters FAQ page! Here, you’ll find detailed answers to the most frequently asked questions (FAQs) about our services, products, and processes. We’ve gathered this information to ensure you have a clear and comprehensive understanding of how we can transform your residential, commercial, or industrial property with our expert painting and coating solutions. Please read FAQs below to find helpful insights and tips tailored to your needs, and if you have any further queries, we’re just a call or email away!</p>
            </QuestionContainer>
        </Layout>
    </Container>
}

export default Faqs
