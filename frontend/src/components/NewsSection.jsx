import React, { useEffect, useRef, useState } from 'react';
import { homepageArticles } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import Article from './Article';

const largeCard = homepageArticles.news[0];
const smallCards = homepageArticles.news.slice(1, 9);

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const NewsSection = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasEntered, setHasEntered] = useState(false); // Track if section has been visible

  const navigate = useNavigate();

  const handleCardClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const chunkedSmallCards = chunkArray(smallCards, 4); // 4 carduri (2x2)

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="news" ref={sectionRef} className={`w-full text-white py-10 px-6 scroll-mt-20 transition-all duration-1000 ease-in-out bg-[#1c1c1c] dark:bg-[#7e8082]/30
      ${isVisible ? 'blur-0 opacity-100 translate-y-0' : 'blur-sm opacity-60 translate-y-10'}`}>
      <div className="max-w-6xl mx-auto mt-50 sm:mt-0">
        <h2 className="hidden sm:block text-9xl font-bold text-center mb-12 relative">
          <span className="relative z-10">NEWS</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-x-[2rem] gap-y-[3rem] relative z-10 top-[-80px]">
          {/* Small Cards + Slider */}
          <div className="relative max-w-145 w-full mx-auto">
            <div className="overflow-x-auto no-scrollbar scroll-smooth" ref={sliderRef}>
              <div className="flex gap-6 pr-4">

                {/* Mobile View: one card per slide */}
                <div className="flex sm:hidden">
                  {chunkedSmallCards.flat().map((card, i) => (
                    <div key={i} className="min-w-[90vw] max-w-[90vw] px-4 box-border">
                      <Article article={card} isLarge={false} onClick={handleCardClick} />
                    </div>
                  ))}
                </div>


                {/* Desktop View: grouped grid */}
                <div className="hidden sm:flex gap-6 justify-center md:justify-start">
                  {chunkedSmallCards.map((group, idx) => (
                    <div key={idx} className="grid grid-cols-2 gap-y-[1.25rem] gap-x-6 min-w-[35rem]">
                      {group.map((card, i) => (
                        <Article key={i} article={card} isLarge={false} onClick={handleCardClick} />
                      ))}
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Scroll buttons */}
            <div className="flex justify-center mt-4 gap-4">
              <button
                onClick={scrollLeft}
                className="bg-[#EDE618]/80 text-black px-4 py-2 rounded-full shadow hover:bg-[#EDE618] hover:scale-105 transition-transform duration-300 cursor-pointer hover:shadow-[0px_0px_30px_#EDE618]/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className="bg-[#EDE618]/80 text-black px-4 py-2 rounded-full shadow hover:bg-[#EDE618] hover:scale-105 transition-transform duration-300 cursor-pointer hover:shadow-[0px_0px_30px_#EDE618]/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Large Card */}
          <div className="grid grid-cols-1 gap-y-[1.25rem] gap-x-6 max-w-135 mx-auto">
            <Article article={largeCard} isLarge={true} onClick={handleCardClick} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsSection;
