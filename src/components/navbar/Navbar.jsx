import './Navbar.scss'
import { motion } from "framer-motion"
import {navLinks} from '../../Data'
import { useState } from 'react';

export default function Navbar() {
  const [isOn, setIsOn] = useState(false);

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
                    <a href={`${navLink}`}>{navLink}</a>
                  </li>
                ))}
            </ul>
            <div className='switch' onClick={toggleSwitch} data-isOn={isOn}>
              <motion.div className='handle' layout transition={spring}/>
            </div>
        </div>
      
    </div>
  )
}
