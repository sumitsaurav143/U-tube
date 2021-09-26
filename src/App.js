import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import { SearchBar, VideoList, VideoDetail } from "./components";

import youtube from "./api/youtube";
import './style.css'

const App = () => {


  const [menu, setMenu] = useState(false);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  function handelMenu() {
    if(!menu)
    {
    document.querySelector(".LeftPanel").style.left = "-3%";
    setMenu(true);
    }
    else
    {
    document.querySelector(".LeftPanel").style.left = "-60%";
    setMenu(false);
    }
  }
  return (
    <>
      <div className="Main_Container">

        <div className="Nav_bar">
        {!menu ?
            <button id="menu" onClick={handelMenu}><i class="fas fa-bars"></i></button> :
            <button id="menu" onClick={handelMenu}><i class="fas fa-times"></i></button>
          }
          <img id="logo" src="https://see.fontimg.com/api/renderfont4/ZVZdq/eyJyIjoiZnMiLCJoIjo2MiwidyI6MTAwMCwiZnMiOjYyLCJmZ2MiOiIjRkZGRUZFIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VS1UdWJl/roasting.png" height="30px" />
          <SearchBar onSubmit={handleSubmit} />
          <div></div>
        </div>

        <div className="BodySection">
          <div className="LeftPanel">
            <p id="Heading"><i className="fas fa-newspaper"></i> News</p>
            <button id="left_btns" onClick={() => handleSubmit("News")}>News</button>
            <p id="Heading"><i class="fas fa-table-tennis"></i> Sports</p>
            <button id="left_btns" onClick={() => handleSubmit("Cricket")}>Cricket</button>
            <button id="left_btns" onClick={() => handleSubmit("Football")}>Football</button>
            <button id="left_btns" onClick={() => handleSubmit("Hockey")}>Hockey</button>
            <p id="Heading"><i class="fas fa-music"></i> Musics</p>
            <button id="left_btns" onClick={() => handleSubmit("Bollywood Songs")}>Hindi Songs</button>
            <button id="left_btns" onClick={() => handleSubmit("English Songs")}>English Songs</button>
            <button id="left_btns" onClick={() => handleSubmit("punjabi Songs")}>Punjabi Songs</button>
            <button id="left_btns" onClick={() => handleSubmit("Devotes Songs")}>Devotional Songs</button>
            <p id="Heading"><i class="fas fa-gamepad"></i> Gamings</p>
            <button id="left_btns" onClick={() => handleSubmit("Gamings")}>Live Streams</button>
            <p id="Heading"><i class="fas fa-baby"></i> Kids</p>
            <button id="left_btns" onClick={() => handleSubmit("Kid Rhyms")}>Rhyms</button>
            <button id="left_btns" onClick={() => handleSubmit("Cartoons")}>Cartoons</button>
            <button id="left_btns" onClick={() => handleSubmit("Funs")}>Funs</button>
          </div>

          <div className="RightPanel">

            <VideoDetail video={selectedVideo} />

            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 30,
        key: "AIzaSyDcWKaOPzPFvxDSY8351ZG55IIOUo0kMmI",
        q: searchTerm,
      }
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;