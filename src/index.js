import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import HomePage from './routes/Home';
import ArticlesPage from './routes/Articles';
import PostPage from './routes/Post';
import WheatherPage from './routes/Wheather';

import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <main>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="publish" element={<PostPage />} />
      <Route path="articles" element={<ArticlesPage />} />
      <Route path="wheather" element={<WheatherPage />} />
    </Routes>
  </main>
  <footer>
    <p>Workshop des Bases du Dev Web - Formation Skool 24</p>
  </footer>
</BrowserRouter>
);
