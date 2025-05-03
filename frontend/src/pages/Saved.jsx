import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSavedArticles } from '../context/SavedArticlesContext';
import { BookmarkX } from 'lucide-react';
import { toast } from 'react-toastify';

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
      : savedArticles.filter(article => article.category === selectedCategory);

  if (savedArticles.length === 0) {
    return (
      <div className="text-center text-gray-300 mt-20">
        <h2 className="text-3xl font-semibold mb-4">No saved articles yet</h2>
        <p className="text-sm">Start saving articles to read later!</p>
      </div>
    );
  }

  return (
    <section className="w-full py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 mt-10 text-center">Saved Articles</h1>

        {/* ---- filter category ----- */}
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-full border transition-all duration-300
                ${selectedCategory === cat
                  ? 'bg-[#EDE618] text-black font-semibold'
                  : 'bg-[#333] text-white hover:bg-[#EDE618]/80 hover:text-black'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* ----saved articles---- */}
        {filteredArticles.length === 0 ? (
          <div className="text-center text-gray-400 mt-10">No articles in this category.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredArticles.map((card, idx) => (
              <div key={idx} className="group bg-[#848484]/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:bg-[#EDE618]/50 hover:shadow-[0px_0px_30px_#EDE618]/20 transition-all duration-300">
                <div onClick={() => handleCardClick(card.id)} className="cursor-pointer">
                  <div className="mx-3 mt-3">
                    <img src={card.image} alt={card.title} className="w-full h-[12rem] object-cover rounded-xl" />
                  </div>
                  <div className="px-4 py-3 min-h-[5rem] flex flex-col justify-between">
                    <h4 className="text-lg font-semibold text-white line-clamp-1">{card.title}</h4>
                    <p className="text-sm text-gray-300 line-clamp-2">{card.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-[#1c1c1c] rounded-xl px-3 py-2 mx-3 mb-3">
                  <div className="flex items-center gap-2">
                    <img src={card.authorImage} alt="author" className="w-8 h-8 rounded-md object-cover" />
                    <div className="text-white text-xs">
                      <p className="font-medium">{card.authorName}</p>
                      <p className="text-[10px] text-gray-400">{card.publishDate}</p>
                    </div>
                  </div>
                  <button onClick={(e) => handleRemove(e, card.id)} className="text-white hover:text-red-400 transition z-10" title="Remove from saved">
                    <BookmarkX size={22} />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

    </section>
  );
};

export default Saved;
