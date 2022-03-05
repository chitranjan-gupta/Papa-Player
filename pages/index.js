import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import Box from "../components/box";
import List from "../components/list";
import Play from "../components/play";
import PlayList from "../components/playList";
import Search from "../components/search";
import SearchView from "../components/searchView";
export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {}, []);
  return (
    <main className="absolute top-0 left-0 right-0 bottom-0 w-full h-full uigradient">
      <section className="absolute left-1/4 top-4">
        <Search />
      </section>
      <section className="absolute left-64 top-24">
        <SearchView />
      </section>
      <section className="absolute left-0 bottom-28 listNavAnim">
        <PlayList />
      </section>
      <section className="absolute bottom-4 left-1/3">
        <Nav />
      </section>
      <section className="absolute bottom-4 right-4">
        <Box>
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </Box>
        <div className="overlay">
          <div className="player">
            <Play />
          </div>
        </div>
      </section>
    </main>
  );
}
