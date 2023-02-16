import React from 'react'
import './Footer.scss'
import {BsFacebook, BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <div className="card">
                <p><span><a href="https://github.com/Rashadfrd" rel='noreferrer' target='_blank'><BsGithub size={23} /></a></span></p>
                <p><span><a href="https://www.facebook.com/rashad.frd.5/" rel='noreferrer' target='_blank'><BsFacebook size={23} /></a></span></p>
                <p><span><a href="https://www.linkedin.com/in/rashad-farhadzada-75b713265/" rel='noreferrer' target='_blank'><BsLinkedin size={23} /></a></span></p>
                <p><span><a href="https://www.instagram.com/rashadfrd/" rel='noreferrer' target='_blank'><BsInstagram size={23} /></a></span></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
