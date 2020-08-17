import React from "react";
import "./Video.css";
import Avatar from "@material-ui/core/Avatar";

function Video({ thumbnail, avatar, title, channel, views, timestamp }) {
  return (
    <div className="videoCard">
      <img src={thumbnail} alt="thumbnail" className="videoCard__thumbnail" />
      <div className="videoCard__info">
        <Avatar className="videoCard__thumb" src={avatar} alt="avatar" />
        <div className="videoCard__details">
          <h4 className="videCard__vidName">{title}</h4>
          <p className="videoCard__channel">{channel}</p>
          <p className="videoCard__views">
            {views}
            &nbsp; &#8226; &nbsp;
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
