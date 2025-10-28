import React from 'react'

const RequestAssessment = ({isopen, onClose}) => {
    if (!isopen) return null
  return (
    <div onClick={onClose} className='fixed inset-0 z-50 flex items-center justify-center text-white text-5xl bg-black/50 p-4'>
      Hello World
    </div>
  )
}

export default RequestAssessment
