import React, { useState } from 'react'
import Layout from '../Layout'
import styled from 'styled-components'
import { GalleryImages } from '../data'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import bgImage from '../assets/image11.jpeg'
const Container = styled.div`
  
`;
const BgImage = styled.div`
      height:20rem;
     max-width:100vw;
     display: flex;
     justify-content: center;
     align-items: center;
     background-image: url(${bgImage});
     background-size: 100rem 100rem;
     background-position: center;
     background-repeat: no-repeat;
     transition: background-color 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
 `;
const Overlay = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    height:20rem;
     width:100vw;
     background-color: black;
     opacity: 0.5;
     text-align: center;
  
     h1{
         color: white;
         font-size: 3rem;
     }
`;
const GridBox = styled.div`
margin:5rem 0rem 5rem 0rem;
display: grid;
grid-template-columns: 2rem minmax(5px,30rem) 2rem;
justify-content: center;
`;
const ScrollLeft = styled.button`
border: none;
background-color: white;

`;
const ImageContainer = styled.div`
display:grid;
grid-template-rows: minmax(5px,30rem);
max-width:30rem;
justify-content: center;
align-items: center;
`;
const Image = styled.img`
display: grid;
grid-template-columns: minmax(10px,30rem);
max-height:30rem;
max-width:100%;

`;
const ScrollRight = styled.button`
border: none;
background-color: white;
`;

const Gallery = () => {
  const [scroll, setScroll] = useState([0]);
  const parseScroll = parseInt(scroll)
  const HandleClickLeft = () => (setScroll(parseScroll === 0 ? parseScroll : parseScroll - 1));
  const HandleClickRight = () => (setScroll(parseScroll === 16 ? parseScroll : parseScroll + 1))
  return <Layout>
    <Container>
      <BgImage><Overlay><h1>Gallery</h1></Overlay></BgImage>
      <GridBox>
        <ScrollLeft onClick={HandleClickLeft}><ArrowBackIosIcon /> </ScrollLeft>
        <ImageContainer>

          {/* // GalleryImages.map((data, id) => {
          //   return <Image key={id}>
          //     <img src={data.image} alt='glry'></img>
          //   </Image>
          // }) */}

          < Image src={GalleryImages[scroll].image} alt='glry'></Image>

        </ImageContainer>
        <ScrollRight onClick={HandleClickRight}><ArrowForwardIosIcon /></ScrollRight>
      </GridBox>
    </Container>
  </Layout >
}

export default Gallery

