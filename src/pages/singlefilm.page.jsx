import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MainLayout, Loader } from "../components";

export function SingleFilmPage(props) {
  let [item, setItem] = useState({});
  let [isLoaded, setIsLoaded] = useState(false);

  let { id } = useParams();

  function getFilm() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films/${id}`)
      .then((res) => res.json())
      .then((film) => {
        setItem(film);
        setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFilm();
  }, []);

  if (!isLoaded) {
    return (
      <MainLayout className="text-center">
        <Loader size={40} />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="row">
        <div className="col-md-6 mb-4">
          <img
            className="img-fluid"
            src={`${item.image}`}
            alt={`${item.title} Poster`}
          />
        </div>
        <div className="col-md-6 mb-4">
          <h1>{item.title}</h1>
          <p>
            Directed by {item.director}. Produced by {item.producer}.
          </p>
          <p>
            The film was released in <strong>{item.release_date}</strong> and
            garnered a <strong>{item.rt_score}</strong> aggregate score on{" "}
            <a
              href="https://www.rottentomatoes.com/"
              target="_blank"
              rel="noreferrer"
            >
              Rotten Tomatoes
            </a>
            .
          </p>
          <h2>Description</h2>
          <p>{item.description}</p>
        </div>
        <pre></pre>
      </div>
    </MainLayout>
  );
}
