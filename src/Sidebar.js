import React, { useState } from "react";
import "./Sidebar.css";
import Sidebaritem from "./Sidebaritem";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  const [selected, setSelected] = useState("");
  const setTitle = (title) => {
    setSelected(title);
  };

  return (
    <div className="sidebar">
      <Sidebaritem
        selected={selected}
        Icon={HomeIcon}
        title="Home"
        setTitle={setTitle}
      />
      <Sidebaritem
        selected={selected}
        Icon={WhatshotIcon}
        title="Trending"
        setTitle={setTitle}
      />
      <Sidebaritem
        selected={selected}
        Icon={SubscriptionsIcon}
        title="Subscription"
        setTitle={setTitle}
      />
      <hr />
      <Sidebaritem
        selected={selected}
        Icon={VideoLibraryIcon}
        title="Library"
        setTitle={setTitle}
      />
      <Sidebaritem
        selected={selected}
        Icon={HistoryIcon}
        title="History"
        setTitle={setTitle}
      />
      <Sidebaritem
        selected={selected}
        Icon={OndemandVideoIcon}
        title="Your videos"
        setTitle={setTitle}
      />
      <Sidebaritem
        selected={selected}
        Icon={WatchLaterIcon}
        title="Watch Later"
        setTitle={setTitle}
      />
      <Sidebaritem
        selected={selected}
        Icon={ThumbUpIcon}
        title="Liked videos"
        setTitle={setTitle}
      />
      <Sidebaritem
        selected={selected}
        Icon={ExpandMoreIcon}
        title="Show more"
        setTitle={setTitle}
      />
      <hr />
    </div>
  );
}

export default Sidebar;
