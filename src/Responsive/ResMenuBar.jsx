import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { MenuData } from '../data';
import SubNav from './SubNav';

const Container = styled.div`
display:flex;

`
const Options = styled.div`
display:flex;
flex-direction:column;
background: #15171c;
    width: 100vw;
    height: 1000vh;
    justify-content: left;
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "50%" : "-100%")};
    transition: 1000ms;
    z-index: 1;
    .cross{
    margin-left: 3rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color:white;
    }
    .link{
      display:flex;
      margin-left:5rem;
      padding:20px
    }
`
const Button = styled.button`
display:grid;
margin-left: 15rem;
background-color:transparent;
border:none;
`

const ResMenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Button onClick={() => setIsOpen(!isOpen)}><MenuIcon style={{ fontSize: '30px' }} /></Button>
      {isOpen && (
        <Options open={isOpen}>
          <CloseIcon className='cross' onClick={() => setIsOpen(!isOpen)} />
          {
            MenuData.map((item, index) => {
              return <SubNav item={item} key={index} />
            })
          }
        </Options>
      )}
    </Container>
  )


}

export default ResMenuBar

