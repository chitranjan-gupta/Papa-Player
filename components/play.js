import React, { useEffect, useState } from "react";
import Image from "next/image";
import coverAlbum from "../icons/default-album-cover.png";
import nextImg from "../icons/Next.png";
import prevImg from "../icons/Pre.png";
import playImg from "../icons/Play.png";
import pauseImg from "../icons/Pause.png";
import audioSystem from "../lib/player";
export default function Play() {
  const [isPlaying, setPlaying] = useState(false);
  useEffect(() => {
    audioSystem("MasterSong.mp3", setPlaying);
  }, []);
  return (
    <>
      <div id="album" className="album">
        <div className="album_img">
          <Image id="album_img" alt="" src={coverAlbum} />
        </div>
      </div>
      <div className="playBox">
        <div className="song_attr">
          <div className="song_info">
            <span id="song_name" className="song_name">
              Local Music
            </span>
            <span id="song_artist" className="song_artist">
              Local Artist
            </span>
          </div>
          <div className="song_prodiv">
            <div id="song_progress" className="song_progress">
              <div id="bar" className="part"></div>
              <div id="thumb" className="thumb"></div>
            </div>
          </div>
          <div className="song_durr">
            <span id="song_current_time">00:00</span>
            <span id="song_duration">00:00</span>
          </div>
          <div className="song_butt">
            <div className="prev_butt">
              <Image alt="" src={prevImg} />
            </div>
            <div id="backward_butt" className="backward_butt">
              <svg
                version="1.1"
                id="back"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 480.026 480.026"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M475.922,229.325l-144-160c-3.072-3.392-7.36-5.312-11.904-5.312h-96c-6.304,0-12.032,3.712-14.624,9.472
                       c-2.56,5.792-1.504,12.544,2.72,17.216l134.368,149.312l-134.368,149.28c-4.224,4.704-5.312,11.456-2.72,17.216
                       c2.592,5.792,8.32,9.504,14.624,9.504h96c4.544,0,8.832-1.952,11.904-5.28l144-160
                       C481.394,244.653,481.394,235.373,475.922,229.325z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M267.922,229.325l-144-160c-3.072-3.392-7.36-5.312-11.904-5.312h-96c-6.304,0-12.032,3.712-14.624,9.472
                      c-2.56,5.792-1.504,12.544,2.72,17.216l134.368,149.312L4.114,389.293c-4.224,4.704-5.312,11.456-2.72,17.216
                      c2.592,5.792,8.32,9.504,14.624,9.504h96c4.544,0,8.832-1.952,11.904-5.28l144-160
                      C273.394,244.653,273.394,235.373,267.922,229.325z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div id="play_butt" className="play_butt">
              <Image
                id="play_butt_img"
                alt=""
                priority={true}
                src={isPlaying ? pauseImg : playImg}
              />
            </div>
            <div id="forward_butt" className="forward_butt">
              <svg
                version="1.1"
                id="for"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 480.026 480.026"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M475.922,229.325l-144-160c-3.072-3.392-7.36-5.312-11.904-5.312h-96c-6.304,0-12.032,3.712-14.624,9.472
			                 c-2.56,5.792-1.504,12.544,2.72,17.216l134.368,149.312l-134.368,149.28c-4.224,4.704-5.312,11.456-2.72,17.216
			                 c2.592,5.792,8.32,9.504,14.624,9.504h96c4.544,0,8.832-1.952,11.904-5.28l144-160
			                 C481.394,244.653,481.394,235.373,475.922,229.325z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M267.922,229.325l-144-160c-3.072-3.392-7.36-5.312-11.904-5.312h-96c-6.304,0-12.032,3.712-14.624,9.472
			                c-2.56,5.792-1.504,12.544,2.72,17.216l134.368,149.312L4.114,389.293c-4.224,4.704-5.312,11.456-2.72,17.216
			                c2.592,5.792,8.32,9.504,14.624,9.504h96c4.544,0,8.832-1.952,11.904-5.28l144-160
			                C273.394,244.653,273.394,235.373,267.922,229.325z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="next_butt">
              <Image alt="" src={nextImg} />
            </div>
          </div>
          <div className="extra_butt">
            <div className="shuffle_butt">
              <Image alt="" src={nextImg} />
            </div>
            <div className="repeat_butt">
              <Image alt="" src={nextImg} />
            </div>
            <div className="point_butt">
              <Image alt="" src={nextImg} />
            </div>
            <div className="share_butt">
              <Image alt="" src={nextImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
