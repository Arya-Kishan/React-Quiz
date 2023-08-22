import './Quizpage.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Question from '../QuestionMain/Question'
import Ready from '../ReadyMain/Ready'

export default function Quizpage() {

  const { category } = useParams()

  const [fetch_cont, setFetch_cont] = useState()


  const api = async () => {
    let response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`)
    response = await response.json()
    setFetch_cont(response.results)
  }

  useEffect(() => {
    api()
  }, [])
  return (
    <>
      <section className='quiz_sec'>
        <h1>QUIZ</h1>
        <Ready />
        {fetch_cont && <Question fetch_cont={fetch_cont} />}
      </section>
    </>
  )
}
