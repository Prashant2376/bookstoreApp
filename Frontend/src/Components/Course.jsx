import React, { useEffect, useState } from "react";
import Cards from "./Cards";
//import list from "../../public/list.json";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState("default");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      console.log("Starting API call to http://localhost:4001/book");
      try {
        const timestamp = new Date().getTime();
        const res = await axios.get(
          `http://localhost:4001/book?t=${timestamp}`,
          {
            headers: {
              "Cache-Control": "no-cache",
              Pragma: "no-cache",
            },
          }
        );
        console.log("API Response:", res.data);
        console.log("Number of books fetched:", res.data.length);
        console.log("First book:", res.data[0]);
        setBook(res.data);
        setFilteredBooks(res.data);

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(res.data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (error) {
        console.log("API Error:", error);
        console.log("Error message:", error.message);
        console.log("Error response:", error.response);
        setError(error.message);
        setLoading(false);
      }
    };
    getBook();
  }, []);

  // Filter and search logic
  useEffect(() => {
    let filtered = [...book];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // Price range filter
    filtered = filtered.filter(
      (item) => item.price >= priceRange.min && item.price <= priceRange.max
    );

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setFilteredBooks(filtered);
  }, [book, searchTerm, selectedCategory, priceRange, sortBy]);

  const handlePriceRangeChange = (type, value) => {
    setPriceRange((prev) => ({
      ...prev,
      [type]: parseFloat(value) || 0,
    }));
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have u{" "}
            <span className="text-pink-500">Here!</span>
          </h1>
          <p className="mt-6 text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Explore our curated collection of books and courses designed to
            inspire, educate, and empower you. Use the filters below to quickly
            find the perfect read or learning resource for your journey!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        {/* Compact Search and Filter Section */}
        <div className="mt-8 bg-gradient-to-br from-white to-pink-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-2xl p-4 md:p-6 border border-pink-100 dark:border-slate-600">
          <form className="flex flex-col md:flex-row md:items-end md:space-x-4 space-y-4 md:space-y-0">
            {/* Search Bar */}
            <div className="flex-1">
              <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-200">
                Search
              </label>
              <input
                type="text"
                placeholder="Book name or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700 dark:text-white text-sm"
              />
            </div>
            {/* Category Filter */}
            <div className="w-full md:w-48">
              <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-200">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700 dark:text-white text-sm"
              >
                <option value="All">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {/* Sort By */}
            <div className="w-full md:w-40">
              <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-200">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700 dark:text-white text-sm"
              >
                <option value="default">Default</option>
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
            {/* Price Range Filter */}
            <div className="flex flex-col md:flex-row md:items-center w-full md:w-56 gap-2 md:gap-1">
              <div className="flex-1">
                <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-200">
                  Min
                </label>
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) =>
                    handlePriceRangeChange("min", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700 dark:text-white text-sm"
                />
              </div>
              <span className="mx-2 text-gray-400 text-xs hidden md:inline">
                to
              </span>
              <div className="flex-1">
                <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-200">
                  Max
                </label>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) =>
                    handlePriceRangeChange("max", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700 dark:text-white text-sm"
                />
              </div>
            </div>
            {/* Clear Filters Button */}
            {(searchTerm ||
              selectedCategory !== "All" ||
              priceRange.min > 0 ||
              priceRange.max < 1000 ||
              sortBy !== "default") && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setPriceRange({ min: 0, max: 1000 });
                  setSortBy("default");
                }}
                className="text-xs text-pink-500 hover:text-pink-700 underline mt-2 md:mt-0 md:ml-2"
              >
                Clear All
              </button>
            )}
          </form>
          {/* Results Count */}
          <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 text-right">
            Showing {filteredBooks.length} of {book.length} books
          </div>
        </div>

        {/* Books Grid */}
        {loading ? (
          <div className="mt-8 text-center">
            <div className="text-gray-500 dark:text-gray-400 text-lg">
              Loading books...
            </div>
          </div>
        ) : error ? (
          <div className="mt-8 text-center">
            <div className="text-red-500 text-lg mb-4">Error: {error}</div>
            <div className="text-gray-500 dark:text-gray-400">
              Please make sure your backend server is running on localhost:4001
            </div>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4">
            {filteredBooks.map((item) => (
              <Cards key={item._id} item={item} />
            ))}
          </div>
        )}

        {/* No Results Message */}
        {!loading && filteredBooks.length === 0 && (
          <div className="mt-8 text-center">
            <div className="text-gray-500 dark:text-gray-400 text-lg">
              No books found matching your criteria.
            </div>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setPriceRange({ min: 0, max: 1000 });
                setSortBy("default");
              }}
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Course;
