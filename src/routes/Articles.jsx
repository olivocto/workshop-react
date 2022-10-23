import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function ArticlesPage() {
  const [articleList, setArticleList] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      if (!articleList) getArticleList()
  }, [articleList])

  const getArticleList = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      setArticleList(json)
      setIsLoading(false)
    });
  }

  return (
   <>
      <h1>liste des articles</h1>
      { !isLoading && (
        <ul className="card-list">
          { articleList.map((article, index) => (
            <li key={index} className="card">
              <h2>{article.title}</h2>
              <p>{article.body}</p>
              <Link to={`/articles/${article.id}`}>Lire l'article</Link>
            </li>))}
        </ul>
        )}
   </>
   );
}

export default ArticlesPage;
