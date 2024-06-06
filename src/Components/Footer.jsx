import React from 'react'
import styled from 'styled-components'
import ejv from '../assets/ejvLogo.png'
import ResponsiveSetup from '../Responsive/ResponsiveSetup'

const Container = styled.div`

display:flex;
align-items:center;
${ResponsiveSetup({
    marginTop: '3rem',
    backgroundColor: 'darkBlue',
    color: 'whiteSmoke'
})}
`
const Left = styled.div`
flex:1;
padding:3rem 3rem 3rem 3rem;
img{
    height: 6rem;
}
p{
    font-size:1rem;
}
${ResponsiveSetup({
    paddingRight: '.8rem'
})}
`
const Center = styled.div`
flex:1;
padding-top: 1.5rem;
padding-right: 3rem;
h3{
    font-weight:bold
}
${ResponsiveSetup({
    paddingRight: '.8rem',
})}
`
const Right = styled.div`
flex:1;
padding-top: 1.5rem;
padding-right:3rem;
${ResponsiveSetup({
    paddingRight: '.8rem',
    paddingTop: '9rem'

})}
`
const Right1 = styled.div`
flex:1;
padding-right:3rem;
${ResponsiveSetup({
    paddingRight: '.8rem'
})}
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
            <h3>Contact Us</h3>
            <p>Aylesbury,
                Buckinghamshire 0800 756 6653 + (44) 7713 697961 info@universal
                painters.co.uk</p>
        </Center>
        <Right>
            <h3>Our Services</h3>
            Commercial Contracts
            Damp Solutions
            Internal Insulation Paints
            K-Rend Silicone Renders
            Painting and Decorating
            Thermal Cork Insulation
        </Right>
        <Right1>
            <h3>Areas we cover</h3>
            Oxfordshire
            Hertfordshire
            London
            Buckinghamshire
        </Right1>
    </Container>
}

export default Footer
