import React from 'react'
import styled from 'styled-components'
import ejv from '../assets/ejvLogo.png'

const Container = styled.div`
height: 15rem;
display:flex;
align-items:center;
`
const Left = styled.div`
flex:1;
padding:3rem;
img{
    height: 6rem;
}
p{
    font-size:1rem;
}
`
const Center = styled.div`
flex:1;
padding-top: 1.5rem;
padding-right: 3rem;
`
const Right = styled.div`
flex:1;
padding-top: 1.5rem;
padding-right:3rem;
`
const Right1 = styled.div`
flex:1;

padding-right:3rem;
`
const Footer = () => {
    return <Container>
        <Left>
            <img src={ejv} />
            <p>
                Get in touch and discover how we can transform your home today! Powerful design, knowledge and expertise available for your needs.
            </p>
        </Left>
        <Center>
            Aylesbury, Buckinghamshire
            0800 756 6653
            + (44) 7713 697961
            info@universalpainters.co.uk
        </Center>
        <Right>
            Commercial Contracts
            Damp Solutions
            Internal Insulation Paints
            K-Rend Silicone Renders
            Painting and Decorating
            Thermal Cork Insulation
        </Right>
        <Right1>
            Oxfordshire
            Hertfordshire
            London
            Buckinghamshire
        </Right1>
    </Container>
}

export default Footer
