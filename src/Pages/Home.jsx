import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import Introduction from '../Components/Introduction'

const Home = () => {
  return (
    <div>
      <Navbar />
       <Introduction />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home
