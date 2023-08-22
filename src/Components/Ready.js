import React, { useContext, useRef } from 'react'
import {Context} from '../AppContext'

export default function Ready() {
  const body = useRef()
  const {name} = useContext(Context)

  const handleStart = (e) => {
    body.current.className = "ready_sec remove"
  }

  return (
    <>
      <section ref={body} className='ready_sec'>
        <div>

          <div>
            <div className="ready_img"><img src="welcome.svg" alt="" /></div>
          </div>

          <div className='ready_box2'>
            <div><h1>Hello {name}</h1></div>
            <p>READY FOR THE QUIZ</p>
            <button onClick={handleStart}>Start</button>
          </div>

        </div>
      </section>
    </>
  )
}
