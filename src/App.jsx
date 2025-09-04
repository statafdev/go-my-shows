import "./App.css";
import { Nav } from "./components/Nav";
import { Search } from "./components/Search";
import { MovieList } from "./components/MovieList";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://api.tvmaze.com/shows");
      if (!res.ok) return;
      const data = await res.json();
      setMovies(data.slice(0, 10));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("movies state: ", movies);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Search />
        <MovieList data={movies} />
      </main>
    </>
  );
}

export default App;
