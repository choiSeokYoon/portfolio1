import { useState } from 'react'
import './Skills.scss'
import { frontSkills, backSkills } from '../../../Data'

export default function Skills() {
  const [active, setActive] = useState(1)
  return (
    <div className='container' id='skills'>
      <div className='title'>
        <h1>Skills</h1>
      </div>
      <div className='select'>
        <button 
          onClick={()=>{setActive(1)}}
          className={active === 1 ? "active" : "" }
        >front</button>
        <button
          onClick={()=>{setActive(2)}}
          className={active === 2 ? "active" : "" }
        >back</button>
      </div>
      <div className='skills'>
        {active === 1 && frontSkills.map((front, idx)=>(
          <div className='skill_icon' key={idx}>{front}</div>
        ))}
      </div>
      <div className='skills'>
        {active === 2 && backSkills.map((back, idx)=>(
          <div className='skill_icon' key={idx}>{back}</div>
        ))}
      </div>
    </div>
  )
}
