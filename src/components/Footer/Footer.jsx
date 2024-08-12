import './Footer.css'
import youtube_icon from '../../assets/assets/youtube_icon.png'
import twitter_icon from '../../assets/assets/twitter_icon.png'
import facebook_icon from '../../assets/assets/facebook_icon.png'
import instagram_icon from '../../assets/assets/instagram_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
      </div>
    <ul>
      <li>Audio Descripción</li>
      <li>Ayuda General</li>
      <li>Tarjetas de regalo</li>
      <li>Media Central</li>
      <li>Relaciones con los inversores</li>
      <li>Empleos</li>
      <li>Terminos y Usos</li>
      <li>Privacidad</li>
      <li>Noticias</li>
      <li>Preferencias</li>
      <li>Informacion General</li>
      <li>Contactanos</li>
    </ul>
    <p className='copyright-text'>© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer