import React from 'react'
import Navbar from './Navbar.jsx'

const Home = () => {
  return (
    <>  
      <div>
        <div className='flex flex-col bg-white drop-shadow-2xl h-screen w-80 box-border p-5 rounded-r-xl'>
          <h2 className= "text-2xl font-poppins font-semibold">🧠 Second Brain</h2>
          <Navbar/>
        </div>


      </div>
    </>
  )
}

export default Home