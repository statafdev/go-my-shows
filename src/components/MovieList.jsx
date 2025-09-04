import { Card } from "./Card";

export const MovieList = ({ data }) => {
  console.log("from list", data);
  return (
    <section id="movie-list" className="movie-list">
      {data.length === 0 ? (
        <p>No movies found yet!</p>
      ) : (
        data.map((el, index) => {
          console.log(el);
          return <Card key={index} movie={el} />;
        })
      )}
    </section>
  );
};
