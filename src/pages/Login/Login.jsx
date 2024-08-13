import './Login.css'
import logo from '../../assets/assets/logo.png'
import { useState } from 'react'
const Login = () => {

  const [singState, setSingState] = useState("Registrate")


  return (
    <div className='login'>
      <img src={logo} alt=""className='login-logo'/>
      <div className="login-form">
        <h1>{singState}</h1>
        <form>
        {singState === 'Inicia sesión'?
        <input type="text" placeholder='Tu nombre'/>:<></>}
          
          <input type="email" placeholder='Correo'/>
          <input type="password" placeholder='Contraseña'/>
          <button>{singState}</button>
          <div className="form-help">
            <div className="remenber">
              <input type="checkbox"/>
              <label htmlFor=""> Recordarme</label>
            </div>
            <p>Nececitas Ayuda?</p>
          </div>
        </form>
        <div className="form-switch">
          {singState === 'Inicia sesión'
          ?
          <p>¿Ya tienes una cuenta? <span onClick={()=>setSingState("Registrate")}>Inicia sesión</span></p>          
          :
          <p>¿No tienes una cuenta? <span onClick={()=>setSingState("Inicia sesión")}>Registrate</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login