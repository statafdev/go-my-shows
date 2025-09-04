import "./App.css";
import { Nav } from "./components/Nav";
import { Search } from "./components/Search";
import { MovieList } from "./components/MovieList";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.tvmaze.com/search/shows?q=" + search
      );
      if (!res.ok) return;
      const data = await res.json();
      setMovies(data.slice(0, 10));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  console.log("state: ", search);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Search value={search} setValue={setSearch} />
        <MovieList data={movies} />
      </main>
    </>
  );
}

export default App;
