import React from 'react';
import { authors } from '../assets/assets';

import { useSavedArticles } from '../context/SavedArticlesContext';
import { toast } from 'react-toastify';
import { Bookmark, BookmarkCheck } from 'lucide-react'; // poți folosi orice iconiță preferi


const PageArticle = React.memo(({ article, onClick }) => {
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
    <div onClick={() => onClick(article.id)}
      className="group bg-[#848484]/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:bg-[#EDE618]/50 hover:shadow-[0px_0px_30px_#EDE618]/20 transition-all duration-300 flex flex-col">
      <div className="mx-3 mt-3">
        <img loading="lazy" src={article.image} alt="thumb" className="w-full h-[12rem] object-cover rounded-xl" />
      </div>

      <div className="px-4 py-3 min-h-[5rem] flex flex-col justify-between">
        <h4 className="text-lg font-semibold text-white line-clamp-1">
          {article.title}
        </h4>
        <p className="text-sm text-gray-300 line-clamp-2">
          {article.description}
        </p>
      </div>

      {author && (
        <div className="flex items-center justify-between bg-[#1c1c1c] rounded-xl px-3 py-2 mx-3 mb-3 mt-auto">
          <div className="flex items-center gap-2">
            <img src={author.image} alt="author" className="w-8 h-8 rounded-md object-cover" />
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

export default PageArticle;
