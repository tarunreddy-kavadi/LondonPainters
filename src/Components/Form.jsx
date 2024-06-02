import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { useForm } from "react-hook-form";
import ResponsiveSetup from '../Responsive/ResponsiveSetup';

const Conatiner = styled.div`
height: 37rem;
width:30rem;
display: flex;
flex-direction: column;
justify-content: center;
padding:2rem;
border-radius: 1rem;
background-color: white;
box-shadow: 0px 104px 104px -40px rgba(0, 0, 0, 0.16);

h3{
        display: flex;
        justify-content: center;    
    }
    form{
        display: flex;
        flex-direction:column;
    }
    .con{
        margin: 0.5rem;
        height: 3rem;
    }
    .btn{
        display: flex;
        justify-content: center;
        height: 2.5rem;
        width: 7rem;
        margin: 0.5rem;
        background-color: blue;
        color:white;
        font-weight: bold;
        &:hover{
        background-color: white;
        color:blue;
        }
    }
    span{
        color: red;
    }
    ${ResponsiveSetup({
    boxShadow: '0px 0px 0px 0px',
    padding: '0rem',
    backgroundColor: 'none'
})}
`;

const Form = () => {
    const form = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm();

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
            <form ref={form} onSubmit={handleSubmit(sendEmail)} className='form'>
                <input placeholder="Name" type="text" name="user_name" className='con' id='name'{...register('name', { required: 'Name is required.' })} />
                <span>{errors.name && errors.name.message}</span>
                <input placeholder='Active email' type="email" name="user_email" className='con' id='email'{...register('email', { required: 'Email is required.' })} />
                <span>{errors.email && errors.email.message}</span>
                <input placeholder='Phone Number' type="tel" name="user_phone" className='con' id='number'{...register('number', { required: 'phone number is required.' })} />
                <span>{errors.number && errors.number.message}</span>
                <input placeholder='Subject' type="text" name="subject" className='con' id='subject'{...register('subject', { required: 'subject is required.' })} />
                <span>{errors.subject && errors.subject.message}</span>
                <textarea placeholder="message" name="message" className='con' id='message'{...register('message', { required: 'message is required.' })} />
                <span>{errors.message && errors.message.message}</span>
                <input type="submit" value="Send" className='btn' />

            </form>
        </Conatiner>
    )
}

export default Form
