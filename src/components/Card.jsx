import { Link } from "react-router-dom";

export const Card = ({ movie, search }) => {
  return (
    <Link to={"/show"} state={movie}>
      <div className="card">
        <div
          className="poster"
          style={{
            backgroundColor: "black",
          }}
        >
          <img
            src={
              search.length > 0
                ? movie?.show?.image?.original
                : movie?.image?.original
            }
            alt={"name"}
            style={{ width: "100%" }}
          />
        </div>
        <div className="desc">
          {search.length > 0 ? movie?.show?.name : movie?.name}
        </div>
      </div>
    </Link>
  );
};
