import React, { createContext, useContext, useState, useEffect } from 'react';

const SavedArticlesContext = createContext();

export const SavedArticlesProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState(() => {
    // Inițializare din localStorage
    const stored = localStorage.getItem('savedArticles');
    return stored ? JSON.parse(stored) : [];
  });

  // Salvare în localStorage de fiecare dată când se schimbă
  useEffect(() => {
    localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
  }, [savedArticles]);

  const addArticle = (article) => {
    // evităm duplicatele
    if (!savedArticles.find(a => a.id === article.id)) {
      setSavedArticles(prev => [...prev, article]);
    }
  };

  const removeArticle = (articleId) => {
    setSavedArticles(prev => prev.filter(article => article.id !== articleId));
  };

  return (
    <SavedArticlesContext.Provider value={{ savedArticles, addArticle, removeArticle }}>
      {children}
    </SavedArticlesContext.Provider>
  );
};

export const useSavedArticles = () => useContext(SavedArticlesContext);
