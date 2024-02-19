import React from 'react'
import styled from 'styled-components'
import Form from './Form'

const Container = styled.div`
height: 100rem;
`
const Intro = styled.div`
display:flex;
flex-direction: column;
align-items:flex-start;
justify-content: center;
background-image: url('https://images.unsplash.com/photo-1647786460409-ea9b06550e7f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
background-repeat: no-repeat;
background-size: cover;
padding:0rem 70rem 0rem 5rem;
height: 60rem;
`
const Introduction = () => {
    return <Container> 
        <Intro>
            <h3>YOUR LOCAL PAINTING SERVICE</h3>
            <h1>The Residential, Commerical and Industrial Painting Specialist</h1>
            <p>We provide Exterior Painting, Rendering, Insulation and Interior Painting solutions for Residential, Commercial and Industrial customers across London and the Home Counties.    </p>
        <Form />
        </Intro>
        
  </Container>
}

export default Introduction
