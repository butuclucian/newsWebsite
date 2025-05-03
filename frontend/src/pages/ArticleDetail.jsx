import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fullArticles } from '../assets/assets';

const ArticleDetail = () => {
  const { articleId } = useParams(); // preia parametrul articleId din URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // gaseste articolul corespunzător ID-ului din URL
    const foundArticle = fullArticles[articleId];
    setArticle(foundArticle);
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>; // afiseaza daca articolul nu este disp
  }

  return (
    <div className='max-w-[1000px] mx-auto mt-25 p-4 text-white'>
      {/* -----detalii articol---- */}
      <div className='flex flex-col items-center mb-4'>
        <img src={article.image} alt={article.title} className='w-full h-auto max-w-[1000px] max-h-[300px] object-cover rounded-lg' />
      </div>
      <div className='mb-4'>
        <h1 className='text-3xl font-bold'>{article.title}</h1>
        <p className='text-gray-400'>{article.publishDate}</p>
        <p className='text-gray-400'>Author: {article.authorName}</p>
      </div>
      <div className='text-lg text-gray-300'>
        <p>{article.content}</p>
      </div>
      
    </div>
  );
};

export default ArticleDetail;
