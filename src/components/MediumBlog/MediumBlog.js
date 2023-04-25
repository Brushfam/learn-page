import React, {useEffect, useState} from "react";
import "./MediumBlog.css"

const mediumRssFeed =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fbrushfam";

export const MediumBlog = () => {
    const max_articles = 6;
    const [articles, setArticles] = useState();

    useEffect(() => {
        const loadArticles = async () => {
            fetch(mediumRssFeed, { headers: { Accept: "application/json" } })
                .then((res) => res.json())
                .then((data) => data.items.filter((item) => item.title.length > 0))
                .then((newArticles) => newArticles.slice(0, max_articles))
                .then((articles) => setArticles(articles))
                .catch((error) => console.log(error));
        };

        loadArticles();
    }, [max_articles]);

    console.log(articles)

    return(
        <div className={"mediumContainer"}>
            <p className={"sectionTitle"}>
                ARTICLES
            </p>

            <div className={"mediumBlockContainer"}>
            {articles
                ? articles.map((item) => (
                        <a
                            href={item.link}
                            target="_blank"
                            title={item.title}
                            aria-label={item.title}
                            key={item.link}
                        >
                            <div className={"mediumBlock"}>
                                <p>
                                    {item.title.replace("&amp;", "&")}
                                </p>
                                <p className={"articleDate"}>
                                    {item.pubDate.slice(0,10)}
                                </p>
                            </div>
                        </a>
                ))
                : "no article shown"}
            </div>
        </div>
    )
}