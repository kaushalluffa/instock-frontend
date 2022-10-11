import "./header.scss"
import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo/InStock-Logo.svg"

export default function Header() {
  const { useState, Fragment } = React
  const [active, setActive] = useState("")
  const handleClick = (event) => {
    setActive(event.target.id)
  }

  return (
    <div className="header">
      <div className="header-wrapper">
        <Link to="/">
          <img src={Logo} className="navbar__logo"></img>
        </Link>
        <div className="navbar">
          <div className="navbar__link">
            <Link to="/warehouse">
              <button
                key={1}
                className={
                  active === "1" ? "active navbar__link--btn" : "inActive"
                }
                id={"1"}
                onClick={handleClick}
              >
                Warehouse
              </button>
            </Link>
            <Link to="/inventory">
              <button
                key={2}
                className={
                  active === "2" ? "active navbar__link--btn" : "inActive"
                }
                id={"2"}
                onClick={handleClick}
              >
                Inventory
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
