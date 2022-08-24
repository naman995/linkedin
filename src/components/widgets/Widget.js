import React from "react";
import "./widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widget() {
  const newsArtivle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widget_articleLeft">
        <FiberManualRecordIcon size={30} />
      </div>
      <div className="widget_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widget">
      <div className="widgets__header">
        <div>
          <InfoIcon size={20} />
        </div>
        <div >
          <h2>LinkedIn News</h2>
        </div>
      </div>
      <div>

      {newsArtivle("React is back", "Top news - 9099 readers")}
      </div>
    </div>
  );
}

export default Widget;
