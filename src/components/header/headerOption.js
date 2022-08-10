import { Avatar } from '@mui/material';
import React from 'react';
import './headerOption.css';

function HeaderOption({avatar, Icon ,title}) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className="headerOption__icon"/>}
      {avatar && <Avatar className='avatar' src ={avatar}/>}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption;
