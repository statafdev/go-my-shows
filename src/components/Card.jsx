export const Card = ({ movie }) => {
  +console.log("from card : ", movie);
  return (
    <div className="card">
      <div
        className="poster"
        style={{
          backgroundColor: "black",
        }}
      >
        <img
          src={movie.image.original}
          alt={"name"}
          style={{ width: "100%" }}
        />
      </div>
      <div className="desc">{movie.name}</div>
    </div>
  );
};
