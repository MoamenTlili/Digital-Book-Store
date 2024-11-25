import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'  
import MyFooter  from './components/MyFooter'
function App() {
  const [count, setCount] = useState(0)
//<div className='min-h-screen'> ensures that the element has a minimum height equal to the height of the screen. 
  return (
    <>
    <Navbar/>

    <div className='min-h-screen'>
      <Outlet/>
    </div>
    <MyFooter/>

    </>
  )
}

export default App
