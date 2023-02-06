import portfolioImg from '../../../assets/201812101719791976_2.jpg'
import {motion} from 'framer-motion'
import { introductions }from '../../../Data'
import './About.scss'

export default function About() {
  return (
    <div className='container' id='about'>
      
      <motion.div
        initial={{opacity:0}}
        whileInView={{y:[50, 0], opacity:1}}
        className='title'>
        <h1>About Me</h1>
      </motion.div>
      <div className='about_container'>
        <div className='square1'></div>
        <div className='square2'></div>
        <motion.div 
          initial={{opacity: 0}}
          whileInView={{x:[-250, 0], opacity:1}}
          transition={{duration:.8}}
          className='about_left'>
          <img src={portfolioImg} alt="portfolioImg" />
        </motion.div>
        <div className='about_right'>
          <motion.p 
            initial={{opacity: 0, x:0}} 
            whileInView={{x:[250, 0], opacity:1}}
            transition={{duration:1.5}}
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis minus nisi fugit est dicta cum mollitia. Sed 
            eaque laboriosam officiis laborum similique aperiam hic ut! 
            Necessitatibus maxime natus laudantium ipsa.
          </motion.p>
        
            <div className='introduction'>
            {introductions.map(introduction =>(
              <motion.div 
                initial={{opacity: 0}}
                whileInView={{y:[100, 0], opacity:1}}
                transition={{duration:1.5}}
                className='introduction_info' 
                key={introduction.id}>
                <span className='introduction_key'>{introduction.icon} {introduction.key}</span>
                <span className='introduction_text'>{introduction.text}</span>
              </motion.div>
              ))}
            </div>
            
         
        </div>
      </div>
    </div>
  )
}
