import React, { useState, useEffect } from 'react'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import logo from '../../assets/movix-logo.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import './Header.scss'

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [mobileMenu, setmobileMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [show, setShow] = useState("top");
    const [lastScrollY, setlastScrollY] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
    

    const controlNavBar = () => {
        console.log(window.screenY);
        if(window.scrollY > 200){
            if(window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide");
            }
            else {
                setShow("show");
            }
        }
        else {
            setShow("top");
        }
        setlastScrollY(window.scrollY)
    }

    useEffect(() => {
      window.addEventListener("scroll", controlNavBar);
      return () => {
        window.removeEventListener("scroll", controlNavBar);
      }
    }, [])
    
    const openMobileMenu = () => {
        setmobileMenu(true);
    }
    const closeMobileMenu = () => {
        setmobileMenu(false);
    }
    const navigationHandler = (type) => {
        navigate(`/explore/${type}`)
    }
    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
        <ContentWrapper>
            <div className="logo">
            <img src={logo} alt='having trouble'/>
            </div>
            <ul className="menuItems">
                <li className="menuItem" onClick={() => navigationHandler("movie")}>Movies</li>
                <li className="menuItem" onClick={() => navigationHandler("tv")}>TV Shows</li>
                <li className="menuItem">Search</li>
            </ul>
            <div className="mobileMenuItems">
                <span>Se</span>
                { mobileMenu ? <span onClick={closeMobileMenu}>Close</span> : <span onClick={openMobileMenu}>Open</span> }
            </div>
        </ContentWrapper>
        </header>
    )
}

export default Header