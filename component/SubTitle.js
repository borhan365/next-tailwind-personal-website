import React from 'react'

function SubTitle(props) {
  return (
    <>
      <div className="title mt-10">
        <h2 className="text-white text-2xl font-semibold uppercase">{props.title} <span className="w-10 h-4 bg-green-500 rounded-full inline-block"></span></h2>
      </div>
    </>
  )
}

export default SubTitle
