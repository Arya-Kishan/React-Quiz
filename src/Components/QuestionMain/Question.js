import './Question.css'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../AppContext'

export default function Question({ fetch_cont }) {

    console.log(fetch_cont)

    const { score, setScore } = useContext(Context)
    const Navigate = useNavigate()

    const [num, setNum] = useState(0)
    const [question, setQuestion] = useState("")
    const [options, setOptions] = useState([])
    const [answer, setAnswer] = useState()
    const [next, setNext] = useState(true)
    const [finish, setFinish] = useState(false)
    const [select, setSelect] = useState(0)
    const [error, setError] = useState("")
    const [showerror, setShowerror] = useState(false)

    const shuffle = (opt1, opt2) => {
        const arr = [opt1, ...opt2]
        return arr.sort(() => Math.random() - 0.5)
    }

    const setEvery = () => {
        setSelect(0)
        setOptions(shuffle(fetch_cont[`${num}`]?.correct_answer, fetch_cont[`${num}`]?.incorrect_answers))
        setQuestion(fetch_cont[`${num}`]?.question)
        setAnswer(fetch_cont[`${num}`]?.correct_answer)
    }

    const handleCheck = (e) => {
        setSelect(select + 1)
        if (e.target.innerText === answer) {
            e.target.className = "green"
            setScore(score + 1)
        } else {
            e.target.className = "red"
        }

    }

    const handleNext = () => {
        if (select > 0) {
            let btn = document.getElementsByTagName('button')
            btn = Array.from(btn)
            btn.forEach((element) => {
                element.className = " "
            });
            if (num === 8) {
                setNext(false)
                setFinish(true)
            }
            setNum(num + 1)
        } else {
            console.log("please select")
            setShowerror(true)
            setError("SELECT ATLEAST ONCE")
            setTimeout(() => {
                setShowerror(false)
            }, 1000);
        }
    }

    const handleReset = () => {
        setFinish(false)
        setNext(true)
        let btn = document.getElementsByTagName('button')
        btn = Array.from(btn)
        btn.forEach((element) => {
            element.className = " "
        });

        setScore(0)
        setNum(0)
    }

    const handleFinish = () => {
        Navigate('/finish')
    }

    useEffect(() => {
        setEvery()
    }, [num])

    return (
        <div>
            <section className='quiz_section'>
                <div className="quiz_box">
                    <div className='quiz_box1'></div>
                    <div className='quiz_box2'>
                        <div className="quiz_questions">
                            <p><b>{num + 1}. {question}</b></p>
                        </div>
                        <div className="quiz_options">
                            {options?.map((e, i) => {
                                return <button key={i} onClick={handleCheck}>{e}</button>
                            })}
                        </div>
                        <div className="quiz_nav">
                            <button onClick={handleReset}>Reset</button>
                            {next && <button onClick={handleNext}>Next</button>
                            }
                            {showerror && <div className="select">{error}</div>}
                            {finish && <button onClick={handleFinish}>Finish</button>}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
