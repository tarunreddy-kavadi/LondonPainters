import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import Introduction from '../Components/Introduction'
import PromoImages from '../Components/PromoImages'
import Cards from '../Components/Cards'
import Reviews from '../Components/Reviews'
import Quote from '../Components/Quote'

import styled from 'styled-components'



const Container = styled.div`

`
const Home = () => {
  return (
    <Container >
      <Navbar />
      <Introduction />
      <PromoImages />
      <Cards />
      <Reviews />
      <Banner />
      <Quote />
      <Footer />
    </Container>
  )
}

export default Home
