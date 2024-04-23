import React, { useState } from 'react'
import styled from 'styled-components'
import Form from './Form'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CloseIcon from '@mui/icons-material/Close';
import bgImage from '../assets/image16.jpeg'



const Container = styled.div`
height: 100rem;
`
const Intro = styled.div`
display:flex;
flex-direction: column;
align-items:flex-start;
justify-content: center;
background-image: url(${bgImage});
background-repeat: no-repeat;
background-size: 100rem 90rem;
font-size: larger;
padding:0rem 50rem 0rem 5rem;
height: 60rem;
color:white;
`
const Esti = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: initial;
    padding: 2rem 10rem 0rem 10rem ;
    margin-top:-6rem;
    `
const Text = styled.div`
        display:flex;
        width:45%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 5rem;
        
    `
const Icons = styled.div`
        display:flex;
        flex-direction: column;
        padding-top: 2rem;
    `;
const BgFrame = styled.div`
        position: absolute;
        display:flex;
        padding:6rem 5rem 0rem 0rem;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.8);
        height:35rem;
        width:65rem;
        translate: -1rem -34rem; 
    `;

const Button = styled.button`  
    `;

const Introduction = () => {
    const [open, setOpen] = useState(false);
    const videoModal = (props) => {
        return <BgFrame>
            <button onClick={() => setOpen(false)} style={{ position: 'relative', height: '3rem', width: '3rem', borderRadius: '10rem', opacity: '0.8', translate: '57rem -3rem', background: 'transparent' }}><CloseIcon style={{ color: 'white' }} /></button>
            <iframe
                src={props}
                title='YouTube'
                width="800"
                height="400"

            >
            </iframe>
        </BgFrame>
    }
    return <Container>
        <Intro>
            <h3 >YOUR LOCAL PAINTING SERVICE</h3>
            <h1>The Residential, Commerical and Industrial Painting Specialist</h1>
            <p>We provide Exterior Painting, Rendering, Insulation and Interior Painting solutions for Residential, Commercial and Industrial customers across London and the Home Counties.    </p>
        </Intro>
        <Esti>
            <Text>
                <h1 style={{ fontSize: '2rem' }}>Your Exterior and Interior Painting Providers</h1>
                <h3>Universal Painters offer a complete painting and decorating service for completely transforming your home or business!</h3>
                <p>With over 30 years of experience in the industry, we bring a wealth of knowledge and expertise to every job we undertake. Our extensive experience allows us to tackle even the most complex projects with confidence, ensuring exceptional results that exceed your expectations.</p>

                <Icons>
                    <a href="tel:123456789"><PhoneEnabledIcon /></a>
                    <h3>Call us today for more information</h3>
                    <h2>0800 756 6653</h2>
                    {/* <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={open}
				videoId="L61p2uyiMSo"
                onClose={() => setOpen(false)}
                classNames="modalView"
                            /> */}
                    {open ? videoModal("https://www.youtube.com/embed/eI4an8aSsgw") : null}
                    <Button onClick={() => setOpen(!open)} ><YouTubeIcon /></Button>
                </Icons>
            </Text>
            <Form />
        </Esti>




    </Container>
}

export default Introduction
