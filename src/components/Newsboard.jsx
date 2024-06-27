import Newsitem from "./Newsitem"
import {useEffect} from "react";
import {useState} from "react";
const Newsboard = () => {
    const [articles,setArticles]=useState([""]);
    useEffect(()=>{
      const apiKey="428fc55c247b466d84920775fa3bc3a3";
     
          let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
          fetch(url).then(response=> response.json()).then(data => setArticles(data.articles));

    },[])
    return (
            <div>
               <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
               {articles.map((news,index)=>{
                  return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
               })}
            </div>
    )
}
export default Newsboard