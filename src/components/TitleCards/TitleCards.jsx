import  './TitleCards.css'
import { useRef } from 'react'
// import cards_data from '../../assets/assets/cards/Cards_data'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTMyZGQ5NzQyZWFkOTQ1OTA2MGY1MzIzNmQ4Y2YyZiIsIm5iZiI6MTcyMzU2NjIxNC41MTY1NDcsInN1YiI6IjY2YmI4NzJjMWVlYjA3YzY5ODY2M2EzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pe-l9PPsgY_LsX5hx5N1CtBLQ3x128t4wU8Djdwxxoc'
    }
  };
  
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-USpage=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className='title-cards'>
      <h2>{title?title:"Populares en Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
          <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards