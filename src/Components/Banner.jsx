import React from 'react'
import styled from 'styled-components'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const Container = styled.div`
display:flex;
height: 15rem;
flex-direction: row;
background-color: darkblue;
background-repeat: no-repeat;
color: white;
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:0rem 5rem 0rem 2rem;

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
