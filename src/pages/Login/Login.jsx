import './Login.css'
import logo from '../../assets/assets/logo.png'
import { useState } from 'react'
import {login , signup } from '../../firebase'
import netflix_spinner from '../../assets/assets/netflix_spinner.gif'


const Login = () => {

  const [singState, setSingState] = useState("Registrate")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // agregando el sppiner
  const [loading, setLoading] = useState(false)

  const user_auth = async(event) => {
    event.preventDefault()
    setLoading(true)
    if(singState === 'Inicia sesión'){
      await login(email, password)
    }else{
      await signup(name, email, password)
    }
    setLoading(false) 
  }


  return (
    loading?<div className='login-spinner'>
        <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt=""className='login-logo'/>
      <div className="login-form">
        <h1>{singState}</h1>
        <form>
        {singState === 'Registrate'?

        <input value={name} 
          onChange={(e) => {setName(e.target.value)}} 
        
          type="text" 
        placeholder='Tu nombre'/>:<></>}
          
          <input value={email} 
          onChange={(e) => {setEmail(e.target.value)}} 
          type="email" placeholder='Correo'
        />

          <input value={password} 
          onChange={(e) => {setPassword(e.target.value)}} 
          type="password" placeholder='Contraseña'
        />

          <button onClick={user_auth } type='submit'>{singState}</button>
          <div className="form-help">
            <div className="remenber">
              <input type="checkbox"/>
              <label htmlFor=""> Recordarme</label>
            </div>
            <p>Nececitas Ayuda?</p>
          </div>
        </form>
        <div className="form-switch">
          {singState === 'Registrate'
          ?
          <p>¿Ya tienes una cuenta? <span onClick={()=>setSingState("Inicia sesión")}>Inicia sesión</span></p>          
          :
          <p>¿No tienes una cuenta? <span onClick={()=>setSingState("Registrate")}>Registrate</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login