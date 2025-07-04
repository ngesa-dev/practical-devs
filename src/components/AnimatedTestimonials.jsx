// components/AnimatedTestimonials.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TestimonialCard from './TestimonialCard'
import { testimonials } from '../constants'



const AnimatedTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000) // 4 seconds per testimonial
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='w-full h-72 flex items-center justify-center relative'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className='absolute'
        >
          <TestimonialCard {...testimonials[currentIndex]} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AnimatedTestimonials
