import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function Element_by_id() {
  const [color, setColor] = useState("")
  const [input, setInput] = useState("")

  function bgcolor(){
    const colorValue = document.getElementById('changeColor').value
    setColor(colorValue)
  }  

  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className='w-200px d-flex justify-center bottom-12 inset-x-0'>
        <input 
          type="text" 
          id='changeColor'
          name='changeColor'
          className='border-3 border-black rounded-md p-1 bg-white color-black '
        />
        <button onClick={bgcolor} className='bg-green-500 m-10 border-black rounded-md border-2 cursor-pointer'> Submit</button>
      </div>
    </div>
  )
}

export default Element_by_id
