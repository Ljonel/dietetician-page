import react from "react"
import "./Sidebar.scss";
import React from "react";
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { MdOutlineHomeRepairService } from 'react-icons/md'
const Sidebar = [
    {
        title: 'Strona główna',
        path: '/',
        icon: <AiOutlineHome className="sidebar-icons" />,
        cname: 'sidebar-text'
    },
    {
        title: 'O mnie',
        path: '/',
        icon: <SiAboutdotme className="sidebar-icons" />,
        cname: 'sidebar-text'
    },
    {
        title: 'Usługi',
        path: '/',
        icon: <MdOutlineHomeRepairService className="sidebar-icons" />,
        cname: 'sidebar-text'
    },
    {
        title: 'Kontakt',
        path: '/',
        icon: <AiOutlineMail className="sidebar-icons" />,
        cname: 'sidebar-text'
    },
]



export default Sidebar;