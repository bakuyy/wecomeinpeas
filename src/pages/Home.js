import React from 'react'
import Fruit from '../images/fruit.png'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div>
        <div>
            <div className='flex justify-center items-center text-left h-full  font-mono display-inline'>
                    <h1 className='text-left text-8xl ml-24 text-green rounded-xl mt-40 mb-2 mr-96 tracking-wide shadow-xl '><b>GreenCart</b></h1>
                    <img className='w-96 shadow-2xl mt-24'src={Fruit} />
            </div>
            <div className='flex text-left mb-8 ml-48 '>
            <Typewriter 
                options={{
                    strings: ["'Transform your plate, transform the world!'"],
                    autoStart: true,
                    loop: true,
                }}/>
            </div>
        <Link to='/problem'>
          <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className=' ml-44 mb-32 flex text-left px-14 mb-20 rounded-xl z-30 bg-[#1D4E6B] py-4 text-white text-md'> Launch It! </motion.button>
          </Link>
        </div>

        <div>
            <footer className="absolute border-[#0f3615] pt-52 border-solid border-2 flex flex-col justify-center bg-[#0f3615] min-w-full "></footer>
        </div>
    </div>
  )
}

export default Home
