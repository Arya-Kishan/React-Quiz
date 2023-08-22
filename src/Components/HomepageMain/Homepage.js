import './Homepage.css'
import Categories from '../Data'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../AppContext'
import { useContext } from 'react'

export default function Homepage() {

    const Navigate = useNavigate()
    const { score, setScore } = useContext(Context)


    const handleClick = (a) => {
        setScore(0)
        Navigate(`/quiz/${a}`)
    }
    return (
        <>
            <section className='category'>
                <h2 className='category_heading'>CHOOSE A CATEGORY</h2>
                <div className='category_box'>
                    {Categories.map((e, i) => {
                        return <div className='category_name' key={i} onClick={() => { handleClick(e.value) }}>
                            <img src={e.img} alt=""/> <span>{e.category}</span>
                        </div>
                    })}
                </div>
            </section>
        </>
    )
}
