export const Card = ({ movie }) => {
  return (
    <div className="card">
      <div
        className="poster"
        style={{
          backgroundColor: "black",
        }}
      >
        <img
          src={movie?.show?.image?.original}
          alt={"name"}
          style={{ width: "100%" }}
        />
      </div>
      <div className="desc">{movie?.show?.name}</div>
    </div>
  );
};
