import React from 'react'

function Title(props) {
  return (
    <>
      {/* title */}
      <div className="title mt-10">
        <h2 className={`text-white text-2xl sm:text-5xl font-bold uppercase ${props.size}`}>{props.title} <span className="w-10 h-4 bg-green-400 rounded-full inline-block"></span></h2>
      </div>
    </>
  )
}

export default Title
