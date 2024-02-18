import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
height: 5rem;
display: flex;
flex-direction:row;
align-items: center;
padding: 1rem;
border: 1px solid black;
`
const Title = styled.span`
display:flex;
align-items: center;
justify-items:center;
font-size:3rem;
padding:2rem;

`
const Navigation = styled.div`
display:flex;
align-items:center;
font-size: 2rem;
.link{
text-decoration:none;
word-break: break-all;
padding: 3rem
}
`
const Estimate = styled(Link)`
height: 4rem;
width: 13rem;
display: flex;
align-items:center;
text-decoration:none;
font-size: 1.5rem;
padding-left:2rem;
font-weight: bold;
background-color: blue;
color:white;
&:hover {
    background-color: white;
    color:blue;
}
`
const Navbar = () => {
    return <Container> 
        <Title>
            London Painters
        </Title>
        <Navigation>
            <Link to="/" className='link' >Home</Link>
            <Link to="/aboutUs" className='link' >AboutUs</Link>
            <Link to= "/contactUs" className='link' >ContactUs</Link>
        </Navigation>
        <Estimate>
            Free Estimation
        </Estimate>
  </Container>
}

export default Navbar
