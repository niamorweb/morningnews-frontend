import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Bookmarks.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { removeToBookmarks } from "../reducers/bookmarks";
import { useDispatch } from "react-redux";

function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmarks.value);
  const dispatch = useDispatch();

  const removeMovie = (title) => {
    dispatch(removeToBookmarks(title));
  };
  useEffect(() => {
    console.log(bookmarks);
  }, [bookmarks]);

  return (
    <div>
      <Head>
        <title>Morning News - Bookmarks</title>
      </Head>
      <div className={styles.container}>
        <h2 className={styles.title}>Bookmarks</h2>
        <div className={styles.container_articles}>
          {bookmarks.length > 0 ? (
            bookmarks.map((data) => (
              <div className={styles.articles}>
                <div className={styles.articleHeader}>
                  <h3>{data.title}</h3>
                  <FontAwesomeIcon
                    onClick={() => removeMovie(data.title)}
                    style={{ color: "#E9BE59" }}
                    icon={faBookmark}
                    className={styles.bookmarkIcon}
                  />
                </div>
                <h4 style={{ textAlign: "right" }}>- {data.author}</h4>
                <div className={styles.divider}></div>
                <Image
                  src={data.image}
                  alt={data.title}
                  width={600}
                  height={314}
                />
                <p>{data.description}</p>
              </div>
            ))
          ) : (
            <p>No bookmark</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
