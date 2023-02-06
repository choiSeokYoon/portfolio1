import './Home.scss'
import {RxPinBottom} from 'react-icons/rx'
import profileImg from '../../../assets/201812101719791976_2.jpg'

export default function Home() {
  return (
    <div className='container' id='home'>
      
      <div className='profile_text'>
        <h3 className='name'>
        Hi, I'm <span>Seokyun Choi's</span>
        </h3>
        <span className='job'>Web Front-end Developer</span>
      </div>
      <div className='view_btn'>
        <p>scroll to view more</p>
        <RxPinBottom/>
      </div>
    </div>
  )
}
