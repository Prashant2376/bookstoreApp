import React from "react";

function About() {
  return (
    <dialog id="about_modal" className="modal">
      <div className="modal-box w-11/12 max-w-4xl bg-gradient-to-br from-white to-pink-50 dark:from-slate-800 dark:to-slate-700">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 flex items-center">
              <span className="text-pink-500 mr-3">📚</span>
              About BookStore
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your gateway to endless knowledge and imagination
            </p>
          </div>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              ✕
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg border border-pink-100 dark:border-slate-600">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="text-pink-500 mr-2">🌟</span>
                Our Story
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded with a passion for literature and technology, BookStore
                emerged from a simple idea: making quality books accessible to
                everyone, everywhere. What started as a small local bookstore
                has grown into a comprehensive digital platform serving readers
                worldwide.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg border border-pink-100 dark:border-slate-600">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="text-pink-500 mr-2">🎯</span>
                Our Mission
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To inspire, educate, and connect people through the power of
                books. We believe that every book has the potential to change a
                life, and we're committed to bringing the best literature to our
                community of readers.
              </p>
            </div>
          </div>

          {/* Right Column - Stats & Features */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="mr-2">📊</span>
                By The Numbers
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-sm opacity-90">Books Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm opacity-90">Happy Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm opacity-90">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Support</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg border border-pink-100 dark:border-slate-600">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="text-pink-500 mr-2">✨</span>
                What We Offer
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-pink-500 mr-3">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Curated book collections
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-pink-500 mr-3">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Expert recommendations
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-pink-500 mr-3">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Secure shopping experience
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-pink-500 mr-3">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Fast worldwide delivery
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-pink-500 mr-3">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    24/7 customer support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Join Our Reading Community
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Discover new worlds, expand your knowledge, and connect with
              fellow book lovers
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <span className="text-pink-500 mr-1">📧</span>
                hello@bookstore.com
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <span className="text-pink-500 mr-1">📞</span>
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <span className="text-pink-500 mr-1">📍</span>
                BookStore HQ, Literary Lane
              </div>
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default About;
