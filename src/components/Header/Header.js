import "./header.scss"
import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo/InStock-Logo.svg"

export default function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Link to="/">
          <img src={Logo} className="navbar__logo"></img>
        </Link>
        <div className="navbar">
          <div className="navbar__link">
            <Link to="/warehouse">
              <button className="navbar__link--btn active btn">
                Warehouse
              </button>
            </Link>
            <Link to="/inventory">
              <button className="navbar__link--btn btn">Inventory</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
