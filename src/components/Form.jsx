import React from 'react';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_s3gth08', 'template_7xerdpk', form.current, 'otpNX5LNEJu0cZnZu')
      .then((result) => {
        setSuccess(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <StyledWrapper>
      <div className="form-container" onSubmit={handleSubmit}>
        <form className="form" ref={form}>
          <span className="heading">Get in touch</span>
          <input placeholder="Name" type="text" className="input" name="name" />
          <input placeholder="Email" id="mail" type="email" className="input" name="email" />
          <textarea placeholder="Say Hello" rows={10} cols={30} id="message" name="message" className="textarea" defaultValue={""} />
          <div className="button-container">
            <button className="send-button" onClick={(e) => handleSubmit(e)}>
              {success ? <span>Message Sent</span> : <span>Send</span>}
            </button>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .orange {
    color: #ffffff;
  }

  .form-container {
    max-width: 700px;
    margin: 30px;
    background-color: #001925;
    padding: 30px;
    border-left: 5px solid #ffffff;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
  }

  .heading {
    display: block;
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .form-container .form .input {

    width: 100%;
    background-color: #002733;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    border-left: 1px solid transparent;
    color: #ffffff;
  }

  .form-container .form .input:focus {
    border-left: 5px solid #ffffff;
  }

  .form-container .form .textarea {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #013747;
    color: #ffffff;
    font-weight: bold;
    resize: none;
    max-height: 150px;
    margin-bottom: 20px;
    border-left: 1px solid transparent;
    transition: all 0.2s ease-in-out;
  }

  .form-container .form .textarea:focus {
    border-left: 5px solid #ffffff;
  }

  .form-container .form .button-container {
    display: flex;
    gap: 10px;
  }

  .form-container .form .button-container .send-button {
    flex-basis: 70%;
    background: #ff7a01;
    padding: 10px;
    color: #ffffff;
    text-align: center;
    font-weight: bold;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
  }

  .form-container .form .button-container .send-button:hover {
    background: transparent;
    border: 1px solid #ff7a01;
    color: #ffffff;
  }

  .form-container .form .button-container .reset-button-container {
    filter: drop-shadow(1px 1px 0px #ff7a01);
    flex-basis: 30%;
  }

  .form-container .form .button-container .reset-button-container .reset-button {
    position: relative;
    text-align: center;
    padding: 10px;
    color: #ffffff;
    font-weight: bold;
    background: #001925;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
    transition: all 0.2s ease-in-out;
  }

  .form-container .form .button-container .reset-button-container .reset-button:hover {
    background: #ff7a01;
    color: #001925;
  }`;

export default Form;
