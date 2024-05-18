import Layout from '../Layout'
import styled from 'styled-components'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState } from 'react';
import { FaqData } from '../data';
import bgImage from '../assets/image15.jpeg'


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

const SubHeading = styled.div`
 display:flex;
 flex-direction: column;
 align-items: center;
 margin-bottom:2rem;
 overflow: hidden;

`;
const Details = styled.details`
display:flex;
margin: 1rem 0rem 1rem 20rem; 
.arrow{
    position: absolute;
    margin-left:50rem;
}
`;
const Box = styled.div`
     display: flex;
     margin-left: 6rem;
     justify-content: center;
     width: 45rem;
     padding:2rem;  
     background-color: whitesmoke;
`;


const Faqs = ()=>{
const [isOpen,setIsOpen] =useState({})
 return <Layout>
    <BgImage><Overlay><h1>FAQ'S</h1></Overlay></BgImage>

     
         <p style={{lineHeight:'2rem',padding:'4rem'}}>Welcome to the Universal Painters FAQ page! Here, you’ll find detailed answers to the most frequently asked questions (FAQs) about our services, products, and processes. We’ve gathered this information to ensure you have a clear and comprehensive understanding of how we can transform your residential, commercial, or industrial property with our expert painting and coating solutions. Please read FAQs below to find helpful insights and tips tailored to your needs, and if you have any further queries, we’re just a call or email away!</p>
     <SubHeading>
        <h1 style={{fontSize:'2.5rem'}}>Frequently Asked Questions (FAQ)</h1>
    </SubHeading>

   {FaqData.map((props)=>{
    return  <Details key={props.id} open={!isOpen[props.id]}>
        <summary style={{ listStyle: 'none' }}>
            <a onClick={() => setIsOpen({[props.id]:!isOpen[props.id]} )} style={{
                color: `${isOpen[props.id] ? 'white' : 'black'}`,
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                padding: '0.5rem ',
                textDecoration: 'none',
                zIndex: '1',
                height: '2.5rem',
                        }}>
                <h3>{props.question}</h3>
                <ArrowUpwardIcon className='arrow' style={isOpen[props.id] ? { transform: 'rotate(180deg)', transition: '0.2s' } : { transform: 'rotate(0deg)', transition: '0.2s' }}> </ArrowUpwardIcon>
                <svg
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        zIndex: '-1',
                        
                    }}
                    x="0px"
                    y="0px"
                    viewBox='0 0 1000 64'
                    height='64'
                >

                    <polygon
                        className='path'
                        pointerEvents='all'
                        stroke='red'
                        fill={isOpen[props.id] ? '#add8e6' : 'transparent'}
                        points='85,55 81,55 51,55 42.5,64 34,55 0,55 0,0 34.4,0 42.5,9.5 50.6,0 81,0 85,0 1000,0 1000,55'
                    >
                    </polygon>
                </svg>
            </a>
        </summary>
        
        <p>{isOpen[props.id] ? <Box>{props.ans}</Box> : ''}</p>
       

    </Details>
   })}
   
   
</Layout> 

}




export default Faqs





















































// import React from 'react'
// import { useState } from 'react';
// import styled from 'styled-components'
// import Layout from '../Layout';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import { FaqData } from '../data';

// const Container = styled.div`

// `;
// const Wrapper = styled.div`
// height:100rem;
// `
// const BgImage = styled.div`
//      height:20rem;
//     width:98.9vw;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-image: url("https://universalpainters.co.uk/wp-content/uploads/2023/09/background.png");
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     transition: background-color 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
// `;
// const Overlay = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
//     height:20rem;
//     width:100vw;
//     background-color: black;
//     opacity: 0.5;
//     text-align: center;
  
//     h1{
//         color: white;
//         font-size: 3rem;
     
//     }
// `;
// const SubHeading = styled.div`
// display:flex;
// flex-direction: column;
// align-items: center;
// margin-bottom:2rem;
// overflow: hidden;
// border-bottom: 1px solid black;
// `
// const QuestionContianer = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// width: 99%;
// `
// const Questions = styled.div`
// display: flex;
// flex-direction: column;
// padding:0;
// margin-top: 1rem;


// .svg-shape{
//     position: absolute;
//     top:0;
//     left:0;
//     z-index: -1;
// };
// `;
// const Button = styled.div`
//     margin-left: 32rem;
   
// `;
// const Box = styled.div`
//     display: flex;
//     width: 49.9rem;
//     border: 1px solid black;
    
// `;
// const Text = styled.div`
// padding:2rem;
// text-align: center;

// `

// const Faqs = () => {

//     const [isOpen, setIsOpen] = useState({})

//     const handleClick = (e) => {
//         e.preventDefault();
//         setIsOpen(!isOpen)

//     }

//     return <Container>
//         <Layout>
//             <Wrapper>
//                 <BgImage>
//                     <Overlay>
//                         <h1>FAQ'S</h1>
//                     </Overlay>
//                 </BgImage>
//                 <SubHeading>
//                     <p>Welcome to the Universal Painters FAQ page! Here, you’ll find detailed answers to the most frequently asked questions (FAQs) about our services, products, and processes. We’ve gathered this information to ensure you have a clear and comprehensive understanding of how we can transform your residential, commercial, or industrial property with our expert painting and coating solutions. Please read FAQs below to find helpful insights and tips tailored to your needs, and if you have any further queries, we’re just a call or email away!</p>
//                     <h2>Frequently Asked Questions (FAQ)</h2>
//                 </SubHeading>

//                 <QuestionContianer>
//                     {FaqData.map((props) => {
//                         return <Questions key={props.id}>

//                             <a className='label' href="#collapse" onClick={() => setIsOpen({ isOpen, [props.id]: !isOpen[props.id] })} style={{
//                                 color: 'black',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 position: 'relative',
//                                 padding: '0.5rem ',
//                                 textDecoration: 'none',
//                                 zIndex: '1',
//                                 height: '2.5rem'
//                             }}>
//                                 <span style={{ display: 'inline-block', }} >{props.question}</span>
//                                 <Button>{isOpen[props.id] ? <ArrowUpwardIcon /> : <KeyboardArrowDownIcon />}</Button>
//                                 {console.log(isOpen[props.id])}
//                                 <svg
//                                     className='svg-shape'
//                                     x="0px"
//                                     y="0px"
//                                     viewBox='0 0 800 64'
//                                     height='64'
//                                 >
//                                     <polygon
//                                         className='path'
//                                         fill={isOpen[props.id] ? 'blue' : 'transparent'}
//                                         pointerEvents='all'
//                                         stroke='red'
//                                         points='85,55 81,55 51,55 42.5,64 34,55 0,55 0,0 34.4,0 42.5,9.5 50.6,0 81,0 85,0 800,0 800,55'
//                                     >
//                                     </polygon>
//                                 </svg>
//                             </a>
//                             {
//                                 isOpen[props.id] && <Box>
//                                     <Text>
//                                         <p>{props.ans}</p>
//                                     </Text>
//                                 </Box>
//                             }

//                         </Questions>
//                     })}
//                 </QuestionContianer>

//             </Wrapper>
//         </Layout>
//     </Container >
// }

// export default Faqs