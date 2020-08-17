import React from "react";
import "./SearchResults.css";
import TuneIcon from "@material-ui/icons/Tune";
import Channelres from "./Channelres";

function Searchresults({ searchValue }) {
  return (
    <div className="results">
      <div className="inner__res">
        <div className="results__filter">
          <TuneIcon className="filter__icon" />
          <h5 className="filter__text">FILTER</h5>
        </div>
        <hr />
        <Channelres
          image={""}
          channelName={`I LOVE ${searchValue}`}
          subs={"123"}
          videocount={"111"}
          summary={`Showing the world my love for ${searchValue}`}
        />
      </div>
    </div>
  );
}

export default Searchresults;
