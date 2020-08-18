import React from "react";
import "./Videorow.css";

function Videorow({
  channelName,
  image,
  title,
  subs,
  views,
  duration,
  uploaded,
  desc,
}) {
  return (
    <div className="vidrowContainer">
      <div className="vid__row">
        <img className="vid__img" src={image} alt={"Video Thumbnial"} />
        <div className="vid__dets">
          <h3 className="vid__title">{`${title}${channelName}`}</h3>
          <p className="vid__info">
            {`I LOVE ${channelName}`}
            &nbsp; &#8226; &nbsp;
            {subs} Subscribers &nbsp;
            {views} Views &nbsp; &#8226; &nbsp;
            {uploaded}
          </p>
          <p className="vid__sum">{`${desc}${channelName}`}</p>
        </div>
      </div>
    </div>
  );
}

export default Videorow;
