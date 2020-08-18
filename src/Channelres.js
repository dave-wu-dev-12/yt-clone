import React from "react";
import "./Channelres.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Avatar from "@material-ui/core/Avatar";

function Channelres({ image, channelName, subs, videocount, summary }) {
  return (
    <div className="channel">
      <Avatar className="channel__image" src={image} alt="channel image" />
      <div className="channel__info">
        <div className="channel__text">
          <h3 className="channel__title">
            <p className="channel__name">{channelName}</p>
            <CheckCircleOutlineIcon />
          </h3>
          <div className="channel__nums">
            <p className="channel__views">
              {subs} subscribers &nbsp; &#8226; &nbsp; {videocount} videos
            </p>
            <p>{summary}</p>
          </div>
        </div>
        <button className="channel__sub">subscribe</button>
      </div>
    </div>
  );
}

export default Channelres;
