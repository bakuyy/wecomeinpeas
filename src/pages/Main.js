import React from 'react'
import BurgerO from '../images/burgerO.png'
import BurgerT from '../images/burgerT.png'
import BurgerTh from '../images/burgerTh.png'
import {motion} from 'framer-motion'

const Main = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 1.5}}>
    <div className="p-10 ">
      <img className="p-12 shadow-xl"src={BurgerO}/>      
      <img className="p-12 shadow-xl"src={BurgerT}/>
      <img className="p-12 shadow-xl"src={BurgerTh}/>
    </div>
    </motion.div>
  )
}

export default Main
