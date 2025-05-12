import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="relative min-h-screen bg-pink-200 flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Decorative Flower Animations */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Original Flowers */}
        <div className="absolute top-5 left-0 animate-bounce-slow text-xl sm:text-3xl">
          <img src="https://cdn.pixabay.com/photo/2017/07/04/19/12/flower-clipart-2472229_1280.png" className="w-40 sm:w-50" />
        </div>
        <div className="absolute top-20 -right-16 animate-bounce-slower text-xl sm:text-3xl">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/013/216/728/small_2x/hand-painted-autumn-floral-bouquets-floral-compositions-with-autumn-flowers-png.png" className="w-40 sm:w-50" />
        </div>
        <div className="absolute -bottom-5 right-0 animate-bounce-slower text-xl sm:text-3xl">
          <img src="https://png.pngtree.com/png-clipart/20241102/original/pngtree-blue-flowers-isolated-on-black-background-stock-illustration-clipart-png-image_16632728.png" className="w-40 sm:w-50" />
        </div>

        {/* Additional Flowers */}
        <div className="absolute -top-3 right-20 animate-bounce-slower text-xl sm:text-3xl">
          <img src="https://www.pngkey.com/png/full/0-4691_clip-transparent-stock-flowers-clipart-transparent-transparent-watercolor.png" className="w-40 sm:w-50" />
        </div>
        <div className="absolute -bottom-5 -left-5 animate-bounce-slow">
          <img src="/pinkflower.png" className="w-40 sm:w-50" />
        </div>
        <div className="absolute top-1/2 -left-10 animate-bounce-slower text-xl sm:text-3xl">
          <img src="/moreflowers.png" className="w-40 sm:w-50" />
        </div>
        <div className="absolute top-1/2 -right-16 animate-bounce-slow text-xl sm:text-3xl">
          <img src="/rose.png" className="w-40 sm:w-50" />
        </div>
      </motion.div>

      {/* Main Greeting with Glow */}
      <div className="absolute top-44 z-10 text-center mb-6">
        {/* Glowing Background */}
        {/* Glowing Background */}
        <div className="absolute inset-0 flex items-center justify-center z-[-1]">
          <div className="w-[500px] h-[200px] rounded-full bg-white opacity-100 blur-[120px]"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-[-1]">
          <div className="absolute left-[49.6px] -bottom-[294px] w-[300px] h-[300px] bg-yellow-200/5w opacity-10 blur-[100px] rounded-full animate-sparkle"></div>   
        </div>  

        <div
          className="text-6xl sm:text-8xl md:text-10xl font-extrabold text-pink-700 drop-shadow-lg tracking-wide leading-snug"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          <span className="inline-block bg-gradient-to-r from-pink-500 via-red-400 to-pink-500 text-transparent bg-clip-text p-4 sm:p-10">
            Happy Mother's Day Mom!
          </span>
        </div>
      </div>

      <div>
              
        <div className="absolute bottom-52 left-[100px] mt-8 sm:mt-12 z-10">
          <img
            src="/pig.png"
            className="w-52 sm:w-92 h-auto mx-auto drop-shadow-xl"
          />
        </div>

        <div className="absolute bottom-48 right-14 mt-8 sm:mt-12 z-10">
          <img
            src="/lowqualitydog.png"
            className="w-40 sm:w-52 h-auto mx-auto drop-shadow-xl"
          />
        </div>
        <div className="absolute bottom-[199px] left-[86px] mt-8 sm:mt-12 z-10">
          <img
            src="/snake.png"
            className="w-[100px] sm:w-92 h-auto mx-auto drop-shadow-xl"
          />
        </div>
        {/* Cute Mouse Art */}
        <div className="absolute bottom-[172px] left-[115px] mt-8 sm:mt-12 z-10">
          <img
            src="/istockphoto-955952520-612x612.png"
            alt="Cute Mouse Clipart"
            className="w-40 sm:w-52 h-auto mx-auto drop-shadow-xl"
          />
        </div>
      </div>
      {/* Custom Animations */}
      <style>
        {`
          .animate-bounce-slow {
            animation: bounce 6s infinite;
          }
          .animate-bounce-slower {
            animation: bounce 8s infinite;
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .animate-sparkle {
            animation: sparklePulse 3s ease-in-out infinite;
          }

          @keyframes sparklePulse {
            0%, 100% {
              opacity: 0.8;
              transform: scale(1);
              filter: brightness(1.2);
            }
            50% {
              opacity: 1;
              transform: scale(1.05);
              filter: brightness(1.6);
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
