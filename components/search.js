import React from "react";
import Image from "next/image";
import searchImg from "../icons/search.svg";
export default function Search() {
  return (
    <div className="searchBar">
      <div className="searchContainer">
        <div className="iiconContainer">
          <Image alt="" src={searchImg} />
        </div>
        <div className="inputContainer">
          <input type="text" placeholder="Search songs" />
        </div>
      </div>
      <div className="searchBar-part-2">
        <span>Youtube</span>
        <span>Spotify</span>
        <span>Gaana</span>
        <span>JioSaavn</span>
        <span>Wynk Music</span>
        <span>Amazon Music</span>
        <span>Hungama Music</span>
      </div>
    </div>
  );
}
