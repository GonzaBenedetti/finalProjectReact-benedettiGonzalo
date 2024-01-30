import { NavLink, Link } from "react-router-dom"
import "./Footer.css"
import logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <footer className="footerMain">
      <div className="containerFooter">
        <picture className="containerLogoFooter">
          <img src={logo} alt="logo" />
          <p>742 de Evergreen Terrace</p>
        </picture>
        <ul>
          <h4>Main Menu</h4>
          <NavLink className="linkFooter" to="/">Home</NavLink>
          <NavLink className="linkFooter" to="/shop">Shop</NavLink>
          <NavLink className="linkFooter" to="/about">About</NavLink>
          <NavLink className="linkFooter" to="/help">Help</NavLink>
        </ul>
        <ul>
          <h4>Company</h4>
          <NavLink className="linkFooter" to="/the-company">The Company</NavLink>
          <NavLink className="linkFooter" to="/careers">Careers</NavLink>
          <NavLink className="linkFooter" to="/press">Press</NavLink>
        </ul>
        <ul>
          <h4>Find Us on</h4>
          <Link className="linkFooter" to="http://www.instagram.com/" target={"_blank"}>Instagram</Link>
          <Link className="linkFooter" to="http://www.facebook.com/" target={"_blank"}>Facebook</Link>
          <Link className="linkFooter" to="http://www.tiktok.com/" target={"_blank"}>TikTok</Link>
        </ul>
      </div>
      <hr />
      <p className='textCopy'>SmartBuyHub &copy; 2024</p>
    </footer>
  )
}

export default Footer