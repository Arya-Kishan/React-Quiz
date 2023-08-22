import React, { useContext } from 'react'
import { Context } from '../AppContext'
import { useNavigate } from 'react-router-dom'

export default function Finish() {
  const { score } = useContext(Context)
  const Navigate = useNavigate()
  const handleQuit = () => {
    Navigate("/")
  }
  return (
    <>
    <h1 style={{backgroundColor : "blue" , textAlign : "center" , color : "white" , fontSize : "50px"}}>RESULTS</h1>
      <section className='finish'>
        <div className="finish_img"></div>
        <div>
          <h1>Your Score : {score}</h1>
          <button onClick={handleQuit}>HOME</button>
        </div>
      </section>
    </>
  )
}
