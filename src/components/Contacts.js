import React from 'react';

const Contacts = () => {
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
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            {/*Name input*/}
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              name='name'
            />
            {/*Phone input*/}
            <input
              type='text'
              className='form-control'
              placeholder='Phone'
              phone='phone'
            />
            {/*Email input*/}
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              email='email'
            />
            {/*Subject input*/}
            <input
              type='text'
              className='form-control'
              placeholder='Subject'
              subject='subject'
            />
          </div>
          <div className='col-md-6 col-xs-12'>
            {/*Description*/}
            <textarea
              type='text'
              className='form-control'
              placeholder='Describe your request'
              subject='Describe your request'
            ></textarea>
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
      </div>
    </div>
  );
};

export default Contacts;
