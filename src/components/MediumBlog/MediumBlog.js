import React, { useEffect, useState } from "react";
import "./MediumBlog.css";

const mediumRssFeed =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fbrushfam";

export const MediumBlog = () => {
    const max_articles = 9;
    const [articles, setArticles] = useState();

    useEffect(() => {
        const loadArticles = async () => {
            fetch(mediumRssFeed, { headers: { Accept: "application/json" } })
                .then((res) => res.json())
                .then((data) =>
                    data.items.filter((item) => item.title.length > 0)
                )
                .then((newArticles) => newArticles.slice(0, max_articles))
                .then((articles) => setArticles(articles))
                .catch((error) => console.log(error));
        };

        loadArticles();
    }, [max_articles]);

    return (
        <div className={"mediumContainer"}>
            <div className={"sectionTitle"}>
                <img src={"/img/articles.svg"} style={{ marginRight: 14 }} />
                <p>ARTICLES</p>
            </div>

            <div className={"mediumBlockContainer"}>
                {articles?.map((item, i) =>
                    item.title.match(/[\u0430-\u044f]/) ? (
                        <></>
                    ) : (
                        <div
                            className={"mediumBlockWrapper"}
                            key={i.toString()}
                        >
                            <a
                                href={item.link}
                                target="_blank"
                                title={item.title}
                                aria-label={item.title}
                            >
                                <div className={"mediumBlock"}>
                                    <p className={"articleTitle"}>
                                        {item.title.replace("&amp;", "&")}
                                    </p>
                                    <p className={"articleDate"}>
                                        {item.pubDate.slice(0, 10)}
                                    </p>
                                </div>
                            </a>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
