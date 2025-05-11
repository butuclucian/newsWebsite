import React, { useState } from 'react';
import { authors } from '../../assets/assets';
import axios from 'axios';

const AddArticle = ({ token }) => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const [image, setImage] = useState(false);
  const [description, setDescription] = useState('');
  const [titleSuggestions, setTitleSuggestions] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [loadingTitles, setLoadingTitles] = useState(false);
  const [readTime, setReadTime] = useState('5');
  const [tags, setTags] = useState('');

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    const subcategoryOptions = {
      News: ['Tech', 'Medicine', 'World', 'Politics'],
      Sports: ['Football', 'Tennis', 'Formula 1', 'Basketball'],
    };
    setSubcategories(subcategoryOptions[selected] || []);
    setSubcategory('');
    setAuthorName('');
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

  const handleGenerateTitles = async () => {
    setLoadingTitles(true);
    try {
      const res = await axios.post('http://localhost:5000/api/openai/generate-titles', {
        description,
      });
      setTitleSuggestions(res.data.titles);
    } catch (err) {
      console.error('Eroare generare titluri:', err.message);
    } finally {
      setLoadingTitles(false);
    }
  };

  const handlePostArticle = async () => {
    try {
      const newArticle = {
        title: selectedTitle,
        description,
        section: category.toLowerCase(),
        subcategory,
        authorName,
        authorImage: authors.find((a) => a.name === authorName)?.image || '',
        publishDate: new Date().toISOString(),
        readTime,
        tags: tags.split(',').map(tag => tag.trim()),
        imageUrl: image,
      };

      const response = await axios.post(backendUrl + "/api/product/add", newArticle, {
        headers: { token },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setSelectedTitle('');
        setDescription('');
        setCategory('');
        setSubcategory('');
        setAuthorName('');
        setImage(null);
        setTitleSuggestions([]);
        setReadTime('5');
        setTags('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTitle || !description || !category || !subcategory || !authorName || !image) {
      alert('Completează toate câmpurile!');
      return;
    }
    handlePostArticle();
  };

  return (
    <div className="bg-white py-8 flex justify-center items-start">
      <form
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_1fr] gap-8 p-4 md:p-10 items-start"
        onSubmit={handleSubmit}
      >
        {/* ---- articol image---- */}
        <div className="flex justify-center items-start">
          <div className="flex flex-col justify-start">
            <p className="text-xl font-medium mb-2">Article Image</p>
            <label htmlFor="image0" className="cursor-pointer">
              <input accept="image/*" type="file" id="image0" hidden onChange={handleImageChange} required />
              <img
                src={image || 'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png'}
                alt="upload" className="border rounded-lg max-w-full h-auto" />
            </label>
          </div>
        </div>

        {/* ----title + content ---- */}
        <div className="flex flex-col gap-6">
          {/* --- title --- */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="article-title">Article Title</label>
            <input
              id="article-title" type="text" value={selectedTitle} onChange={(e) => setSelectedTitle(e.target.value)}
              placeholder="Type or click a suggestion"
              className="outline-none py-2 px-3 border border-gray-500/40 rounded"
              required
            />
          </div>

          {/* ---- content---- */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="article-content">Article Content</label>
            <textarea
              id="article-content" rows={12} value={description} onChange={(e) => setDescription(e.target.value)}
              className="outline-none py-2 px-3 border border-gray-500/40 resize-none rounded"
              required placeholder="Type here"
            ></textarea>

            <button
              type="button" onClick={handleGenerateTitles}
              className="mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-black border-1 transition cursor-pointer"
            >
              {loadingTitles ? 'Generating...' : 'Generate titles'}
            </button>

            {titleSuggestions.length > 0 && (
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-sm text-gray-500">Sugestii titluri generate:</p>
                {titleSuggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                    <span>{suggestion}</span>
                    <button
                      type="button" className="text-sm text-blue-500 hover:underline"
                      onClick={() => setSelectedTitle(suggestion)}
                    >
                      use
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* --- tags --- */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium">Tags (separate cu virgulă)</label>
            <input
              type="text" value={tags} onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. news, world, breaking"
              className="outline-none py-2 px-3 border border-gray-500/40 rounded"
            />
          </div>

          {/* --- readTime --- */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium">Estimated Read Time (minutes)</label>
            <input
              type="number" min={1} value={readTime} onChange={(e) => setReadTime(e.target.value)}
              className="outline-none py-2 px-3 border border-gray-500/40 rounded"
            />
          </div>
        </div>

        {/* category, subcategory, author */}
        <div className="flex flex-col gap-6 w-64">
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="category">Category</label>
            <select
              id="category" value={category} onChange={handleCategoryChange}
              className="outline-none py-2 px-3 border border-gray-500/40 shadow-md rounded-lg"
              required
            >
              <option value="">Select Category</option>
              <option value="News">News</option>
              <option value="Sports">Sports</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="subcategory">SubCategory</label>
            <select
              id="subcategory" value={subcategory} onChange={(e) => setSubcategory(e.target.value)}
              className="outline-none py-2 px-3 border border-gray-500/40 shadow-md rounded-lg"
              required
            >
              <option value="">Select SubCategory</option>
              {subcategories.map((sub, index) => (
                <option key={index} value={sub}>{sub}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="article-author">Article Author</label>
            <select
              id="article-author" value={authorName} onChange={(e) => setAuthorName(e.target.value)}
              className="outline-none py-2 px-3 border border-gray-500/40 shadow-md rounded-lg"
              required
            >
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
          <button
            type="submit"
            className="hover:bg-black hover:text-white transition-all duration-500 bg-none outline-none rounded-4xl border border-gray-500 cursor-pointer px-8 py-2 text-black font-medium text-xl flex items-center gap-2"
          >
            Post Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
