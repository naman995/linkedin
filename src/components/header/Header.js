import React from "react";
import "./header.css";
import HeaderOption from "./headerOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          className="icon"
          src="https://vsrv1assets4.gtp.com.au/clients/g/gtpicommerce/largeimages/linkedinheader-1.jpg"
          alt="linkedIn icon"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="Search" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" className="header__icons" />
        <HeaderOption
          Icon={SupervisorAccountIcon}
          title="MyNetwork"
          className="header__icons"
        />
        <HeaderOption Icon={WorkOutlineIcon} title="Jobs" />
        <HeaderOption Icon={MessageIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption avatar="https://th.bing.com/th/id/OIP.ZLBpRk7WpBBVqHclmK8ndwHaH_?pid=ImgDet&rs=1" title ='me' />
      </div>
    </div>
  );
}

export default Header;
