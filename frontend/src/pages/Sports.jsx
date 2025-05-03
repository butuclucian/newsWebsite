import React, { useState } from 'react';
import { homepageArticles } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

import { useSavedArticles } from '../context/SavedArticlesContext';
import { toast } from 'react-toastify';
import { Bookmark, BookmarkCheck } from 'lucide-react'; // poți folosi orice iconiță preferi



// Extragem secțiunile unice din articole
const getUniqueSections = () => {
  const allSections = homepageArticles.sports.map(article => article.section);
  return ['All', ...new Set(allSections)];
};

const Sports = () => {

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

  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("All");
  const [visibleArticles, setVisibleArticles] = useState(6); // State pentru articolele vizibile

  const handleCardClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const filteredArticles =
    selectedSection === "All"
      ? homepageArticles.sports
      : homepageArticles.sports.filter(article => article.section.toLowerCase() === selectedSection.toLowerCase());

  const sections = getUniqueSections();

  const loadMoreArticles = () => {
    setVisibleArticles(prev => prev + 6); // pentru a adauga inca 6 articole vizibile
  };

  return (
    <section className="w-full py-25 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center">All Sports Articles</h1>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {sections.map((section) => (
            <button key={section} onClick={() => setSelectedSection(section)} className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer
                ${selectedSection === section ? 'bg-[#EDE618] text-black font-semibold' : 'bg-[#333] text-white hover:bg-[#EDE618]/80 hover:text-black'}`}>{section}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredArticles.slice(0, visibleArticles).map((card, idx) => (
            <div key={idx} className="group bg-[#848484]/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:bg-[#EDE618]/50 hover:shadow-[0px_0px_30px_#EDE618]/20 transition-all duration-300">
              <div onClick={() => handleCardClick(card.id)} className="cursor-pointer">
                <div className="mx-3 mt-3">
                  <img src={card.image} alt={card.title} className="w-full h-[12rem] object-cover rounded-xl" />
                </div>
                <div className="px-4 py-3 min-h-[5rem] flex flex-col justify-between">
                  <h4 className="text-lg font-semibold text-white line-clamp-1">{card.title}</h4>
                  <p className="text-sm text-gray-300 line-clamp-2">{card.description}</p>
                </div>
                <div className="flex items-center justify-between bg-[#1c1c1c] rounded-xl px-3 py-2 mx-3 mb-3">
                  <div className="flex items-center gap-2">
                    <img src={card.authorImage} alt="author" className="w-8 h-8 rounded-md object-cover" />
                    <div className="text-white text-xs">
                      <p className="font-medium">{card.authorName}</p>
                      <p className="text-[10px] text-gray-400">{card.publishDate}</p>
                    </div>
                  </div>
                  {/* Save button */}
                  <button
                    onClick={(e) => handleSaveClick(e, card)}
                    className="text-white hover:text-yellow-300 transition"
                    title={isSaved(card.id) ? "Remove from Saved" : "Save Article"}>
                    {isSaved(card.id) ? <BookmarkCheck size={22} /> : <Bookmark size={22} />}
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>


        {/* ---read more button ----*/}
        {visibleArticles < filteredArticles.length && (
          <div className="flex justify-center mt-8">
            <button onClick={loadMoreArticles} className="hover:bg-[#EDE618] hover:text-black hover:shadow-[0px_0px_30px_#EDE618]/20 bg-[#EDE618]/80 transition-all cursor-pointer px-6 py-2 rounded text-white font-medium" >
              Read More
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Sports;
