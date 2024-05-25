import React, { useState } from 'react'
import styled from 'styled-components'
import Form from './Form'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CloseIcon from '@mui/icons-material/Close';
import bgImage from '../assets/image16.jpeg'
import ResponsiveSetup from '../Responsive/ResponsiveSetup';
import { JoinFullSharp } from '@mui/icons-material';



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
background-size: cover;
padding:0rem 50rem 0rem 15rem;
height: 60rem;
color:white;

h1{
    font-size: 4rem;
}

h1{
${ResponsiveSetup({
    fontSize: '2rem',
    alignItems: 'center',
})}}

${ResponsiveSetup({
    display: 'grid',
    gridTemplateRows: '3rem 10rem 5rem',
    backgroundSize: '600px 600px',
    padding: '10rem 5rem 0rem 1.5rem',
    height: '500px'
})}

`;
const Esti = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: initial;
    padding: 2rem 10rem 0rem 10rem ;
    margin-top:-6rem;
    ${ResponsiveSetup({
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '5rem 2.2rem 0rem 1.5rem'
})}
  
    `
const Text = styled.div`
        display:flex;
        width:40%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 7rem 4rem 0rem 0rem;
        h1{
            font-size: 2.5rem;
            ${ResponsiveSetup({
    fontSize: '2rem'
})}
        };
        
        ${ResponsiveSetup({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0rem 0rem 0rem 0rem'

})}
    `;
const FormEle = styled.div`
 ${ResponsiveSetup({
    display: 'none'
})}
    `;
const Icons = styled.div`
        display:flex;
        align-items: center;
        flex-direction: column;
        padding-top: 2rem;
        p{
            font-weight: bold;
        }
    `;
const Phone = styled.div`
    display:flex;
    padding:1rem;
    align-items: center;
    justify-content: center;
    height:2rem;
    width: 2rem;
    border-radius: 4rem;
    background-color: gainsboro;
`
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
display:flex;
align-items:center;
justify-content: center;
padding:1rem;
height: 3rem;
width:3rem;
border-radius:4rem;
color:blue;
border: none;
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
            <h1 >The Residential, Commerical and Industrial Painting Specialist</h1>
            <p>We provide Exterior Painting, Rendering, Insulation and Interior Painting solutions for Residential, Commercial and Industrial customers across London and the Home Counties.    </p>
        </Intro>

        <Esti>
            <Text>
                <h1 >Your Exterior and Interior Painting Providers</h1>
                <h3 >Universal Painters offer a complete painting and decorating service for completely transforming your home or business!</h3>
                <p>With over 30 years of experience in the industry, we bring a wealth of knowledge and expertise to every job we undertake. Our extensive experience allows us to tackle even the most complex projects with confidence, ensuring exceptional results that exceed your expectations.</p>

                <Icons>
                    <p>Call us today for more information</p>
                    <Phone>  <a href="tel:123456789" > <PhoneEnabledIcon /></a></Phone> 133456+


                    {/* <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={open}
				videoId="L61p2uyiMSo"
                onClose={() => setOpen(false)}
                classNames="modalView"
                            /> */}
                    {open ? videoModal("https://www.youtube.com/embed/eI4an8aSsgw") : null}
                    <Button onClick={() => setOpen(!open)} ><YouTubeIcon style={{ fontSize: '2rem' }} /></Button>
                    {/* <YouTubeIcon onClick={() => setOpen(!open)} > </YouTubeIcon> */}
                </Icons>
            </Text>
            <FormEle>
                <Form />
            </FormEle>
        </Esti>




    </Container>
}

export default Introduction
