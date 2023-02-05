import { projects } from '../../../Data'
import {FiGithub, FiEye} from 'react-icons/fi'
import { motion } from 'framer-motion'
import './Portfolio.scss'

export default function Portfolio() {
  
  return (
    <div className='container' id='portfolio'>
      <motion.div 
      initial={{opacity:0}} 
      whileInView={{y:[-50,0], opacity:1}} 
      className='title'>
        <h1>Project</h1>
      </motion.div>
      <div className='projectImgs'>
        {projects.map((project)=>(
          <div className='projectImg' key={project.id}>
            <img src={project.img} alt="프로젝트 이미지" />
            <motion.div className="hoverLayer"
              initial={{opacity:0}}
              whileHover={{opacity:1}}
              transition={{duration: 0.3}}
            >

              <motion.a href={project.git}
                whileInView={{rotate: [0,1]}}
                whileHover={{scale: [1,1.5], rotate: 360}}
                transition={{duration:0.5}}
              >
                <FiGithub/>
              </motion.a>
              <motion.a href={project.site}
              whileInView={{rotate: [0,1]}}
              whileHover={{scale: [1,1.5], rotate: 360}}
              transition={{duration:0.5}}
              ><FiEye/></motion.a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
