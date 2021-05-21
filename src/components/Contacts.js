import React from 'react';
import emailjs from 'emailjs-com';
/* eslint-disable */

const Contacts = () => {
  const serviceID = 'service_ID';

  const templateID = 'template_ID';

  const userID = 'user_9ioOXoLGkX2NTLcAXbSV6';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        service_ID,
        template_ID,
        e.target,
        user_9ioOXoLGkX2NTLcAXbSV6
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contacts'>
      <div className='text-center'>
        <h1>contact me</h1>
        <p>
          Please fill up the form and describe your project and I will
          contact you as soon as possble
        </p>
      </div>
      <div className='container'>
        <form onSubmit={sendEmail}>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              {/*Name input*/}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  name='name'
                />
                <div className='line'></div>
              </div>
              {/*Phone input*/}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Phone'
                  name='phone'
                />
                <div className='line'></div>
              </div>
              {/*Email input*/}
              <div className='text-center'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  name='email'
                />
                <div className='line'></div>
              </div>
              {/*Subject input*/}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Subject'
                  name='subject'
                />
                <div className='line'></div>
              </div>
            </div>
            <div className='col-md-6 col-xs-12'>
              {/*Description*/}
              <div className='text-center'>
                <textarea
                  type='text'
                  className='form-control'
                  placeholder='Describe your request'
                  name='description'
                ></textarea>
                <div className='line'></div>
              </div>
            </div>
            <div className='text-center'>
              <button
                className='btn-main-offer contact-btn'
                type='submit'
              >
                send request
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
