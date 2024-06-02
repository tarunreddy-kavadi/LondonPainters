import React from 'react'
import styled from 'styled-components'
import { slideData1, slideData2 } from '../data'
import ResponsiveSetup from '../Responsive/ResponsiveSetup';


const Contianer = styled.div`
    display:flex;
    padding:5rem 0rem 0rem 0rem;
    flex-direction: column;
    
`
const ImgCon1 = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    ${ResponsiveSetup({
    display: 'flex',
    flexDirection: 'column',
})}
`;
const ImgCon2 = styled.div`
     display: flex;
    flex-direction: row;
    background-color: black;
        ${ResponsiveSetup({
    display: 'flex',
    flexDirection: 'column',
})}
`;
const Images1 = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
height: 15rem;
width: 33.33%;
background-image:url(${props => props.data.bg});
background-position: center left;
background-repeat: no-repeat;
background-size: cover;
padding: 40px 40px 40px 40px;
color: white;
&:hover{
 opacity: 0.7; 
 transition: .5s ease-in-out;
};
${ResponsiveSetup({
    width: '100%',
    height: '12rem',
    padding: '40px 30px 0px 20px'
})}
`
const Images2 = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
height: 15rem;
width: 33.33%;
background-image:url(${props => props.data.bg});
background-position: center left;
background-repeat: no-repeat;
background-size: cover;
padding: 40px 40px 40px 40px;
background-color: black;
color: white;
&:hover{
background-color: black; opacity: 0.9; transition: all .5s ease-in-out;
};
${ResponsiveSetup({
    width: '100%',
    height: '12rem',
    padding: '40px 20px 0px 20px'
})}
`

const PromoImages = () => {

    return <Contianer>
        <ImgCon1>
            {slideData1.map((props) => {
                return <Images1 data={props} key={props.id}>
                    <h3>{props.title} </h3>
                    <p>{props.desc}</p>
                    <p >{props.link}</p>
                </Images1>
            })}
        </ImgCon1>

        <ImgCon2>
            {slideData2.map((props) => {
                return <Images2 data={props} key={props.id} >
                    <h3>{props.title} </h3>
                    <p>{props.desc}</p>
                    <p>{props.link}</p>

                </Images2>
            })}
        </ImgCon2>
    </Contianer>

}

export default PromoImages
