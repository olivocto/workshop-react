import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import HomePage from './routes/Home';
import ArticlesPage from './routes/Articles';
import PostPage from './routes/Post';
import WheatherPage from './routes/Wheather';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Article from './components/Article/Article';
import Layout from "./layouts/Layout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <main>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/wheather" element={<WheatherPage />} />
      </Routes>
    </Layout>

  </main>
  <Footer/>
</BrowserRouter>
);
