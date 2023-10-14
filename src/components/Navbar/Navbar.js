import { links } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import "./Navbar.scss";
import { useAppContext } from "../../context/AppContext";
import cv from "../../assets/CV-Rashad-Farhadzada.pdf";
import {BsDownload} from 'react-icons/bs'

const Navbar = () => {
  const data = useAppContext();
  const downloadHandler = () => {
    const cvFileUrl = cv;
    const link = document.createElement("a");
    link.href = cvFileUrl;
    link.download = "CV-Rashad-Farhadzada";
    link.click();
  };
  return (
    <header>
      <div className="logo">
        <div className="container">
          <p className="typed">Rashad</p>
        </div>
      </div>
      <div style={{display:'flex', gap:'40px'}}>
        <button className="cv-download" onClick={downloadHandler}>CV <BsDownload /></button>
        <nav>
          {links.map((link) => {
              return (
                  <NavLink className="link" to={link.url} key={link.id}>
                {link.name}
              </NavLink>
            );
        })}
        </nav>
      </div>
      <div className="menu-btn">
        {
          <VscMenu
            size={28}
            onClick={() => {
              data.setSidebar(true);
            }}
          />
        }
      </div>
    </header>
  );
};

export default Navbar;
