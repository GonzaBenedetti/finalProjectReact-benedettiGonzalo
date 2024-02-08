import logo from "../../assets/logoNav.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="containerLogo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="containerSearch">
          <label htmlFor=""></label>
          <input type="text" placeholder="Search SmartBuyHub" />
          <i className="bx bx-search"></i>
        </div>
      </div>

      <ul className="listNav">
        <NavLink to="/" className={({isActive}) => isActive ? 'activeLiNav' : 'liNav'}>
          Home
        </NavLink>
        <NavLink to="/shop" className={({isActive}) => isActive ? 'activeLiNav' : 'liNav'}>
          Shop
        </NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'activeLiNav' : 'liNav'}>
          About
        </NavLink>
        <NavLink to="/help" className={({isActive}) => isActive ? 'activeLiNav' : 'liNav'}>
          Help
        </NavLink>
        <NavLink to="/cart" className='liNav'>
          <CartWidget />
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
