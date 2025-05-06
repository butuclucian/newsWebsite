import React, { useEffect, useRef, useState } from 'react';
import { homepageArticles } from '../assets/assets';
import { authors } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

// primul articol din 'news'
const largeCard = homepageArticles.sports[0];

// restul articolelor
const smallCards = homepageArticles.sports.slice(1, 9);

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const SportsSection = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const handleCardClick = (articleId) => {
    navigate(`/article/${articleId}`);
  }

  const chunkedSmallCards = chunkArray(smallCards, 4);

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

  const getAuthorById = (id) => authors.find((author) => author.id === id);


  return (
    <section id="sports" ref={sectionRef} className={`w-full text-white py-10 px-6 scroll-mt-20 transition-all duration-500 ease-in-out 
          ${isVisible ? 'blur-0 opacity-100 translate-y-0' : 'blur-sm opacity-60 translate-y-10'}`}>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-9xl font-bold text-center mb-12 relative">
          <span className="relative z-10">SPORTS</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-x-[2rem] gap-y-[3rem] relative z-10 top-[-80px]">

          {/* Large Card */}
          <div className="grid grid-cols-1 gap-y-[1.25rem] gap-x-6 max-w-135 mx-auto">
            <div onClick={() => handleCardClick(largeCard.id)} className="bg-[#848484]/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-[#EDE618]/50 hover:shadow-[0px_0px_30px_#EDE618]/20 flex flex-col">
              <div className="mx-4 mt-4">
                <img loading='lazy' src={largeCard.image} alt="thumb" className="w-full h-[18rem] object-cover rounded-xl" />
              </div>
              {/* ----- title + desc ---- */}
              <div className="px-4 py-2 min-h-[4.5rem] flex-grow">
                <h3 className="text-3xl font-semibold text-white leading-snug line-clamp-1 overflow-hidden">{largeCard.title}</h3>
                <p className="text-xl text-gray-300 leading-snug line-clamp-5 overflow-hidden pt-5">{largeCard.description}</p>
              </div>
              {/* ---- author + date ---- */}
              <div className="flex items-center justify-between bg-[#1c1c1c] rounded-xl px-3 py-3 mx-3 mt-24 mb-4 cursor-pointer">
                <div className="flex items-center gap-2">
                  <img loading='lazy' src={largeCard.authorImage} alt="author" className="w-10 h-10 rounded-md object-cover" />
                  <div className="text-white text-xs">
                    <p className="font-medium">{largeCard.authorName}</p>
                    <p className="text-[10px] text-gray-400">{largeCard.publishDate}</p>
                  </div>
                </div>
                <button className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5v14l7-5 7 5V5H5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Small Cards + Slider */}
          <div className="relative max-w-145 w-full">
            <div className="overflow-x-auto no-scrollbar scroll-fade" ref={sliderRef}>
              <div className="flex gap-6 pr-4 justify-center md:justify-start">
                {chunkedSmallCards.map((group, idx) => (
                  <div key={idx} className="grid grid-cols-2 gap-y-[1.25rem] gap-x-6 min-w-[35rem]">
                    {group.map((card, i) => {
                      const author = getAuthorById(card.authorId);
                      return (
                        <div key={i} onClick={() => handleCardClick(card.id)} className="bg-[#848484]/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:bg-[#EDE618]/50 hover:shadow-[0px_0px_30px_#EDE618]/20">
                          <div className="mx-3 mt-3">
                            <img loading='lazy' src={card.image} alt="thumb" className="w-full h-[10rem] object-cover rounded-2xl" />
                          </div>
                          <div className="px-4 py-2 min-h-[4.5rem] gap-2 flex flex-col justify-between">
                            <h4 className="text-sm font-semibold text-white leading-snug line-clamp-1 overflow-hidden">{card.title}</h4>
                            <p className="text-xs text-gray-300 leading-snug line-clamp-2 overflow-hidden">{card.description}</p>
                          </div>
                          <div className="flex items-center justify-between bg-[#1c1c1c] rounded-xl px-3 py-2 mx-3 mt-1 mb-2 cursor-pointer">
                            <div className="flex items-center gap-2">
                              {authors && (
                                <>
                                  <img loading='lazy' src={authors.image} alt="author" className="w-10 h-10 rounded-md object-cover" />
                                  <div className="text-white text-xs">
                                    <p className="font-medium">{authors.name}</p>
                                    <p className="text-[10px] text-gray-400">{card.publishDate}</p>
                                  </div>
                                </>
                              )}
                            </div>
                            <button className="text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5v14l7-5 7 5V5H5z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll buttons */}
            <div className="flex justify-center mt-4 gap-4">
              <button onClick={scrollLeft} className="bg-[#EDE618]/80 text-black px-4 py-2 rounded-full shadow hover:bg-[#EDE618]  hover:scale-105 transition-transform duration-300 cursor-pointer hover:shadow-[0px_0px_30px_#EDE618]/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
              </button>
              <button onClick={scrollRight} className="bg-[#EDE618]/80 text-black px-4 py-2 rounded-full shadow hover:bg-[#EDE618] hover:scale-105 transition-transform duration-300 cursor-pointer hover:shadow-[0px_0px_30px_#EDE618]/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SportsSection;
