import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import Introduction from '../Components/Introduction'
import PromoImages from '../Components/PromoImages'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <PromoImages />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home
