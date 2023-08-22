import "./Welcome.css"
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../AppContext'
import Welcomepic from '../../welcome.svg'
import logo from '../logo.png'
import hide2 from '../hide2.gif'

export default function Welcome() {
  const Navigate = useNavigate()
  const [input, setInput] = useState("")
  const { setName } = useContext(Context)
  const [gif, setGif] = useState(true)

  setTimeout(() => {
    setGif(false)
  }, 6500);

  const handleClick = () => {
    if (input) {
      Navigate("/homepage")
    } else {
      let name = document.querySelector(".input_name")
      name.className = "blank"
      setTimeout(() => {
        name.className = "input_name"
      }, 1000);
    }
  }

  const handleInput = (e) => {
    setInput(e.target.value)
    setName(e.target.value)
  }
  return (
    <div>
      <section className='welcome'>
        <section className="welcome_main">

          <div className="welcome_box1">
            <img src={Welcomepic} alt="" />
          </div>

          <div className='welcome_box2'>

            <h1><img src={logo} alt="" />QUIZ</h1>

            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel distinctio dolorem similique accusantium corrupti voluptatum earum!?</div>

            <div className="welcome_name">
              <div><input className='input_name' type="text" placeholder='Your Name' value={input} onChange={handleInput} /></div>
              <button onClick={handleClick}>Play</button>
            </div>

          </div>
        </section>
      </section>

      {gif && <div className="hide2"><img src={hide2} alt="" /></div>}

    </div>
  )
}
