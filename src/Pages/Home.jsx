// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
     
    const fetchArticles = async () => {
      const snap = await getDocs(collection(db, "articles"));
      setArticles(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

     
    };
    fetchArticles();
  }, []);

 return (
  <div className="p-4 max-w-2xl mx-auto">
    <Navbar />
    <h1 className="text-3xl font-bold mb-4 text-center">📚 Medium Clone</h1>

    {articles.map(article => (
      <div key={article.id} className="mb-4 border p-4 rounded">
        <ArticleCard id ={article.id} title={article.title} content={article.content.slice(0, 150)} 
        time = {article.timestamp
          ? article.timestamp.toDate().toDateString()
          : " "} />
      </div>
    ))}
  </div>
);

}

export default Home;
