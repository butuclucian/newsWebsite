import React from 'react';
import { useParams } from 'react-router-dom';
import { homepageArticles } from '../assets/assets';

const Article = () => {
  const { id } = useParams();
  const allArticles = [...homepageArticles.sports, ...homepageArticles.news];
  const article = allArticles.find((art) => art.id === id);

  if (!article) {
    return <div className="text-white p-8">Articolul nu a fost găsit.</div>;
  }

  return (
    <div className="text-white p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <img src={article.image} alt={article.title} className="w-full rounded-xl mb-6" />
      <p className="text-lg text-gray-300 mb-6">{article.description}</p>
      <div className="flex items-center gap-4">
        <img src={article.authorImage} alt={article.authorName} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-medium">{article.authorName}</p>
          <p className="text-sm text-gray-400">{article.publishDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
