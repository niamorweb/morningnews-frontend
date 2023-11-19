import Image from "next/image";
import styles from "../styles/Article.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToBookmarks } from "../reducers/bookmarks";
import { removeToBookmarks } from "../reducers/bookmarks";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Article(props) {
  const [style, setStyle] = useState({ color: "#000000" });

  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks.value);

  const addMovie = (title, author, description, image) => {
    const isMovieExist = bookmarks.find((elem) => elem.title === title);
    if (isMovieExist) {
      dispatch(removeToBookmarks(title));
    } else {
      const obj = { title, author, description, image };
      dispatch(addToBookmarks(obj));
    }
  };

  useEffect(() => {
    const isMovieExist = bookmarks.find((elem) => elem.title === props.title);
    console.log(isMovieExist);
    if (isMovieExist) {
      setStyle({ color: "#E9BE59" });
    } else {
      setStyle({ color: "#000000" });
    }
  }, [bookmarks]);

  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <h3>{props.title}</h3>
        <FontAwesomeIcon
          style={style}
          onClick={() =>
            addMovie(
              props.title,
              props.author,
              props.description,
              props.urlToImage
            )
          }
          icon={faBookmark}
          className={styles.bookmarkIcon}
        />
      </div>
      <h4 style={{ textAlign: "right" }}>- {props.author}</h4>
      <div className={styles.divider}></div>
      <Image
        src={props.urlToImage}
        alt={props.title}
        width={600}
        height={314}
      />
      <p>{props.description}</p>
      <a className={styles.link} target="_blank" href={props.url}>
        Voir l'article
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles.icon_link}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </a>
    </div>
  );
}

export default Article;
