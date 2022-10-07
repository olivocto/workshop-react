import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import Layout from '../Layout/Layout';
import './article.css'

function Article() {
  const params = useParams();
  const [article, setArticle] = useState(null)
  const [commentList, setCommentList] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      if (!article) getArticle()
  }, [article])

  const getArticle = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then((response) => response.json())
    .then((json) => {
      setArticle(json)
    }).then(() => {
      getCommentList()
    });
  }

  const getCommentList = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
    .then((response) => response.json())
    .then((json) => {
      setCommentList(json)
      setIsLoading(false)
    });
  }

  return (
   <Layout>
  <Link className="cta" to='/articles'>{'< '}Retour aux articles</Link>
     { !isLoading && (
       <>
        <article className="article">
          <h1>{article.title}</h1>
          <p>{article.body}</p>
          <footer>rédigé par le user {article.userId}</footer>
        </article>
        <ul className="commentaire-list">
          <h2>Commentaires</h2>
          { commentList.map((comment, index) => (
            <li key={index} className="commentaire">
              <h2>{comment.name}</h2>
              <p>{comment.email}</p>
              <p>{comment.body}</p>
            </li>))}
        </ul>
        </>
        )}
   </Layout>
   );
}

export default Article;
