import React from 'react'
import Layout from '../Layout'
import styled from 'styled-components'
import image from '../assets/image10.jpeg'
import bgImage from '../assets/image4.jpeg'
import ResponsiveSetup from '../Responsive/ResponsiveSetup'

const Container = styled.div`
`;
const BgImage = styled.div`
      height:20rem;
     max-width:100vw;
     display: flex;
     justify-content: center;
     align-items: center;
     background-image: url(${bgImage});
     background-size: 75rem 40rem;
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
const Title = styled.div`
margin:5rem;
display:grid;
justify-items: center;
align-items: center;
`;
const AboutContainer1 = styled.div`
display: grid;
grid-template-columns: repeat(2,minmax(20px,30rem));
 justify-content: center;
 align-items: center;
 gap:0.5rem;
.Text{
  display:grid;
  grid-column:  2;
  ${ResponsiveSetup({
  gridColumn: '1/3',
})}
}
img{
 min-height:20rem;
  max-width: 100%;
  display: grid;
  grid-row:   1 / 3 ;
 
${ResponsiveSetup({
  gridRow: '1',
  gridColumn: '1/3'
})}
}
`;
const AboutContainer2 = styled.div`
margin-bottom:5rem;
display: grid;
grid-template-columns: repeat(2,minmax(20px,30rem));
 justify-content: center;
 align-items: center;
.Text1{
  display: grid;
  grid-column: span 2;
}
`;
const AboutUs = () => {
  return <Layout>
    <Container>
      <BgImage>
        <Overlay>
          <h1>About Us</h1>
        </Overlay>
      </BgImage>
      <Title><h1>Why Choose Us...</h1></Title>
      <AboutContainer1>
        <img src={image} alt='house'></img>
        <p className='Text'>EJV Decorating Team, established over 25 years ago under the leadership of Erion Biba, boasts a team of highly qualified and experienced painting and decorating professionals. We specialize in both interior and exterior projects, transforming spaces throughout Greece and, in recent years, across London.</p>
        <p className='Text'>We are committed to delivering exceptional quality. We meticulously plan every project, utilizing only the finest materials and employing our expert craftsmanship to achieve a flawless finish that stands the test of time. No project is too challenging for our team. We possess the skills and experience to tackle even the most intricate tasks, ensuring a swift and successful completion, while always prioritizing a clean and guaranteed outcome.</p>
      </AboutContainer1>
      <AboutContainer2>
        <p className='Text1'>Looking for a complete decorating solution? Look no further.  EJV Decorating Team offers a comprehensive range of services, from general painting and decorating to project management for large-scale constructions. We provide a diverse selection of high-quality paints, stains, and finishes to match your vision, along with skilled application techniques that bring your design aspirations to life.</p>
        <p className='Text1'>Beyond meticulous execution, EJV Decorating Team understands the importance of personalized service. We collaborate closely with you, offering expert advice and creative solutions to transform your space into an elegant, modern, and welcoming environment.  Our client-centric approach ensures clear communication, transparent pricing, and a commitment to exceeding your expectations. Contact EJV Decorating Team today for a free consultation and let us transform your space into a beautiful and functional reality.</p>
      </AboutContainer2>
    </Container>
  </Layout>
}

export default AboutUs

