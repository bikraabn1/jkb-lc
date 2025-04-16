import { useState } from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'

const App = () => {

  const [names, setNames] = useState(
    ['Adit1', 'Adit2', 'Adit3']
  )
  const [name, setName] = useState('')

  const addName = (e) => {
    e.preventDefault()
    if (name.trim() === '') return
    setNames([...names, name])
    setName('')
  }

  const onDelete = (name) => {
    setNames(names.filter((item) => item !== name))
  }

  const clear = () => {
    setNames([])
  }


  
  return (
    <>
      <form onSubmit={addName}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        <br />
        <button type='submit'>Add Name</button>
        <br />
        <button onClick={clear}>Clear</button>
      </form>

      {
        names.length === 0 
        ? 
        <p>No names added</p>
        :
        names.map((item, index) => <HelloWorld key={index} nama={item} onDelete={() => onDelete(item)}/>)
      }

    </>
  )
}

export default App
