import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fullArticles } from '../assets/assets';
import { authors } from '../assets/assets';

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

  const author = authors.find((a) => a.id === article.authorId);


  return (
    <div className='max-w-[1000px] mx-auto mt-25 p-4 text-white'>

      {/* --- imagine articol ------ */}
      <div className='flex flex-col items-center mb-4'>
        <img src={article.image} alt={article.title} className='w-full h-auto max-w-[1000px] max-h-[300px] object-cover rounded-lg' />
      </div>

      {/* ---titlu + content ---- */}
      <div className='mb-4'>
        <h1 className='text-3xl font-bold dark:text-[#7e8082]'>{article.title}</h1>
      </div>
      <div className='text-lg text-gray-400 mb-6'>
        <p>{article.content}</p>
      </div>

      {/* --- footer ---- */}
      <div className='flex justify-between items-center border-t border-gray-600 pt-4 mt-6'>
        <p className='text-sm text-gray-400 dark:text-[#7e8082]'>{article.publishDate}</p>

        {author && (
          <div className='flex items-center gap-3'>
            <img src={author.image} alt={author.name} className='w-10 h-10 rounded-full object-cover'/>
            <p className='text-sm text-gray-300 font-medium dark:text-[#7e8082]'>{author.name}</p>
          </div>
        )}
      </div>


    </div>
  );
};

export default ArticleDetail;
