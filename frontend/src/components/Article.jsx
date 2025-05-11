import React from 'react';
import { authors } from '../assets/assets';

import { useSavedArticles } from '../context/SavedArticlesContext';
import { toast } from 'react-toastify';
import { Bookmark, BookmarkCheck } from 'lucide-react';

const Article = React.memo(({ article, isLarge, onClick }) => {
  const author = authors.find((a) => a.id === article.authorId);

  const { savedArticles, addArticle, removeArticle } = useSavedArticles();

  const isSaved = (articleId) => {
    return savedArticles.some(a => a.id === articleId);
  };

  const handleSaveClick = (e, article) => {
    e.stopPropagation();
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
      className={`group bg-[#848484]/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden  dark:hover:bg-black dark:hover:shadow-[0px_0px_40px_#000000]/50  dark:transition-all dark:duration-500  hover:bg-[#EDE618]/50 hover:shadow-[0px_0px_30px_#EDE618]/20  transition-all duration-500 
        ${isLarge ? 'hover:scale-105 flex flex-col' : ''}`}>
      <div className={`mx-4 mt-4 ${!isLarge && 'mx-3 mt-3'}`}>
        <img loading="lazy" src={article.image} alt="thumb" className={`w-full object-cover rounded-xl cursor-pointer ${isLarge ? 'h-[18rem]' : 'h-[10rem]'}`}/>
      </div>

<div className="px-4 py-2 flex flex-col justify-between flex-grow">
  <div className="flex flex-col gap-2">
    <h4 className={`${isLarge ? 'text-3xl' : 'text-sm'} font-semibold text-white leading-snug line-clamp-1`}>
      {article.title}
    </h4>
    <p className={`${isLarge ? 'text-lg' : 'text-xs'} text-gray-300 leading-snug dark:text-white ${isLarge ? 'line-clamp-3' : 'line-clamp-2'}`}>
      {article.description}
    </p>
  </div>
</div>


      {author && (
        <div
          className={`flex items-center justify-between group-hover:bg-[#1c1c1c] bg-[#1c1c1c]  dark:bg-[#7e8082] group-hover:dark:bg-[#1c1c1c]  rounded-xl px-3 ${isLarge ? 'py-3 mt-24 mb-4' : 'py-2 mt-1 mb-2'} mx-3 mt-auto  transition-all duration-500`}>
          <div className="flex items-center gap-2">
            <img src={author.image} alt="author" className="w-10 h-10 rounded-md object-cover" />
            <div className="text-white text-xs">
              <p className="font-medium">{author.name}</p>
              <p className="text-[10px] text-gray-400 dark:text-white">{article.publishDate}</p>
            </div>
          </div>
          <button
            onClick={(e) => handleSaveClick(e, article)}
            className="text-white hover:text-yellow-300 transition cursor-pointer"
            title={isSaved(article.id) ? "Remove from Saved" : "Save Article"}>
            {isSaved(article.id) ? <BookmarkCheck size={22} /> : <Bookmark size={22} />}
          </button>
        </div>
      )}

    </div>
  );
});

export default Article;
