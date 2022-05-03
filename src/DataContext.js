import React, { createContext, useState} from 'react'

export const MyContext = createContext()

export default function DataContext({children, ...props}) {
const [myData, setMyData] = useState({})

const setValues = (values) => {
    setMyData( prevData => ({
        ...prevData,
        ...values
    }))
}
  return (
    <MyContext.Provider value={{myData,setValues}} {...props}>
        {
            children
        }
    </MyContext.Provider>
  )
}


