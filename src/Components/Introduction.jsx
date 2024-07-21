import React, { useState } from 'react'
import styled from 'styled-components'
import Form from './Form'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CloseIcon from '@mui/icons-material/Close';
import bgImage from '../assets/image16.jpeg'
import ResponsiveSetup from '../Responsive/ResponsiveSetup';



const Container = styled.div`

${ResponsiveSetup({
    width: '100%'
})}
`
const Intro = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
background-image: url(${bgImage});
background-repeat: no-repeat;
background-size: cover;
/* padding:0rem 50rem 0rem 15rem; */
padding-left: 10rem;
min-height: 60rem;
color:white;


h1{ flex-wrap: wrap;
    font-size: 4rem;
    max-height: 100vh;
    max-width:30rem;
    word-wrap: break-word;
}
p{
    min-height: auto;
}

h1{
${ResponsiveSetup({
    fontSize: '2rem',
    alignItems: 'center',
})}}

${ResponsiveSetup({
    paddingLeft: '3rem'
})}

`;
const Esti = styled.div`
    display: flex;
    justify-content: center;
    align-items: initial;
    /* padding: 2rem 5rem 0rem 5rem ; */
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
width:40%;
 ${ResponsiveSetup({
    display: 'none'
})}
    `;
const Icons = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        padding-top: 2rem;

        p{
            display:flex;
            flex-direction: column;
            padding:0.5rem;
            font-weight: bold;
            font-size: 1rem;
            h2{
                display:flex;
                font-size: 2rem;
                justify-content: center;
            }
        }
        ${ResponsiveSetup({
    display: 'flex',
    flexDirection: 'column',
    margin: '2rem',

})}
    `;
const Phone = styled.div`
    display:flex;
    padding:.5rem;
    align-items: center;
    justify-content: center;
    height:2.5rem;
    width: 2.5rem;
    border-radius: 4rem;
    background-color: gainsboro;
    .phoneIcon{
    font-size: 2rem;
    ${ResponsiveSetup({
    fontSize: '1.3rem'
})}
    };
    ${ResponsiveSetup({
    height: '2rem',
    width: '2rem',

})}
`;
const BgFrame = styled.div`
        position: absolute;
        display:flex;
        padding:6rem 5rem 0rem 0rem;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.8);
        height:35rem;
        min-width:65rem;
        translate: -1rem -34rem; 
    `;

const Button = styled.button`  
display:flex;
align-items:center;
justify-content: center;
padding:2.5rem;
height: 3rem;
width:3rem;
border-radius:6rem;
color:white;
border: none;
  -webkit-animation: glowing 1300ms infinite;
  -moz-animation: glowing 1300ms infinite;
  -o-animation: glowing 1300ms infinite;
  animation: glowing 1300ms infinite;

  @-webkit-keyframes glowing {
    0% {
      background-color: #1a2ceb;
      -webkit-box-shadow: 0 0 3px #591aeb;
    }
    50% {
      background-color: #6919ea;
      -webkit-box-shadow: 0 0 15px #5819ea;
    }
    100% {
      background-color: #5c1aeb;
      -webkit-box-shadow: 0 0 3px #1a21eb;
    }
  }
  @keyframes glowing {
    0% {
      background-color: #4e1aeb;
      box-shadow: 0px 0px 5px #391aeb;
    }
    50% {
      background-color: #4319ea;
      box-shadow: 0px 0px 45px #5819ea;
    }
    100% {
      background-color: #591aeb;
      box-shadow: 0 0 5px #471aeb;
    }
  }`;
const RespForm = styled.div`
     display: none;
  ${ResponsiveSetup({
    display: 'flex',
    marginTop: '2.5rem'
})}
`

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

                    <Phone>  <a href="tel:123456789" > <PhoneEnabledIcon className='phoneIcon' /></a></Phone>
                    <p>Call us today for more information
                        <h2>9293725698</h2></p>
                    {open ? videoModal("https://www.youtube.com/embed/eI4an8aSsgw") : null}
                    <Button onClick={() => setOpen(!open)} ><YouTubeIcon style={{ fontSize: '2rem' }} /></Button>
                    <RespForm><Form /></RespForm>
                    {/* <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={open}
				videoId="L61p2uyiMSo"
                onClose={() => setOpen(false)}
                classNames="modalView"
                            /> */}

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
