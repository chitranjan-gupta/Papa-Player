import React from "react";
import Image from "next/image";
import coverImg from "../icons/default-album-cover.png";
export default function SearchView() {
  return (
    <div className="searchView">
      <div className="searchView-part-1">
        <span>Top</span>
        <span>Latest</span>
        <span>Playlists</span>
        <span>Artists</span>
        <span>Albums</span>
      </div>
      <div className="searchView-part-2">
        <div className="searchView-part-2-1">
          <div className="searchView-part-2-1-1">
            <Image alt="" src={coverImg} />
          </div>
          <span className="searchView-part-2-1-2">Local Music</span>
          <span className="searchView-part-2-1-3">Local Artist</span>
        </div>
        <div className="searchView-part-2-1">
          <div className="searchView-part-2-1-1">
            <Image alt="" src={coverImg} />
          </div>
          <span className="searchView-part-2-1-2">Local Music</span>
          <span className="searchView-part-2-1-3">Local Artist</span>
        </div>
        <div className="searchView-part-2-1">
          <div className="searchView-part-2-1-1">
            <Image alt="" src={coverImg} />
          </div>
          <span className="searchView-part-2-1-2">Local Music</span>
          <span className="searchView-part-2-1-3">Local Artist</span>
        </div>
        <div className="searchView-part-2-1">
          <div className="searchView-part-2-1-1">
            <Image alt="" src={coverImg} />
          </div>
          <span className="searchView-part-2-1-2">Local Music</span>
          <span className="searchView-part-2-1-3">Local Artist</span>
        </div>
        <div className="searchView-part-2-1">
          <div className="searchView-part-2-1-1">
            <Image alt="" src={coverImg} />
          </div>
          <span className="searchView-part-2-1-2">Local Music</span>
          <span className="searchView-part-2-1-3">Local Artist</span>
        </div>
        <div className="searchView-part-2-1">
          <div className="searchView-part-2-1-1">
            <Image alt="" src={coverImg} />
          </div>
          <span className="searchView-part-2-1-2">Local Music</span>
          <span className="searchView-part-2-1-3">Local Artist</span>
        </div>
        <div className="searchView-part-2-1">
          <div className="searchView-part-2-1-1">
            <Image alt="" src={coverImg} />
          </div>
          <span className="searchView-part-2-1-2">Local Music</span>
          <span className="searchView-part-2-1-3">Local Artist</span>
        </div>
      </div>
    </div>
  );
}
