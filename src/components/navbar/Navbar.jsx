import './Navbar.scss'
import { motion } from "framer-motion"
import { navLinks } from '../../Data'
import { CgMenuGridR } from 'react-icons/cg'
import { HiX } from 'react-icons/hi'
import { useState } from 'react';

export default function Navbar() {
  const [toggle , setToggle] = useState(false)
  const [isOn, setIsOn] = useState(false);

  const menuVariants = {
    hidden: {
        scale: 0
    },
    visible: {
        scale: 50,
        transition: {
            type: "tween",
            duration: 0.5,
        }
    }
}
const navLinkVariants = {
    hidden:{
        display:"none",
        opacity: 0,
    },
    visible: {
        opacity:1,
        y: -30,
        transition:{
            delay:0.7,
        }
    }
}


  const toggleSwitch = () => setIsOn(!isOn);



  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
return (
  <div className='header'>
    <div className='nav_container'>
      <div className='logo'>
        <h3>W</h3>
      </div>
      <ul className='nav_links'>
        {navLinks.map((navLink,idx)=>(
          <li key={idx}>
            <a href={`#${navLink}`}>{navLink}</a>
          </li>
        ))}
      </ul>
      <div className='switch' onClick={toggleSwitch} data-isOn={isOn}>
        <motion.div className='handle' layout transition={spring}/>
      </div>
      <div className='menu'>
        <CgMenuGridR onClick={()=>{
          setToggle(true)
        }}/>
        <motion.div
          className='close_menu'
          variants={menuVariants}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        >
        </motion.div>
        <motion.div className='menuX'
          variants={navLinkVariants}
          animate={toggle ? "visible" : "hidden"}
        >
          <HiX onClick={()=>{setToggle(false)}}/>
          {navLinks.map((navLink,idx)=>{
            return (
            <li key={idx}>
              <a href={`#${navLink}`} onClick={()=>{
              setToggle(false)
            }}>{navLink}</a>
            </li>
        )
        })}
        </motion.div>
        
      </div>
    </div>
    
  </div>
  )
}
