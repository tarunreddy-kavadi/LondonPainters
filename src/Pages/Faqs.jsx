import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout';
import { Translate } from '@mui/icons-material';

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
const SubHeading = styled.div`
display:flex;
flex-direction: column;
margin-bottom:2rem;
overflow: hidden;
border-bottom: 1px solid black;


`
const QuestionContianer = styled.div`
height: 50rem;
`
const Questions = styled.div`
margin-top: 5rem;
background-color: transparent;
padding: 0rem;
border-bottom: 0 solid #000;

height:4rem;
width:80rem ;

.svg-shape{
    top:0;
    left:0;
   width: 100%;
    margin: -2.5rem;
     z-index:-1;
    border-image: stretch;
    border-image-repeat: stretch;
    border-image-slice: 100%;
   
};
.path{
    z-index: -1;
}

`;




const Faqs = () => {
    return <Container>
        <Layout>
            <BgImage>
                <Overlay>
                    <h1>FAQ'S</h1>
                </Overlay>
            </BgImage>
            <SubHeading>
                <p>Welcome to the Universal Painters FAQ page! Here, you’ll find detailed answers to the most frequently asked questions (FAQs) about our services, products, and processes. We’ve gathered this information to ensure you have a clear and comprehensive understanding of how we can transform your residential, commercial, or industrial property with our expert painting and coating solutions. Please read FAQs below to find helpful insights and tips tailored to your needs, and if you have any further queries, we’re just a call or email away!</p>
                <h2>Frequently Asked Questions (FAQ)</h2>
            </SubHeading>
            <QuestionContianer>
                <Questions>
                    <a style={{ color: 'black', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <span style={{ zIndex: '1', position: 'absolute' }} >What is External Wall Coating?</span>
                        <svg
                            className='svg-shape'
                            x="0px"
                            y="0px"
                            viewBox='0 0 541 64'
                            height='64'
                            preserveAspectRatio='none'
                        >
                            <polygon
                                className='path'
                                fill='transparent'
                                pointerEvents='all'
                                stroke='red'
                                points='85,55 81,55 51,55 42.5,64 34,55 0,55 0,0 34.4,0 42.5,9.5 50.6,0 81,0 85,0 541,0 541,55'
                            >
                            </polygon>
                        </svg>
                    </a>
                </Questions>
            </QuestionContianer>
        </Layout>
    </Container>
}

export default Faqs
