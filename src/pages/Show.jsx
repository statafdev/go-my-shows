import { useLocation } from "react-router-dom";

export const Show = () => {
  const location = useLocation();
  const show = location.state;
  console.log(show);
  if (!show) return <p>No data received 😢</p>;

  return (
    <div>
      <h2>{show.name}</h2>
      <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
      {/* {show.image && <img src={show.image.original} alt={show.name} />} */}ß{" "}
    </div>
  );
};
