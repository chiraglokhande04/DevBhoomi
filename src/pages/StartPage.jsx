import React from 'react'
import { Link } from 'react-router-dom'

const StartPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-y-4'>
      <img 
        src='https://devbhoomielevator.com/wp-content/uploads/2024/03/loader.gif' 
        alt='Loading...' 
        className='w-auto h-auto' 
      />
      <Link to='/home'>
        <button className='p-3 bg-blue-400 text-white rounded-lg'>Go to Home</button>
      </Link>
    </div>
  )
}

export default StartPage;