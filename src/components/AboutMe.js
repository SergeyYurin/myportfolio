import { auth } from 'firebase-admin';
import React from 'react';
import author from '../IMG1.jpg';

function AboutMe() {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <img src={author} alt='author...' />
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h1>About me</h1>
          <p>
            Hello! I am Sergey, a determined software developer who
            once tried his hand at programming and thus found a new
            passion. I use only modern technologies such as React.js,
            Node.js, Git, Firebase and others. To make a special and
            unique website or web application for you, I will require
            from you an idea of what you want to achieve and how do
            you see it looks like. Having that in mind I will fill
            that project by features required to help to make your
            business profitable and successful.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
