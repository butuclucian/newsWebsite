import React, { useState } from 'react';
import { homepageArticles } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import PageArticle from '../components/PageArticle';


const getUniqueSections = () => {
  const allSections = homepageArticles.news.map(article => article.section);
  return ['All', ...new Set(allSections)];
};

const News = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("All");
  const [visibleArticles, setVisibleArticles] = useState(6);

  const handleCardClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const filteredArticles =
    selectedSection === "All"
      ? homepageArticles.news
      : homepageArticles.news.filter(article => article.section.toLowerCase() === selectedSection.toLowerCase());

  const sections = getUniqueSections();

  const loadMoreArticles = () => {
    setVisibleArticles(prev => prev + 6); // pentru a adauga inca 6 articole vizibile
  };

  return (
    <section className="w-full py-25 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center">All News Articles</h1>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {sections.map((section) => (
            <button key={section} onClick={() => setSelectedSection(section)} className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer
                ${selectedSection === section ? 'bg-[#EDE618] text-black font-semibold' : 'bg-[#333] text-white hover:bg-[#EDE618]/80 hover:text-black'}`}>{section}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 cursor-pointer">
          {filteredArticles.slice(0, visibleArticles).map((card, idx) => (
            <PageArticle key={idx} article={card} isLarge={false} onClick={handleCardClick} />
          ))}
        </div>


        {/* ---read more button ----*/}
        {visibleArticles < filteredArticles.length && (
          <div className="flex justify-center mt-8">
            <button onClick={loadMoreArticles} className="hover:bg-[#EDE618] hover:text-black hover:shadow-[0px_0px_30px_#EDE618]/20 bg-[#EDE618]/80 transition-all cursor-pointer px-6 py-2 rounded text-white font-medium">
              Read More
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default News;
