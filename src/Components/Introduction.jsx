import React, { useState } from 'react'
import styled from 'styled-components'
import Form from './Form'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { ReactDOM } from 'react-dom';
import ModalVideo from 'react-modal-video';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Container = styled.div`
height: 100rem;
`
const Intro = styled.div`
display:flex;
flex-direction: column;
align-items:flex-start;
justify-content: center;
background-image: url('https://images.unsplash.com/photo-1647786460409-ea9b06550e7f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
background-repeat: no-repeat;
background-size: cover;
font-size: larger;
padding:0rem 65rem 0rem 5rem;
height: 60rem;
`
const Esti = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 10rem;
    margin-top:-6rem;
    `
const Text = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 5rem 10rem 0rem 10rem;
    `
const Icons = styled.div`
        padding-top: 5rem;
        padding-left: 5rem;  
        .modalView {
          padding-bottom: 20rem;
        }
    `;
const Button = styled.button`

    `;


const Introduction = () => {
    const [open, setOpen] = useState(false);

    return <Container> 
        <Intro>
            <h3>YOUR LOCAL PAINTING SERVICE</h3>
            <h1>The Residential, Commerical and Industrial Painting Specialist</h1>
            <p>We provide Exterior Painting, Rendering, Insulation and Interior Painting solutions for Residential, Commercial and Industrial customers across London and the Home Counties.    </p> 
        </Intro>
        <Esti>
        <Text>
                <h1>Your Exterior and Interior Painting Providers</h1>
                <h3>Universal Painters offer a complete painting and decorating service for completely transforming your home or business!</h3>
                <p>With over 30 years of experience in the industry, we bring a wealth of knowledge and expertise to every job we undertake. Our extensive experience allows us to tackle even the most complex projects with confidence, ensuring exceptional results that exceed your expectations.</p>
                 <Icons>
                    <a href="tel:123456789"><PhoneEnabledIcon /></a>
                    <h3>Call us today for more information</h3>
                    <h2>0800 756 6653</h2>
                        <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={open}
				videoId="L61p2uyiMSo"
                onClose={() => setOpen(false)}
                classNames="modalView"
                            />

                    <Button onClick={()=> setOpen(true)}><YouTubeIcon /></Button>
                    </Icons>
            </Text>
            <Form />
        </Esti>
       

        
        
  </Container>
}

export default Introduction
