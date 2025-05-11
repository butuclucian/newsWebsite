import React, { useState, useEffect } from 'react';
import { fullArticles } from '../../assets/assets';

const ListArticle = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const articles = Object.values(fullArticles);

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => {
        if (selectedCategory === 'News') {
          return article.section.startsWith('News');
        } else if (selectedCategory === 'Sports') {
          return article.section.startsWith('Sports');
        }
        return false;
    });

  const sortedArticles = filteredArticles.sort((a, b) => {
    const dateA = new Date(a.publishDate);
    const dateB = new Date(b.publishDate);

    if (sortOrder === 'asc') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className="text-center mt-10 mb-10 text-black text-2xl font-bold items-center">
      <div className="text-center text-black text-2xl font-bold items-center">
        <div className="flex justify-between items-center px-10 mb-6">
          <button onClick={toggleSortOrder}
            className="bg-transparent text-black font-semibold text-sm cursor-pointer hover:text-gray-600 transition-all duration-300 border-1 p-2 rounded-sm">
            Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
          </button>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-5 text-md px-5 md:px-20">
          <b>Image</b>
          <b>Title</b>
          <b>Category</b>
          <b>Date</b>
          <b className="text-center">Action</b>
        </div>

        {/* Articles */}
        <div className="flex flex-col gap-3">
          {sortedArticles.length === 0 ? (
            <p>No articles found for this category.</p>
          ) : (
            sortedArticles.map((article, index) => (
              <div key={index} className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-5 px-5 md:px-20 border text-sm">
                <img className="w-20 md:w-32 rounded-md max-h-30 object-cover" src={article.image} alt={article.title} />
                <p className="text-sm md:text-base">{article.title}</p>
                <p className="text-sm md:text-base">{article.section}</p>
                <p className="text-sm md:text-base">{article.publishDate}</p>

                {/* Dropdown Menu */}
                <div className="relative">
                  <button onClick={() => toggleDropdown(index)}
                    className="cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 hover:border-2 p-2 rounded-3xl">
                    Actions
                  </button>

                  {dropdownOpen === index && (
                    <div className="absolute right-0 top-5 mt-2 bg-white border rounded-md shadow-lg mx-auto p-1 border-black">
                      <button className="block w-full text-left p-3 hover:bg-gray-100 cursor-pointer">
                        Editare
                      </button>
                      <button className="block w-full text-left p-3 hover:bg-gray-100 cursor-pointer">
                        Ștergere
                      </button>
                      <button className="block w-full text-left p-3 hover:bg-gray-100 cursor-pointer">
                        Detalii
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ListArticle;
