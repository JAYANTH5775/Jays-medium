
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Navbar from './Navbar';
export default function ArticleDetailed() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const snap = await getDocs(collection(db, 'articles'));
      const matched = snap.docs.find(doc => doc.id === id);
      if (matched) {
        setArticle({ id: matched.id, ...matched.data() });
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
        <Navbar />
  <h1 className="text-3xl font-bold mb-4 text-center">{article.title}</h1>
  
  <div className="prose max-w-none text-center">
    <ReactMarkdown
      children={article.content}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
    />
  </div>
</div>

  );
}
