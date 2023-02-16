import React from 'react'
import { useState,useEffect } from 'react'
import './Contact.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const titleArr = ['C','o','n','t','a','c','t', ' ','m','e']
  useEffect(() => {
    setTimeout(() => {
     setLetterClass('text-animate-hover')
   }, 4000)
 }, [])
  return (
    <section className='contact'>
      <div className='form-contact'>
      <h2 className='title-contact'>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={titleArr}
          idx={1}
        />
      </h2>
      <p>Don't hesitate to get in touch with me using below form :)</p>
        <form action='https://getform.io/f/d99cdfe9-fe5a-470d-ba29-3975a77d07d6' method='POST'>
          <div style={{display:'flex',justifyContent:'space-between'}}>
              <input name='Name' placeholder='Name' type="text" required />
              <input name='Surname' placeholder='Surname' type="text" required />
          </div>
              <input name='Email' placeholder='Email' type="email" required />
              <textarea name='Message' placeholder='Message' cols="30" rows="10"></textarea>
              <button type='submit' className='formSubmitBtn'>Let's talk</button>
        </form>
      </div>
      <div className='contact-map'>
        <div className="contact-map-info">
          <span>Rashad Farhadzada,</span> <br />
          <span>Azerbaijan,</span> <br />
          <span>S.Vurgun, 126/35,</span> <br /> <br />
          <span>ferhadzaderesad@gmail.com</span>
        </div>
        <MapContainer center={[40.588073, 49.680262]} zoom={14}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[40.588073, 49.680262]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
        <Loader type="ball-pulse-rise" className='loader' />
    </section>
  )
}

export default Contact
