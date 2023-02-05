import {AiOutlineUser, AiTwotonePhone, AiOutlineMail} from 'react-icons/ai'
import {FaBirthdayCake, FaHtml5, FaCss3, FaSass, FaReact,FaVuejs,FaNode } from 'react-icons/fa' 
import {SiJavascript, SiRedux, SiExpress,SiMongodb, SiJquery } from 'react-icons/si' 
import projectImg1 from './assets/project1.png'
export const frontSkills = [<FaHtml5/>, <FaCss3/>,<FaSass/>,<SiJavascript/>,<SiJquery/>,<FaReact/>,<SiRedux/>,<FaVuejs/> ]
export const backSkills = [<FaNode/>,<SiExpress/>,<SiMongodb/>]

export const navLinks = ["home","about","skills","portfolio","contant"]

export const introductions = [
    {
        id:1,
        icon:<AiOutlineUser/>,
        key:"Name",
        text:"최석윤"
        
    },
    {
        id:2,
        icon:<FaBirthdayCake/>,
        key:"Birth",
        text:"1995.06.06"
    },
    {
        id:3,
        icon:<AiTwotonePhone/>,
        key:"Phone",
        text:"010-7469-6008"
    },
    {
        id:4,
        icon:<AiOutlineMail/>,
        key:"Email",
        text:"ctd0606@naver.com"
    },
]

export const projects = [
    {
        id:1,
        img: projectImg1,
        name: "project1",
        git:"https://github.com/choiSeokYoon/shopProject",
        site:"https://choiseokyoon.github.io/shopProject/"


    },
    {
        id:2,
        img: projectImg1,
        name: "project1",
        git:"https://github.com/choiSeokYoon/shopProject",
        site:"https://choiseokyoon.github.io/shopProject/"
    },
    {
        id:3,
        img: projectImg1,
        name: "project1",
        git:"https://github.com/choiSeokYoon/shopProject",
        site:"https://choiseokyoon.github.io/shopProject/"
    },
    {
        id:4,
        img: projectImg1,
        name: "project1",
        git:"https://github.com/choiSeokYoon/shopProject",
        site:"https://choiseokyoon.github.io/shopProject/"
    }
]

