import React, { useState } from 'react';
import eye from './assets/eye.png';
import eyesvg from './assets/eyeSVG.png';
import { useNavigate} from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit (){

    if (!username || !password) {
      return setError('please input username and password')
    }

    navigate('/welcome', {state:{data: username}})
  }
  return (
    <div className='container'>
      <header>
        <img src={eye} alt="irisAi" />
      </header>

      <div className='center'>
        <div>

          <section className='signIn'>
            <img className='eyeSVG' src={eyesvg} alt="iris" />
            <h2 className='irisai' >IrisAI</h2>
          </section>

          <section className="form">
            
            {error && <p style={{color: 'red'}}>{error}</p>}
            <input className='input' type="text" value={username} placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}}/>

            <input className='input' type="password" value={password} placeholder='Password'
            onChange={(e)=>{setPassword(e.target.value)}} />

            <button className='btn' onClick={handleSubmit}>Sign in</button>
          </section>

        </div>
      </div>

    </div>
  );
};

export default SignIn
