import "../App.css";
import { Nav } from "../components/Nav";
import { Search } from "../components/Search";
import { MovieList } from "../components/MovieList";
import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(10);

  console.log("page: ", page);

  const fetchData = async () => {
    try {
      const url =
        search.length > 0
          ? "https://api.tvmaze.com/search/shows?q=" + search
          : "https://api.tvmaze.com/shows";

      const res = await fetch(url);
      if (!res.ok) return;
      const data = await res.json();
      console.log("data: ", data);
      setMovies(data.slice(0, page));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search, page]);

  console.log("state: ", search);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Search value={search} setValue={setSearch} />
        <MovieList data={movies} search={search} />
        {movies.length > 0 && (
          <button onClick={() => setPage((prev) => prev + 10)}>
            Load More
          </button>
        )}
      </main>
    </>
  );
}

export default Home;
