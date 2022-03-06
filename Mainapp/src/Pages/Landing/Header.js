import React, {useRef, useEffect} from 'react'
import './Header.css'
import {Link} from "react-router-dom"
import Logo from "./Images/logo.png"
import {useAuth0} from '@auth0/auth0-react';

function Header({timeline}) {
    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();
    let logo = useRef(null);
    let menu_items = useRef(null);
    useEffect(()=> {
        timeline.from(logo,{
            delay: .5,
            duration: 1,
            opacity: 0,
            y: 100
        })
        timeline.from(menu_items,{
            duration: 1,
            opacity: 0,
            y: 100
        },"-=.3")
    })
    return (
        <div>
            <div className="header">
                <div className="logo1" ref={el => logo = el}>
                   <img className="logo"src={Logo} alt="logo"></img>
                </div>
                <div className="menu">
                    <ul ref={el => menu_items = el}>
    {!isAuthenticated?
        <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>:
     <button
      className="btn btn-primary btn-block"
      onClick={() => logout({returnTo:"http://localhost:3000"})}
    >
      Log Out
    </button>
}
       
                       <Link to="/home"><li>Dashboard</li></Link>
                        <Link to="/about"><li>About</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
