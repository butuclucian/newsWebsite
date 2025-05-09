import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSavedArticles } from '../context/SavedArticlesContext';
import { toast } from 'react-toastify';

import PageArticle from '../components/PageArticle';

const Saved = () => {
  const { savedArticles, removeArticle } = useSavedArticles();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleRemove = (e, articleId) => {
    e.stopPropagation();
    removeArticle(articleId);
    toast.info("Article removed from saved");
  };

  const handleCardClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const categories = ["All", "News", "Sports"];

  const filteredArticles =
  selectedCategory === "All"
    ? savedArticles
    : savedArticles.filter(article =>
        article.category.toLowerCase() === selectedCategory.toLowerCase()
      );


  if (savedArticles.length === 0) {
    return (
      <div className="text-center text-gray-300 mt-30">
        <h2 className="text-3xl font-semibold mb-4">No saved articles yet</h2>
        <p className="text-sm">Start saving articles to read later!</p>
      </div>
    );
  }

  return (
    <section className="w-full py-25 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center">Saved Articles</h1>

        {/* ---- filter category ----- */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-full border transition-all duration-300
                ${selectedCategory === cat
                  ? 'bg-[#EDE618] text-black font-semibold'
                  : 'bg-[#333] text-white hover:bg-[#EDE618]/80 hover:text-black'}`}>
              {cat}
            </button>
          ))}
        </div> */}

        {/* ----saved articles---- */}
        {filteredArticles.length === 0 ? (
          <div className="text-center text-gray-400 mt-10">No articles in this category.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 cursor-pointer">
          {filteredArticles.map((card, idx) => (
            <PageArticle key={idx} article={card} isLarge={false} onClick={handleCardClick} />
          ))}
        </div>
        )}

      </div>

    </section>
  );
};

export default Saved;
