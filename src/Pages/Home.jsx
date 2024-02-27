import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import Introduction from '../Components/Introduction'
import PromoImages from '../Components/PromoImages'
import Cards from '../Components/Cards'
import Reviews from '../Components/Reviews'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <PromoImages />
      <Cards />
      <Reviews />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home
