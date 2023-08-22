import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Context} from '../AppContext'
import Welcomepic from '../welcome.svg'
import logo from './logo.png'

export default function Welcome() {
  const Navigate = useNavigate()
  const [input,setInput] = useState()
  const {setName} = useContext(Context)

  const handleClick = () => {
    Navigate("/homepage")
  }

  const handleInput = (e)=>{
    setInput(e.target.value)
    setName(e.target.value)
  }
  return (
    <div>
      <section className='welcome'>
        <section className="welcome_main">

          <div className="welcome_box1">
            <img src={Welcomepic} alt="" />
            {/* <img src="welcome2.svg" alt="" /> */}
          </div>

          <div className='welcome_box2'>
            <h1><img src={logo} alt="" srcset="" />QUIZ</h1>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel distinctio dolorem similique accusantium corrupti voluptatum earum!?</div>
            <div  className="welcome_name">
              <div><input type="text" placeholder='Your Name' value={input} onChange={handleInput} /></div>
              <button onClick={handleClick}>Play</button>
            </div>
          </div>

        </section>
      </section>
    </div>
  )
}
