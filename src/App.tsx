import { useState } from 'react'
import './App.css'

function App() {
  const [ fileChanged, setFileChanged ] = useState(false);
  const handleFileChange = () => {
    setFileChanged(true);
  }


  return (
    <div  className='flex justify-center pt-[25%]'>
    <input type="file" placeholder='Please put your file here' onClick={handleFileChange} className=''/>
    </div>
  )
}

export default App
