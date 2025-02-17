import { Link } from "react-router-dom"
import "./Nav.component.css";

const Nav = () => {
  return (
    <nav className="navBar">
      <div className="logoContainer">
        <Link to={"/"}>
          VoleiBlog
        </Link>
      </div>
    </nav>
  )
}

export default Nav
