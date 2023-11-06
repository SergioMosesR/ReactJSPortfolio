import React, { useState, useRef } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTwitterSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import img from '../../Assets/GW.jpg'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_plp3l56';
    const templateId = 'template_pc8xe5r';
    const publicKey = 'Js73n7JwH45JkZBiq';

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      to_name: 'Sergio Moses Riyanto',
      message: message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email send Successfully!', response);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error)
      })


  }

  return (
    <section id='Contact' className='contact'>
      <div className='contact-form'>
        <h1>Contact<span className='contact-me'> Me</span></h1>
        <p>Contact me, I'm willing to take part in several collaborative projects together with the aim of developing skills.</p>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Your Name' value={name} required onChange={(e) => setName(e.target.value)}/>
          <input type='email' value={email} id='' placeholder='Your E-mail' required onChange={(e) => setEmail(e.target.value)}/>
          <input type='' placeholder='Write a Subject' value={subject} required onChange={(e) => setSubject(e.target.value)}/>
          <textarea value={message} id='' cols='30' rows='10' placeholder='Your Message' required onChange={(e) => setMessage(e.target.value)}/>
          <div className='submit-button'>
            <button type='submit' value='Send' className='BTN'> SEND </button>
          </div>
          <div className="social-icons">
            <span className="divider">----</span>
            <a href='https://www.instagram.com/sergio.moses.969/?next=%2F' target='blank_'><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
            <a href='https://www.youtube.com/channel/UCSRqziK_vZCC4_CU5SEnlRw' target='blank_'><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
            <a href='https://twitter.com/SergioMosesR' target='blank_'><FontAwesomeIcon icon={faTwitterSquare} size="lg" /></a>
            <a href='https://wa.me/6285357787727?text=Hallo%2C%20Saya%20tertarik%20untuk%20berkolaborasi' target='blank_'><FontAwesomeIcon icon={faWhatsapp} size='lg' /> </a>
            <span className="divider">----</span>
          </div>
        </form>
      </div>

      <div className='contact-img'>
        <img src={img} />
      </div>
    </section>
  );
}

export default Contact;
