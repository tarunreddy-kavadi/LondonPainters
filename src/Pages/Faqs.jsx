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
const Text = styled.div`
    display: flex;
    align-items: center;
    
    z-index: 1;
    position: relative;
`
const Questions = styled.div`
/* height: 3rem;
width:50rem; */
border: 1px solid black; 
text-anchor: middle;

.svg-shape{
    display: flex;
    top:0;
    left:0;
    width: 100%;
   
    color: white;
    border-image: stretch;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    z-index:auto;
    background-color: white;
};


`;
const ShapeTop = styled.div`
position: absolute;
background-color: white;
height:1rem;
width: 1rem;
border: 1px solid black;
transform: rotate(215deg);
bottom: 6.9rem;
left: 3rem;
border-right:none;
border-bottom: none;
`
const ShapeBottom = styled.div`
position: absolute;
background-color: white;
height:1rem;
width: 1rem;
border: 1px solid black;
transform: rotate(135deg);
bottom: 3.9rem;
left: 3rem;
border-left:none;
border-bottom: none;
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
                <h2>Frequently Asked Questions (FAQ)</h2>
                <Text>

                    <Questions>
                        <text >jnhdksjn</text>
                        <svg
                            className='svg-shape'
                            x="0px"
                            y="0px"
                            viewBox='0 0 541 64'
                            height='64'
                            backGroundColor='white'
                        >
                            <text x="10" y="40" fontSize="20" fill="white" color='white' style={{ zIndex: '-1' }}>
                                Hello, SVG!
                            </text>
                            <polygon
                                className='path'
                                points='85,55 81,55 51,55 42.5,64 34,55 0,55 0,0 34.4,0 42.5,9.5 50.6,0 81,0 85,0 541,0 541,55'
                            >
                            </polygon>
                        </svg>
                    </Questions>
                </Text>
            </QuestionContainer>
        </Layout>
    </Container>
}

export default Faqs
