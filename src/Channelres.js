import React from "react";
import "./Channelres.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function Channelres({ channelName, subs, videocount, summary }) {
  return (
    <div className="channel">
      <img />
      <div className="channel__info">
        <div className="channel__text">
          <h3 className="channel__title">
            <p class="channel__name">{channelName}</p>
            <CheckCircleOutlineIcon />
          </h3>
          <p className="channel__nums">
            {subs} subscribers &nbsp; &#8226; &nbsp; {videocount} videos
            <p>{summary}</p>
          </p>
        </div>
        <button className="channel__sub">subscribe</button>
      </div>
    </div>
  );
}

export default Channelres;
