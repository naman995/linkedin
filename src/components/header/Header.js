import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          className="icon"
          src="https://vsrv1assets4.gtp.com.au/clients/g/gtpicommerce/largeimages/linkedinheader-1.jpg"
          alt="linkedIn icon"
        />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="Search" placeholder="Search" />
      </div>
      <div className="header_right">
        
      </div>
    </div>
  );
}

export default Header;
