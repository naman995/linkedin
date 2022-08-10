
import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    const recentItems =(topic) => (

        <div className="sidebar__recentItems">
            <span className='sidebar__hash'># </span>
            <p>{topic}</p>
        </div>
    )
    
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.bing.com/th?id=OIP.cPkXV7JA7ZbOOqTn6Od4yAHaEo&w=184&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt=""
        />

        <Avatar className="sidebar__avatar" />

        <h2>Naman</h2>
        <h4>Lorem ipsum dolor, sit amet consectetu</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p className="sidebar__view">Who viewed your profile</p>
          <p className="sidebar__statnumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p className="sidebar__view">Total views on posts</p>
          <p className="sidebar__statnumber">8,543</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems(" Reactjs")}
        {recentItems(" Software developer")}
        {recentItems(" Full stack")}
        {recentItems(" reactjs")}
        {recentItems(" reactjs")}
      </div>
    </div>
  );
}

export default Sidebar;
