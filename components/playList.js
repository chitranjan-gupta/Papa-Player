import React from "react";
import Image from "next/image";
import coverAlbum from "../icons/default-album-cover.png";
import searchImg from "../icons/search.svg";
export default function PlayList() {
  return (
    <div className="listNav">
      <div className="listNav_sView">
        <div className="listNav_sViewList">
          <Image alt="" src={coverAlbum} />
        </div>
        <div className="listNav_sViewList">
          <Image alt="" src={coverAlbum} />
        </div>
        <div className="listNav_sViewList">
          <Image alt="" src={coverAlbum} />
        </div>
        <div className="listNav_sViewList">
          <Image alt="" src={coverAlbum} />
        </div>
        <div className="listNav_sViewList">
          <Image alt="" src={coverAlbum} />
        </div>
      </div>
      <div className="listNav_lView">
        <div className="yourListView">
          <div className="yHeadView">
            <div className="yHeadpart-1">
              <div className="yHeadpart-1-1">
                <div className="yHeadpart-1-1-1">C</div>
                <span className="yHeadpart-1-1-2">Your Library</span>
              </div>
              <div className="yHeadpart-1-2">
                <div className="yHeadpart-1-2-1">
                  <Image alt="" src={searchImg} priority={true} />
                </div>
                <div className="yHeadpart-1-2-2">+</div>
              </div>
            </div>
            <div className="yHeadpart-2">
              <span>Playlist</span>
              <span>Artist</span>
            </div>
          </div>
          <div className="yPlayView">
            <div className="arrangeView">
              <div className="arrangeView-part-1">
                <div className="arrangeView-part-1-1"></div>
                <div className="arrangeView-part-1-2"></div>
              </div>
              <div className="arrangeView-part-2">
                <div className="arrangeView-part-2-1"></div>
              </div>
            </div>
            <div className="contentView">
              <div className="contentView-part-1">
                <div className="contentView-part-1-1">
                  <Image alt="" src={coverAlbum} />
                </div>
                <div className="contentView-part-1-2">
                  <span>Liked Songs</span>
                  <span>1 Songs</span>
                </div>
              </div>
              <div className="contentView-part-1">
                <div className="contentView-part-1-1">
                  <Image alt="" src={coverAlbum} />
                </div>
                <div className="contentView-part-1-2">
                  <span>Liked Songs</span>
                  <span>1 Songs</span>
                </div>
              </div>
              <div className="contentView-part-1">
                <div className="contentView-part-1-1">
                  <Image alt="" src={coverAlbum} />
                </div>
                <div className="contentView-part-1-2">
                  <span>Liked Songs</span>
                  <span>1 Songs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="listoflistView"></div>
      </div>
    </div>
  );
}
