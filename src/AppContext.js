import React, { createContext, useState } from 'react'
const Context = createContext()

export default function AppContext({children}) {

    const [score,setScore] = useState(0)
    const [name,setName] = useState()

  return (
    <div>
      <Context.Provider value={{score,setScore,name,setName}}>
        {children}
      </Context.Provider>
    </div>
  )
}

export {Context};