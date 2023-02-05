import portfolioImg from '../../../assets/201812101719791976_2.jpg'
import { introductions }from '../../../Data'
import './About.scss'

export default function About() {
  return (
    <div className='container' id='about'>
      <div className='title'>
        <h1>About Me</h1>
      </div>
      <div className='about_container'>
        <div className='about_left'>
          <img src={portfolioImg} alt="portfolioImg" />
        </div>
        <div className='about_right'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis minus nisi fugit est dicta cum mollitia. Sed 
            eaque laboriosam officiis laborum similique aperiam hic ut! 
            Necessitatibus maxime natus laudantium ipsa.
          </p>
        
            <div className='introduction'>
            {introductions.map(introduction =>(
              <div className='introduction_info' key={introduction.id}>
                <span className='introduction_key'>{introduction.icon} {introduction.key}</span>
                <span className='introduction_text'>{introduction.text}</span>
              </div>
              ))}
            </div>
            
         
        </div>
      </div>
    </div>
  )
}
