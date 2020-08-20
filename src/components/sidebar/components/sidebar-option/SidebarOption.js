

import React from 'react'
import './sidebar-option.css'
const SidebarOption = ({Icon,title}) => {
  return (
    <div className="sidebar_option">
       <Icon/>
       <h2 className="sidebar_option_title">{title}</h2>
    </div>
  )
}

export default SidebarOption
