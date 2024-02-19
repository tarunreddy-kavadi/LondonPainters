import React, { useRef} from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'

const Conatiner = styled.div`
height: 20rem;
width:15rem;
display: flex;
flex-direction: column;
justify-content: center;
padding:2rem;
border-radius: 1rem;
background-color: white;
    border: 1px solid black;
    .h1{
        font-weight: normal;
    }
    .form{
        display: flex;
        flex-direction:column;
        justify-content: space-between; 
    }
    .con{
        margin: 0.5rem;
        height: 2rem;

    }

`

const Form = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lmmjwxj', 'template_9swehhi', form.current, 'JcH28BJSJ1bX5ivx1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <Conatiner>
            <h3>Request a Free Estimate</h3>
     <form ref={form} onSubmit={sendEmail} className='form'>
      <input placeholder="Name" type="text" name="user_name"  className='con'/>
      <input placeholder='Active email' type="email" name="user_email" className='con' />
      <input placeholder='Phone Number' type="tel" name="user_phone" className='con' />
      <input placeholder='Subject' type="text" name="subject" className='con' />
      <textarea  placeholder="message" name="message" className='con' />
      <input type="submit" value="Send" />
      </form>
     </Conatiner>
  )
}

export default Form
