import React from 'react';
import { motion } from 'framer-motion';
import { latestArticles } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  const handleCardClick = (articleId) => {
    navigate(`/article/${articleId}`);
  }


  return (
    <div className="relative py-36 md:flex flex-col md:flex-row gap-12 max-w-[1200px] mx-auto justify-end hidden scroll-smooth px-4">

      {/* Fade-in from top for text */}
      <motion.h2 initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3.2 }}
        className="text-white text-9xl font-bold tracking-wider transform rotate-[-90deg] origin-left absolute right-[-5rem] top-4/5 -translate-y-1/2 hidden md:block z-0 dark:text-[#7e8082]">LATEST
      </motion.h2>

      {/* Fade-in from right for container */}
      <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3.2 }}
        className="flex-1 bg-[#848484]/50 backdrop-blur-sm rounded-xl shadow-lg p-3 space-y-1 max-w-[350px] z-10 dark:bg-[#7e8082]/80">
        {latestArticles.map((article, index) => (
          <div key={index} onClick={() => handleCardClick(article.id)} className="flex items-start hover:scale-105 hover:bg-[#EDE618]/50  hover:shadow-[0px_0px_30px_#EDE618]/20 transition-all duration-300 p-2 rounded-lg cursor-pointer">
            <div className="h-20 w-20 bg-cover bg-center rounded-lg mr-4 flex-shrink-0 " style={{ backgroundImage: `url(${article.image})` }} title={article.title}/>
            <div>
              <h3 className="text-white font-bold text-sm">{article.title}</h3>
              <p className="text-white font-light text-xs">{article.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
