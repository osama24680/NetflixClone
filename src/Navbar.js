import React, { useEffect,useState } from 'react'
import logo from "./logo.png"
import profile from "./profile.png"
import "./Navbar.css"
function Navbar() {
    const [handleShow,setHandleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setHandleShow(true)
            } else {
                setHandleShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll",null)
        }
    }, [])
    return (
        <div className={`${handleShow? "nav nav_black" :"nav"}`}>
            <img className="nav_logo" src={logo} alt="logo" />
            <img className="nav_avatar" src={profile} alt="profile" />
        </div>
    )
}

export default Navbar

