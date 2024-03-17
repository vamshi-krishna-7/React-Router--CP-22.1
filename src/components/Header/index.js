// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="wave-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <p className="wave-img-text">Wave</p>
    </div>
    <ul className="nav-list-container">
      <li>
        <Link to="/" className="nav-list-items">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-list-items">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-list-items">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
