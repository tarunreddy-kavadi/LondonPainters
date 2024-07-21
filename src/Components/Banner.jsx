import React from 'react'
import styled from 'styled-components'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ResponsiveSetup from '../Responsive/ResponsiveSetup';

const Container = styled.div`
display:flex;
max-height: 25rem;
background-color: darkblue;
background-repeat: no-repeat;
color: white;
 img{
    width:50%;
    }
${ResponsiveSetup({
    marginTop: '5rem',
    maxHeight: '100rem',
})}

`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:50%;
    /* padding:0rem 5rem 0rem 2rem; */
    a{
        text-decoration: none;
        color:white;
        ${ResponsiveSetup({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5rem',
    width: '100%',
    backgroundColor: 'blue'
})}
    }
    ${ResponsiveSetup({
    padding: '0rem 0rem 0rem 0rem',

})}

`


const Banner = () => {
    return <Container>
        <Text>
            <h1>Need A Free Estimate?</h1>
            <p>Universal Painters provides a comprehensive painting and decorating service, perfectly suited for transforming properties in the residential, commercial, and industrial sectors. Whether it’s your home or business, we have the expertise to completely revitalise your building!</p>
            <a href='tel:123456789' style={{ textDecoration: 'none', color: 'white' }}><PhoneEnabledIcon />Call Us Now</a>
        </Text>
        <img src="https://storage.googleapis.com/cms-storage-bucket/72521e62275b24d3c37d.png" alt='image' />
    </Container>
}

export default Banner
