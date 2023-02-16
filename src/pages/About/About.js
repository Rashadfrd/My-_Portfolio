import React,{useState,useEffect} from 'react'
import './About.scss'
import ReactImg from '../../assets/logo4.png'
import HtmlImg from '../../assets/logo1.png'
import CssImg from '../../assets/logo2.png'
import JsImg from '../../assets/logo3.png'
import GitHubImg from '../../assets/logo6.png'
import AspNetImg from '../../assets/logo5.png'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const titleArr = ['A','b','o','u','t']
  useEffect(() => {
    setTimeout(() => {
     setLetterClass('text-animate-hover')
   }, 4000)
 }, [])
  return (
    <section className='about'>
    <div className="container">
      <div className='container-info'>
        <h2>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={titleArr}
          idx={12}
        />
        </h2>
        <p>Hi Everyone, I am Rashad Farhadzada from Azerbaijan. With a passion for technology and a strong drive to learn, I'm a developer who likes to create stunning, user-friendly websites and web applications. Got an experience of almost 1 year in web development including technologies like HTML5, CSS3, BootStrap, Sass, JavaScript, React, C#, .Net, Git. I have a strong desire to collaborate and work as a team, bringing my creative ideas and problem-solving skills to the table.</p>
      </div>
      <div className='container-cube'>
        <div className="scene">
            <div className="cube">
                <div className="cube__face cube__face--front"><img src={HtmlImg} width='130' alt="" /></div>
                <div className="cube__face cube__face--back"><img className='gitHubImg' src={GitHubImg} width='130' alt="" /></div>
                <div className="cube__face cube__face--right"><img src={JsImg} width='130' alt="" /></div>
                <div className="cube__face cube__face--left"><img className='aspImg' src={AspNetImg} width='130' alt="" /></div>
                <div className="cube__face cube__face--top"><img src={ReactImg} width='130' alt="" /></div>
                <div className="cube__face cube__face--bottom"><img src={CssImg} width='130' alt="" /></div>
            </div>
        </div>

      </div>
    </div>
    <Loader type="ball-pulse-rise" className='loader' />
    </section>
  )
}

export default About
