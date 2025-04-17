import { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import Navbar from './components/Navbar'

const App = () => {
  const [names, setNames] = useState([])
  const [name, setName] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    if (name.trim() === '') {
      alert('Name cannot be empty')
      return
    }
    setNames([...names, name])
    setName('')
  }

  const handleDelete = (index) => {
    setNames(names.filter((_, i) => i !== index))
  }

  return (
    <>
      <Navbar />
      <div className='flex min-h-screen flex-col gap-3 p-3 items-center'>
        <form onSubmit={handleAdd} className='mt-10'>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border-2 h-full py-3 px-2 w-2xl rounded me-3' />
          <button type="submit" className='bg-blue-500 p-3 rounded text-white'>Add</button>
        </form>
        <div className='p-5 gap-3 flex flex-col w-2xl'>
          {
          names.map((item, index) =>
            <HelloWorld nama={item} key={index} onDelete={() => handleDelete(index)} />
          )
          }
        </div>
        
      </div>
      
    </>
  )
}

export default App
