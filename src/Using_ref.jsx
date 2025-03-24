import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Using_ref() {
  const [color, setColor] = useState('');
  const ref = useRef();

  function bgcolor() {
    setColor(ref.current.value); 
  }

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="w-200px d-flex justify-center bottom-12 inset-x-0">
        <input
          type="text"
          ref={ref} 
          name="changeColor"
          className="border-3 border-black rounded-md p-1 bg-white text-black" 
          placeholder="Enter color or HEX"
        />
        <button
          onClick={bgcolor}
          className="bg-green-500 m-10 border-black rounded-md border-2 cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Using_ref;
