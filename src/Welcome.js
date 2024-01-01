import React from 'react'
import eye from'./assets/eye.png'
import { useNavigate, useLocation } from 'react-router-dom'

const Welcome = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const user = location.state?.data
  
  function handleClick (){
     navigate('/tests')
  }
  return (
   <div className='container'>
      <header>
        <img src={eye} alt="irisAi" />
      </header>

      <div style={{marginTop: '50px'}} className='center'>
        <div>

          <section>
            
            <h2 className='welcome' >Welcome <span>{user}</span> , to IrisAI</h2>
            <p className='p' >Iris AI is an expert system that helps you diagnose some select eye defects you may have.</p>
            
          </section>

          <section className="form">

            <button className='btn' onClick={handleClick} >Start Diagnosis</button>
          </section>

        </div>
      </div>

    </div>
  )
}

export default Welcome