import React from 'react'
import styled from 'styled-components'
import ejv from '../assets/ejvLogo.png'
import ResponsiveSetup from '../Responsive/ResponsiveSetup'

const Container = styled.div`
display:flex;
${ResponsiveSetup({
    flexDirection: 'column',
    marginTop: '3rem',
    backgroundColor: 'darkBlue',
    color: 'white'
})}
`
const Left = styled.div`
flex:1;
/* padding:3rem 3rem 3rem 3rem; */
img{
    height: 6rem;
}
p{
    font-size:1rem;
}
/* ${ResponsiveSetup({
    paddingRight: '.8rem'
})} */
`
const Center = styled.div`
flex:1;
h3{
    font-weight:bold;
}
ul{
    list-style: none;
}
a{
    text-decoration: none;
    color: black;
    word-wrap: break-word;
}
`
const Right = styled.div`
display: flex;
flex:1;
li{
    list-style: none;
}
/* ${ResponsiveSetup({
    paddingRight: '.8rem',
    paddingTop: '9rem'

})} */
`
const Right1 = styled.div`
display: flex;
flex:0.5;
li{
    list-style: none;
}
/* ${ResponsiveSetup({
    paddingRight: '.8rem'
})} */
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
            <ul>
                <li> <h3>Contact Us</h3></li>
                <li> <a href='mailto:BIBAERION@GMAIL.COM'>BIBAERION@GMAIL.COM</a></li>
                <li><a href='tel: 07408252125'>07408252125</a></li>
                <li><a href='https://www.instagram.com/ejvdecoratingteam/'> ejvdecoratingteam</a></li>
            </ul>
        </Center>
        <Right>

            <ul>
                <li><h3>Our Services</h3></li>
                <li>General Renovations of Building & Shops</li>
                <li>Interior & Exterior Projects</li>
                <li>Insulation</li>
                <li>Plastering</li>
                <li>Wallpapers</li>
                <li>Woodwork and Many More...</li>
            </ul>
        </Right>
        <Right1>

            <ul>
                <li><h3>Areas we cover</h3></li>
                <li>East London</li>
                <li>North London</li>
                <li>West London</li>
                <li>South London</li>
            </ul>
        </Right1>
    </Container>
}

export default Footer
