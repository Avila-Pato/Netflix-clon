import './NavBar.css'
import logo from '../../assets/assets/logo.png'
import search_icon from '../../assets/assets/search_icon.svg'
import bell_icon from '../../assets/assets/bell_icon.svg'
import profile_img from '../../assets/assets/profile_img.png'
import caret_icon from '../../assets/assets/caret_icon.svg'
import { useEffect, useRef } from 'react'
import { logout } from '../../firebase'


function NavBar() {
  
  const navRef =  useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo"/>
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>Novedades Populares</li>
          <li>Mi lista</li>
          <li>Filtrar por Idiomas</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search Icon" className="icons"/>
        <p>Niños</p>
          <img src={bell_icon} alt="Bell Icon" className="icons"/>
          <div className="navbar-profile">
          <img src={profile_img} alt="" className="profile"/>
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p onClick={() => {logout()}}>Cerrar sesión de Netflix</p>
          </div>

          </div>
      </div>
    </div>
  )
}

export default NavBar