import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex flex-col text-[#8a8c90] text-xl font-poppins ">
      <Link to="/tweets">
        <h2 className="mt-3 hover:text-[#2f2f30]">Tweets</h2>
      </Link>
      <Link to="/videos">
        <h2 className='mt-3 hover:text-[#2f2f30]'>Videos</h2>
      </Link>
      <Link to="/documents">
        <h2 className='mt-3 hover:text-[#2f2f30]'>Documents</h2>
      </Link>
      <Link to="/links ">
        <h2 className='mt-3 hover:text-[#2f2f30]'>Links</h2>
      </Link>
      <Link to="/tags">
        <h2 className='mt-3 hover:text-[#2f2f30]'>Tags</h2>
      </Link>
    </div>
  )
}

export default Navbar