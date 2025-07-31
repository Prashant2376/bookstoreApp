import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className="relative w-full bg-gradient-to-br from-pink-100 via-white to-pink-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* Decorative blurred circles */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200 opacity-30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-20 gap-10">
          {/* Left: Text & CTA */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center order-2 md:order-1">
            <div className="backdrop-blur-xl bg-white/70 dark:bg-slate-800/70 rounded-3xl shadow-2xl p-8 md:p-12 space-y-8 border border-pink-100 dark:border-slate-700">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white drop-shadow-lg">
                Hello, welcome here to learn something <br />
                <span className="text-pink-500 animate-pulse">
                  new everyday!!!
                </span>
              </h1>
              <p className="text-base md:text-xl text-gray-700 dark:text-gray-300">
                Discover a world of knowledge and imagination at BookStore.
                Whether you're looking for the latest bestsellers, timeless
                classics, or hidden gems, we have something for every reader.
                Start your journey with us and unlock endless possibilities—one
                book at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
                <label className="input input-bordered flex items-center gap-2 w-full sm:w-auto bg-white/80 dark:bg-slate-900/80 rounded-xl shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow bg-transparent outline-none"
                    placeholder="Email"
                  />
                </label>
                <button className="btn btn-secondary px-8 py-3 rounded-xl text-lg font-bold shadow-lg bg-pink-500 hover:bg-pink-600 border-none transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          {/* Right: Banner Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
            <div className="relative">
              <img
                src={banner}
                className="w-[350px] md:w-[450px] h-auto rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800"
                alt="Banner"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-6 py-2 rounded-full shadow-lg text-lg font-semibold animate-bounce">
                Start Your Journey
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
