import React from "react";
import Image from "next/image";
import coverAlbum from "../icons/default-album-cover.png";
export default function List() {
  return (
    <div className="sBox">
      <div className="sBox_Cover">
        <div className="sBox_No">1</div>
        <div className="sBox_CoverImg">
          <Image alt="" src={coverAlbum} />
        </div>
        <div className="sBox_Artist">
          <span>Local Music</span>
          <span>Local Artist</span>
        </div>
      </div>
      <div className="sBox_Option">:</div>
    </div>
  );
}
