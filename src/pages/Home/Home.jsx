import './Home.css'
import NavBar from '../../components/Navbar/NavBar'
import hero_banner from '../../assets/assets/hero_banner.jpg'
import hero_title from '../../assets/assets/hero_title.png'
import play_icon from '../../assets/assets/play_icon.png'
import info_icon from '../../assets/assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <div className="hero">
        <img src={hero_banner} alt=""className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Un joven habitante de la moderna Estambul descubre sus lazos con una antigua orden secreta y se dispone a salvar a su ciudad de un enemigo inmortal.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Reproducir</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />Más información</button>
          </div>
          <TitleCards />
        </div>
       </div>
       <div className="more-cards">
       <TitleCards title={"Películas taquilleras"} category={"top_rated"} />
       <TitleCards title={"Solo en Netflix"} category={"popular"} />
       <TitleCards title={"Próximamente"} category={"upcoming"} />
       <TitleCards title={"Top para Ti"}  category={"now_playing"} />
       </div>
       <Footer />
    </div>
  )
}

export default home