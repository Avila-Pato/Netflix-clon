import './Player.css'
import back_arrow_icon from '../../assets/assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
    
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTMyZGQ5NzQyZWFkOTQ1OTA2MGY1MzIzNmQ4Y2YyZiIsIm5iZiI6MTcyMzU2NjIxNC41MTY1NDcsInN1YiI6IjY2YmI4NzJjMWVlYjA3YzY5ODY2M2EzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pe-l9PPsgY_LsX5hx5N1CtBLQ3x128t4wU8Djdwxxoc'
    }
  };

  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response=> setApiData(response.results[0]))
    .catch(err => console.error(err));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
 

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=> {navigate(-1)}} />
      <iframe width='90%' height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='Trailer' frameBorder='0' allowFullScreen> </iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>

      </div>

    </div>
  )
}

export default Player