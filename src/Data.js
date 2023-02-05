import {AiOutlineUser, AiTwotonePhone, AiOutlineMail} from 'react-icons/ai'
import {FaBirthdayCake, FaHtml5, FaCss3, FaSass, FaReact,FaVuejs,FaNode } from 'react-icons/fa' 
import {SiJavascript, SiRedux, SiExpress,SiMongodb, SiJquery } from 'react-icons/si' 

export const frontSkills = [<FaHtml5/>, <FaCss3/>,<FaSass/>,<SiJavascript/>,<SiJquery/>,<FaReact/>,<SiRedux/> ]
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

