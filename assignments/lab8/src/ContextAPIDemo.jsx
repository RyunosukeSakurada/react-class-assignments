import {createContext, useContext, useState} from 'react'

const MyContext = createContext()

function MyProvider(props){
  const [data, setData] = useState("some init data")
  
  return(
    <MyContext.Provider value={ {data, setData} }>
        {props.children}
    </MyContext.Provider>
  )
}

function ChildComponent(){
  const {data} = useContext(MyContext)

    return(
      <>
        <p>Data from context: {data} </p>
      </>
    )
}

function contextAPIDemo() {
  const data = "hi"

  return (
    <MyProvider>
      <ChildComponent data={data}/>
    </MyProvider>
  )
}

export default contextAPIDemo
