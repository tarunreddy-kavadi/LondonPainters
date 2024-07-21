import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ejvLogo from '../assets/ejvLogo.png'
import ResponsiveSetup from '../Responsive/ResponsiveSetup'
import ResMenuBar from '../Responsive/ResMenuBar'



const Container = styled.div`
min-height: 5rem;
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
margin:1.5rem;
gap:2rem;
${ResponsiveSetup({
    height: '4rem',
    padding: '0.5rem',
    justifyContent: 'space-between'
})}

`
const Logo = styled.div`
max-width:25%;
display: flex;
justify-content:flex-end;
img {
    max-height: 6rem;
    min-width: 50%;

${ResponsiveSetup({
    height: '4rem',
    width: '4rem'
})}
};
${ResponsiveSetup({
    display: 'flex',
    justifyContent: 'flex-start',
})}

`
const Navigation = styled.div`
display:flex;
align-items:center;
font-size: 2rem;
justify-content: center;
/* padding: 3rem; */
max-width: 50%;

${ResponsiveSetup({
    display: 'none'
})}

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
max-width: 25%;
display: flex;
align-items:center;
text-decoration:none;
font-size: 1.5rem;
padding:.5rem;
font-weight: bold;
background-color: blue;
color:white;
&:hover {
    background-color: white;
    color:blue;
};

${ResponsiveSetup({
    display: 'none'
})}
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
const Menu = styled.div`
       ${ResponsiveSetup({
    display: 'flex',
    justifyContent: 'flex-end',
})}
`
const HamMenu = styled.div`
    display:none;
 ${ResponsiveSetup({
    display: 'flex',

})}
`

const Navbar = () => {
    const [aboutOpen, setAboutOpen] = useState(false)
    const AboutHandleOpen = () => {
        setAboutOpen(true)
    }
    const AboutHandleClose = () => {
        setAboutOpen(false)
    }

    return <Container>
        <Logo>
            <img src={ejvLogo} alt='logos'></img>
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
            <Link to="/gallery" className='link'>Gallery</Link>
        </Navigation>
        <Estimate>
            Free Estimation
        </Estimate>
        <Menu>
            <HamMenu>
                <ResMenuBar />
            </HamMenu>
        </Menu>
    </Container>
}

export default Navbar
