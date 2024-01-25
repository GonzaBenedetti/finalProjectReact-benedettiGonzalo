import logo from "../../assets/logoNav.png"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
        <div className="containerLogo">
            <img src={logo} alt="logo" />
            <div className="containerSearch">
                <label htmlFor=""></label>
                <input type="text" placeholder="Search SmartBuyHub"/>
                <i class='bx bx-search'></i>
            </div>
        </div>

        <ul className="listNav">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Help</li>
            <li><i class='bx bx-cart'></i>Your Cart</li>
        </ul>
    </nav>
  )
}

export default NavBar