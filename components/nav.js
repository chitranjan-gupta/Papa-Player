import React, { useEffect } from "react";
export default function Nav() {
  useEffect(() => {
    const list = document.querySelectorAll(".list");
    function activeLink() {
      list.forEach((item) => {
        item.classList.remove("active");
        this.classList.add("active");
      });
    }
    list.forEach((item) => {
      item.addEventListener("click", activeLink);
    });
  }, []);
  return (
    <div className="nav relative flex justify-center items-center select-none">
      <ul className="flex">
        <li className="list relative cursor-pointer list-none">
          <div className="relative flex justify-center items-center flex-col text-center w-full font-medium">
            <span className="icon relative block">M</span>
            <span className="text absolute font-normal">Messages</span>
          </div>
        </li>
        <li className="list relative cursor-pointer list-none">
          <div className="relative flex justify-center items-center flex-col text-center w-full font-medium">
            <span className="icon relative block">P</span>
            <span className="text absolute font-normal">Profile</span>
          </div>
        </li>
        <li className="list active relative cursor-pointer list-none">
          <div className="relative flex justify-center items-center flex-col text-center w-full font-medium">
            <span className="icon relative block">H</span>
            <span className="text absolute font-normal">Home</span>
          </div>
        </li>
        <li className="list relative cursor-pointer list-none">
          <div className="relative flex justify-center items-center flex-col text-center w-full font-medium">
            <span className="icon relative block">P</span>
            <span className="text absolute font-normal">Playlist</span>
          </div>
        </li>
        <li className="list relative cursor-pointer list-none">
          <div className="relative flex justify-center items-center flex-col text-center w-full font-medium">
            <span className="icon relative block">S</span>
            <span className="text absolute font-normal">Setting</span>
          </div>
        </li>
        <div className="sel absolute"></div>
      </ul>
    </div>
  );
}
