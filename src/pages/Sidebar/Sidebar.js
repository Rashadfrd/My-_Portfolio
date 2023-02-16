import React from 'react'
import './Sidebar.scss'
import {AiOutlineClose} from 'react-icons/ai'
import { useAppContext } from '../../context/AppContext'
import { links } from '../../utils/constants'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const data = useAppContext()
  return (
    <div className='sidebar'>
        <aside className={data.sidebar ? 'sidebar-active' : undefined}>
        <div className="sidebar-container">
            <div className="logo-close">
                <div className="logo"></div>
                <div className="close" ><span><AiOutlineClose style={{cursor:'pointer'}} size={'30px'} onClick={()=>{data.setSidebar(false)}}/></span></div>
            </div>
        </div>
        <div className="navlinks">
                <ul>
                {links.map((link)=>{
                    const{id,name,url} = link;
                    return <li key={id} className='menu-item'><Link onClick={()=>{data.setSidebar(false)}} style={{textDecoration:'none',width:'100%'}} to={url}>{name}</Link></li>
                  })}
                </ul>
        </div>
        </aside>
    </div>
  )
}

export default Sidebar
