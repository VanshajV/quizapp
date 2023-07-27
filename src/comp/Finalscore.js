import React from 'react'

function finalscore(props) {
  return (
    <div className=''>
        <h1 className="text-xl">Your Score:</h1>
        <span>{props.title}</span>
        <h1 className='text-xl'>Total Score: </h1>
        <span>{props.title2}</span>
        <a className='block  mx-10  mt-2 text-center bg-green-300 border-black border-2 rounded-sm' href="/">Try Again</a>
    </div>
  )
}

export default finalscore