import { Card } from "./Card";

export const MovieList = ({ data }) => {
  return (
    <section id="movie-list" className="movie-list">
      {data.length === 0 ? (
        <p>No movies found yet!</p>
      ) : (
        data.map((el, index) => {
          return <Card key={index} movie={el} />;
        })
      )}
    </section>
  );
};
