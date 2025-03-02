import React from 'react'

const Photocard = ({ image, alt }) => {
  return (
    <img src={image} alt={alt} className='h-115 rounded-xl'/>
  )
}

export default Photocard