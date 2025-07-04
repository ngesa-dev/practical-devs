import React from 'react'

const TestimonialCard = ({ image, name, title, comment }) => {
  return (
    <div className='w-80 h-64 bg-blue-50 p-6 rounded-xl shadow-lg text-center flex flex-col justify-start'>
      {/* Profile Image */}
      <div className='w-14 h-14 mx-auto mb-2 rounded-full bg-blue-200 overflow-hidden'>
        {image ? <img src={image} alt={name} className='w-full h-full object-cover' /> : null}
      </div>

      {/* Name & Title */}
      <h3 className='text-blue-800 font-semibold text-base'>{name}</h3>
      <p className='text-blue-600 text-xs mb-2'>{title}</p>

      {/* Comment */}
      <p className='text-blue-700 text-sm italic px-2 line-clamp-4'>
        "{comment}"
      </p>
    </div>
  )
}

export default TestimonialCard
