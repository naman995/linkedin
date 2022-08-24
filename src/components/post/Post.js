import { Avatar } from "@mui/material";
import React ,{forwardRef}from "react";
import "./Post.css";
import InputOption from "../feed/InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Post = forwardRef (({ name, description, message, photoUrl },ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
            <h2>{name}</h2>
              <p>{description}</p>
        </div>
      </div>
        <div className="message__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <InputOption Icon ={ThumbUpOffAltIcon} title="Like" color="gray"/>
            <InputOption Icon ={ChatOutlinedIcon} title="Comment" color="gray"/>
            <InputOption Icon ={ShareOutlinedIcon} title="Share" color="gray"/>
            <InputOption Icon ={SendOutlinedIcon} title="Sent" color="gray"/>
        </div>
    </div>
  );
})

export default Post;
