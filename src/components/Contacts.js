import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
/* eslint-disable */

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const { register, handleSubmit, errors } = useForm();

  const serviceID = 'service_ID1';

  const templateID = 'template_ID';

  const userID = 'user_9ioOXoLGkX2NTLcAXbSV6';

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully! I'll contact you as soon as possible"
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              {/*Name input*/}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  name='name'
                  //   {...register('Please enter your name', {
                  //       required: 'Required,'
                  //   })}
                  ref={register({
                    required: 'Please enter your name',
                    maxLength: {
                      value: 20,
                      message:
                        'Please enter a name with no more then 20 characters',
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.name && errors.name.message}
              </span>
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
