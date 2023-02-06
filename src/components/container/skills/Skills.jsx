import { useState } from 'react'
import { motion } from 'framer-motion'
import './Skills.scss'
import { frontSkills, backSkills } from '../../../Data'

export default function Skills() {
  const [active, setActive] = useState(1)
  return (
    <div className='container' id='skills'>
      
      <motion.div 
      initial={{opacity:0}} 
      whileInView={{y:[50,0], opacity:1}} 
      className='title'>
        <h1>Skill</h1>
        
      </motion.div>
      <div className='skill_container'>
        <div className='square3'></div>
        <div className='square4'></div>
        <motion.div initial={{opacity:0}}
          whileInView={{y: [50, 0], opacity: 1}}
          className='select'>
          <button 
            onClick={()=>{setActive(1)}}
            className={active === 1 ? "active" : "" }
          >front</button>
          <button
            onClick={()=>{setActive(2)}}
            className={active === 2 ? "active" : "" }
          >back</button>
        </motion.div>
        <motion.div 
          initial={{opacity:0}}
          whileInView={{y: [50, 0], opacity: 1}}
          transition={{duration:1}}
          className='skills'>
          {active === 1 && frontSkills.map((front, idx)=>(
            <div className='skill_icon' key={idx}>{front}</div>
          ))}
        </motion.div>
        <motion.div 
          initial={{opacity:0}}
          whileInView={{y: [50, 0], opacity: 1}}
          transition={{duration:1}}
          className='skills'>
          {active === 2 && backSkills.map((back, idx)=>(
            <div className='skill_icon' key={idx}>{back}</div>
          ))}
        </motion.div>
      </div>
     
    </div>
  )
}
