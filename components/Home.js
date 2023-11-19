import { useEffect, useState } from "react";
import Head from "next/head";
import Article from "./Article";
import TopArticle from "./TopArticle";
import styles from "../styles/Home.module.css";

function Home() {
  const [articlesData, setArticlesData] = useState([]);
  const [topArticle, setTopArticle] = useState({});

  useEffect(() => {
    fetch("https://morningnews-backend-9d8iq14ir-niamordev.vercel.app/articles")
      .then((response) => response.json())
      .then((data) => {
        setTopArticle(data.articles[0]);
        setArticlesData(data.articles.filter((data, i) => i > 0));
      });
  }, []);

  const articles = articlesData.map((data, i) => {
    return <Article key={i} {...data} />;
  });

  return (
    <div>
      <Head>
        <title>Morning News - Home</title>
      </Head>
      <div className={styles.main_container}>
        <TopArticle {...topArticle} />

        <div className={styles.articlesContainer}>{articles}</div>
      </div>
    </div>
  );
}

export default Home;
