import { links } from '../../utils/constants'
import { NavLink } from 'react-router-dom'
import { VscMenu } from 'react-icons/vsc'
import './Navbar.scss'
import { useAppContext } from '../../context/AppContext'

const Navbar = () => {
    const data = useAppContext();
  return (
    <header>
        <div className='logo'>
            <div className="container">
                <p className="typed">Rashad</p>
            </div>
        </div>
        <div>
            <nav>
                {links.map((link)=>{
                    return <NavLink className='link' to={link.url} key={link.id}>{link.name}</NavLink>
                })}
            </nav>
        </div>
        <div className='menu-btn'>
            {
                <VscMenu size={28} onClick={()=>{data.setSidebar(true)}}/>
            }
        </div>
    </header>
  )
}

export default Navbar
