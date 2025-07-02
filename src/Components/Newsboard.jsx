import Newsitems from "./Newsitem";
import { useState, useEffect } from 'react';

const Newsboard = ({ category }) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        // let url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}';
        fetch(url)
            .then(response => response.json()).then(data => setArticles(data.articles))




    }, [category])
    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {articles.map((news, index) => {
                return <Newsitems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}
        </div>
    )
}
export default Newsboard;