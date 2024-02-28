import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:20rem;
    width:50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://universalpainters.co.uk/wp-content/uploads/2024/01/photo-1633613286991-611fe299c4be-scaled-1.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: background-color 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
`
const Container1 = styled.div`
    height:20rem;
    width:50rem;
    background-color: black;
    opacity: 0.5;
    
`
const Reviews = () => {
    return <Container>
        <Container1 />
    </Container>
}

export default Reviews
