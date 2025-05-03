import React, { useState } from 'react';
import { authors } from '../../assets/assets';

const AddArticle = () => {
  const [category, setCategory] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const [image, setImage] = useState(null);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);

    const subcategoryOptions = {
      News: ['Tech', 'Medicine', 'World', 'Politics'],
      Sports: ['Football', 'Tennis', 'Formula 1', 'Basketball'],
    };

    setSubcategories(subcategoryOptions[selected] || []);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" bg-white py-8 flex justify-center items-start ">
      <form className="w-full max-w-8xl grid grid-cols-1 md:grid-cols-[400px_1fr_260px] gap-8 p-4 md:p-10 items-start">

        {/* ---- articol image---- */}
        <div className="flex justify-center items-start ">
          <div className="flex flex-col justify-start">
            <p className="text-xl font-medium mb-2">Article Image</p>
            <label htmlFor="image0" className="cursor-pointer">
              <input accept="image/*" type="file" id="image0" hidden onChange={handleImageChange} required />
              <img src={image || 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png'} required alt="upload" width={400} height={400} className="border rounded" />
            </label>
          </div>
        </div>
        
        {/* ----title + content ---- */}
        <div className="flex flex-col gap-6 ">
          {/* --- title --- */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="article-title">Article Title</label>
            <input id="article-title" type="text" placeholder="Type here" className="outline-none py-2 px-3  border border-gray-500/40 rounded" required />
          </div>
          {/* ---- content---- */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="article-content">Article Content</label>
            <textarea id="article-content" rows={16} className="outline-none py-2 px-3  border border-gray-500/40 resize-none rounded" required placeholder="Type here"></textarea>
          </div>
        </div>

        {/* category subcategory author */}
        <div className="flex flex-col gap-6 w-64">
          {/* --- category ---- */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="category">Category</label>
            <select id="category" value={category} onChange={handleCategoryChange} className="outline-none py-2 px-3 border border-gray-500/40 shadow-md rounded-lg">
              <option value="">Select Category</option>
              <option value="News">News</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
          {/* ---- subcategory --- */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="subcategory">SubCategory</label>
            <select id="subcategory" className="outline-none py-2 px-3 border border-gray-500/40 shadow-md rounded-lg">
              <option value="">Select SubCategory</option>
              {subcategories.map((sub, index) => (
                <option key={index} value={sub}>{sub}</option>
              ))}
            </select>
          </div>

          {/* --- author --- */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="article-author">Article Author</label>
            <select id="article-author" className="outline-none py-2 px-3  border border-gray-500/40 shadow-md rounded-lg" required>
              <option value="">Select Author</option>
              {authors
                .filter((author) => author.section === category)
                .map((author) => (
                  <option key={author.id} value={author.name}>
                    {author.name}
                  </option>
                ))}
            </select>
          </div>


        </div>

        {/* --- post article button --- */}
        <div className="md:col-span-3 flex justify-center mt-16">
          <button type="submit" className=" hover:bg-black hover:text-white transition-all duration-500 bg-none outline-none rounded-4xl border border-gray-500 cursor-pointer px-8 py-2  text-black font-medium text-xl flex items-center gap-2">
            Post Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
