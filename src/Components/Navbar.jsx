import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ejvLogo from '../assets/ejvLogo.png'


const Container = styled.div`
height: 5rem;
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
padding: 1.5rem;
border: 1px solid black;
`
const Logo = styled.div`

`
const Navigation = styled.div`
display:flex;
align-items:center;
font-size: 2rem;
justify-content: space-between;
padding: 3rem;


.link{
text-decoration:none;
padding-right: 1.5rem;
font-size: 1.5rem;
height:3rem;
cursor:pointer;       
};

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
`;
const DropDown = styled.div`
display: flex;
flex-direction: column;
text-decoration: none;
.dropList{
position: absolute;
padding-left: 0rem;
padding-top: 1.5rem;
z-index: 1;
}
.dropItems{    
display: flex;
flex-direction: column;
height: 6.5rem;
list-style: none;
width: 12rem;
border-radius: .3rem;
box-shadow: 204px 204px 204px -40px rgba(0, 0, 0, 0.16);
background: whitesmoke;
 
}

.links{
    /* height: 2rem;
    width: 11rem; */
    padding: .5rem;
    color:white;
    text-decoration: none;
    font-size: medium;
    background-color:gray;
    &:hover{
        background-color: blue;
      
    }
}
`;


const Navbar = () => {
    const [aboutOpen, setAboutOpen] = useState(false)
    const [ServiesOpen, setServiceOpen] = useState(false)
    const AboutHandleOpen = () => {
        setAboutOpen(true)
    }
    const AboutHandleClose = () => {
        setAboutOpen(false)
    }
    const ServiceHandleOpen = () => {
        setServiceOpen(true)
    }
    const ServiceHandleClose = () => {
        setServiceOpen(false)
    }

    return <Container>
        <Logo>
            <img src={ejvLogo} alt='logos' style={{ height: '6rem', width: '8rem' }}></img>
        </Logo>
        <Navigation>
            <Link to="/" className='link' >Home</Link>
            <DropDown onMouseEnter={AboutHandleOpen} onMouseLeave={AboutHandleClose}>
                <Link className='link' to="/aboutUs">AboutUs</Link>
                {aboutOpen &&
                    <ul className='dropList' >
                        <li className="dropItems" >
                            <Link className='links' to="/faqs">FAQS</Link>
                            <Link className='links' to="/reviews">Reviews</Link>
                            <Link className='links' to="/p&d">blog</Link>
                        </li>
                    </ul>}
            </DropDown>

            <DropDown onMouseEnter={ServiceHandleOpen} onMouseLeave={ServiceHandleClose}>
                <Link className="link" to="/services" >Services</Link>
                {ServiesOpen &&
                    <ul className='dropList' >
                        <li className="dropItems" >
                            <Link className='links' to="">FAQS</Link>
                            <Link className='links' to="">Reviews</Link>
                            <Link className='links' to="">blog</Link>
                        </li>
                    </ul>
                }
            </DropDown>
            <Link to="" className='link'>Gallery</Link>
            <Link to="/contactUs" className='link'>ContactUs</Link>
        </Navigation>
        <Estimate>
            Free Estimation
        </Estimate>
    </Container>
}

export default Navbar
