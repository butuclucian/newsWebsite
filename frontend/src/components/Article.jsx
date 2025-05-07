import React from 'react';
import { authors } from '../assets/assets';

import { useSavedArticles } from '../context/SavedArticlesContext';
import { toast } from 'react-toastify';
import { Bookmark, BookmarkCheck } from 'lucide-react'; // poți folosi orice iconiță preferi


const Article = React.memo(({ article, isLarge, onClick }) => {
  const author = authors.find((a) => a.id === article.authorId);

    const { savedArticles, addArticle, removeArticle } = useSavedArticles();
  
    const isSaved = (articleId) => {
      return savedArticles.some(a => a.id === articleId);
    };
  
    const handleSaveClick = (e, article) => {
      e.stopPropagation(); // prevenim trigger-ul click-ului pe card
      if (isSaved(article.id)) {
        removeArticle(article.id);
        toast.info("Removed from saved articles");
      } else {
        addArticle(article);
        toast.success("Article saved!");
      }
    };

  return (
    <div
      onClick={() => onClick(article.id)}
      className={`bg-[#848484]/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:bg-[#EDE618]/50 hover:shadow-[0px_0px_30px_#EDE618]/20 ${isLarge ? 'hover:scale-105 flex flex-col' : ''}`}>
      <div className={`mx-4 mt-4 ${!isLarge && 'mx-3 mt-3'}`}>
        <img loading="lazy" src={article.image} alt="thumb" className={`w-full object-cover rounded-xl cursor-pointer ${isLarge ? 'h-[18rem]' : 'h-[10rem]'}`} />
      </div>

      <div className="px-4 py-2 min-h-[4.5rem] flex flex-col justify-between flex-grow">
        <h4 className={`${isLarge ? 'text-3xl' : 'text-sm'} font-semibold text-white leading-snug line-clamp-1`}>
          {article.title}
        </h4>
        <p className={`${isLarge ? 'text-xl pt-5' : 'text-xs'} text-gray-300 leading-snug ${isLarge ? 'line-clamp-5' : 'line-clamp-2'}`}>
          {article.description}
        </p>
      </div>

      {author && (
        <div className={`flex items-center justify-between bg-[#1c1c1c] rounded-xl px-3 ${isLarge ? 'py-3 mt-24 mb-4' : 'py-2 mt-1 mb-2'} mx-3 cursor-pointer`}>
          <div className="flex items-center gap-2">
            <img src={author.image} alt="author" className="w-10 h-10 rounded-md object-cover" />
            <div className="text-white text-xs">
              <p className="font-medium">{author.name}</p>
              <p className="text-[10px] text-gray-400">{article.publishDate}</p>
            </div>
          </div>
          {/* Save button */}
          <button
            onClick={(e) => handleSaveClick(e, article)}
            className="text-white hover:text-yellow-300 transition"
            title={isSaved(article.id) ? "Remove from Saved" : "Save Article"}>
            {isSaved(article.id) ? <BookmarkCheck size={22} /> : <Bookmark size={22} />}
          </button>
        </div>
      )}
    </div>
  );
});

export default Article;
