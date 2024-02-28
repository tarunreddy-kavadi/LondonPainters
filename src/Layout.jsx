import React from 'react';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Banner />
      <Footer />
    </>
  )
}

export default Layout
