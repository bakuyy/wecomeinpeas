import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Problem = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 1.5}}>
    <div className="text-white">
      <div className="mt-20 mr-10 ml-10 p-24 bg-[#25642E] ">
      <h1 className="text-2xl font-bold ">Carbon emission/GreenHouse levels are at an all-time high</h1>
      <h2 className="text-md">Climate change could be irreversible by 2030</h2>
      </div>

      <div className="mt-20 mr-10 ml-10 p-24 bg-[#25642E] ">
      <h1 className="text-2xl font-bold "> Without major action to reduce emissions, global temperature is on track to rise by 2.5 °C to 4.5 °C (4.5 °F to 8 °F) by 2100 </h1>
      <h2 className="text-md"> Mass Extinction, Natural Disasters, Significant decrease in the quality of life</h2>
      </div>

      <div className="mt-20 mr-10 ml-10 p-24 bg-[#25642E] ">
      <h1 className="text-2xl font-bold ">Causes: the burning of fossil fuels, agriculture, Transportation</h1>
      <h2 className="text-md">Climate change could be irreversible by 2030</h2>
      </div>
    </div>
    <Link to='/main'>
          <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className=' ml-12  mb-12 mt-12 flex text-left px-14 mb-20 rounded-xl z-30 bg-[#1D4E6B] py-4 text-white text-md'> What Now? </motion.button>
          </Link>
    </motion.div>
    
    
  )
}

export default Problem
