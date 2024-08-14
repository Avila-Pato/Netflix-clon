
import Home from './pages/Home/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Player from './pages/Player/Player.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {


  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {

      if(user) {
        console.log('hay usuario')
      navigate('/');
    } else {
       console.log('no hay usuario')
       navigate('/login');
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div>
        <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>

      </Routes>
    </div>
  )
}

export default App