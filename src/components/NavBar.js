import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont, faSpinner, faBars } from '@fortawesome/free-solid-svg-icons'

import "./NavBar.css"

const menu = [
  {
    name: "Font View",
    value: "/font_view",
    icon: <FontAwesomeIcon icon={faFont} />
  },
  {
    name: "Loading View",
    value: "/loading_view",
    icon: <FontAwesomeIcon icon={faSpinner} />
  }
]

function NavBar({ history }) {
  const [toggleState, setToggleState] = useState(false)
  const goTo = (path) => {
    setToggleState(false)
    history.push(path)
  }

  return (
    <header>
      <nav>
        <div className="menu-container">
          <ul className="menu">
            <div className="left-side">
              <li onClick={() => goTo("/")}>
                <span>{process.env.REACT_APP_PROJECT_NAME} Demo</span>
              </li>
            </div>
            <div className="right-side">
              <div className="dropdownMenu">
                <li key="hamburger" className="hamburgerMenu" onClick={(e) => setToggleState(toggleState ? false : true)}><FontAwesomeIcon icon={faBars} /></li>
                <div className="dropdownMenuContent" style={{display: toggleState ? "block" : "none"}}>
                  {menu.map((el) => (
                    <li key={el.name} onClick={() => goTo(el.value)}>
                      <span>{el.icon} {el.name}</span>
                    </li>
                  ))}
                </div>
              </div>
              {menu.map((el) => (
                <li key={el.name} onClick={() => goTo(el.value)}>
                  <span>{el.icon} {el.name}</span>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default withRouter(NavBar)
