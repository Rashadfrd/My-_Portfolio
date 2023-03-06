import React from 'react'
import './Portfolio.scss'
import Ecommerce from '../../assets/Ecommerce.png'
import ConsoleApp from '../../assets/ConsoleApp.png'
import LoremIpsum from '../../assets/LoremIpsum.png'
import Riode from '../../assets/Riode.png'
import PortfolioImg from '../../assets/Portfolio.png'
import StudentManagement from '../../assets/StudentManagement.png'
import Birbank from '../../assets/birBankApp.png'
import { useState,useEffect } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const titleArr = ['P','o','r','t','f','o','l','i','o']
    useEffect(() => {
      setTimeout(() => {
       setLetterClass('text-animate-hover')
     }, 4000)
   }, [])
     const projects = [
        {
            id:1,
            name:'React_E-Commerce',
            url:'https://github.com/Rashadfrd/React_ECommerce',
            src:Ecommerce,
            status:false,
            techs:['React','React Router','React Context','Firebase']
        },
        {
            id:6,
            name:'Portfolio',
            url:'https://github.com/Rashadfrd/My_Portfolio',
            src:PortfolioImg,
            status:true,
            techs:['React','React Router','Leaflet']
        },
        {
            id:3,
            name:'Student_Management_System',
            url:'https://github.com/Rashadfrd/Asp.Net_StudentManagementSystem',
            src:StudentManagement,
            status:true,
            techs:['JavaScript','Jquery','Asp.Net_MVC','SQL']
        },
        {
          id:7,
          name:'React_Native_Birbank_Clone',
          url:'https://github.com/Rashadfrd/ReactNative_BirBank_UIClone',
          src:Birbank,
          status:true,
          techs:['React Native','React Navigation']
        },
        {
          id:2,
          name:'React_Sentence_Generator',
          url:'https://github.com/Rashadfrd/Sentence_Generator',
          src:LoremIpsum,
          status:true,
          techs:['React']
        },
        {
            id:4,
            name:'C#_ConsoleApplication',
            url:'https://github.com/Rashadfrd/NewConsoleApp',
            src:ConsoleApp,
            status:true,
            techs:['C#']
        },
        {
            id:5,
            name:'.Net_Riode_BackEnd',
            url:'https://github.com/Rashadfrd/MVC_BackEndProject',
            src:Riode,
            status:true,
            techs:['C#','Asp.Net_MVC']
        },
    ]
  return (
    <section className='portfolio'>
      <div className="container">
        <h2 className='title-portfolio'>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={titleArr}
          idx={12}
        />
        </h2>
        <div className="portfolio-cards">
            {projects.map((project)=>{
                return (<div key={project.id} className="portfolio-cards-item">
                    <div className="card-container">
                         <div className='card-container-img'>
                            <img style={{borderRadius:'10px'}} width='100%' height={240} src={project.src} alt="" />
                        </div>
                        {project.status 
                        ? <span className='project-status-deactive'>Status</span> 
                        :  <span className='project-status project-status-active'>Ongoing</span>}
                        <div className='overlay'>
                            <span className='project-name'>{project.name}</span>
                            <a className='githubLink-btn' rel='noreferrer' target='_blank' href={project.url}>Code</a>
                            <div>
                                {project.techs.map((tech, index)=>{
                                    return  <span key={index} className='project-techs'>{tech}</span>
                                })}
                            </div>
                        </div>
                    </div>
                </div> 
                )
            })}           
        </div>
      </div>
      <Loader type="ball-pulse-rise" className='loader' />
    </section>
  )
}

export default Portfolio
