import React from 'react'
import { useState, useEffect } from 'react'
import {BsChevronRight} from 'react-icons/bs'
import profile from '../../assets/rf--heroImg.png'
import './Home.scss'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['R', 'a', 's', 'h', 'a', 'd',]
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <section className='home'>
        <div className='pageText'>
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _15`}> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={23}
            />
            </h1>
            <p> Web Developer </p>
            <Link className='portfolioBtn' to='/portfolio'>Portfolio <span className='arrow'><BsChevronRight size={12} /></span> </Link>
        </div>
        <div className='hero'>
            <img src={profile} width='100%' height='100%' alt="RF" />
        </div>
        <Loader type="ball-pulse-rise" className='loader' />
    </section>
  )
}

export default Home
