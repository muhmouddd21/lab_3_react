import { useLocation, useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();
  const state = location.state;

  const title = state?.title;
  const path = state?.path;

  return (
    <>
      <p>Movie ID: {id}</p>

      {state ? (
        <>
          <p>Title: {title}</p>
          <img src={path} alt={title} />
        </>
      ) : (
        <p>No additional state passed...</p>
      )}
    </>
  );
}