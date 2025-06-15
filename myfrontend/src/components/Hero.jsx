import React from 'react';

function Hero() {
  return (
    <div className="w-full h-auto bg-zinc-800 py-8 flex flex-row flex-wrap justify-evenly gap-4">
      {/* Card 1 */}
      <div className="w-[26rem] h-[22rem] border-2 bg-zinc-400 rounded-2xl px-2 shadow-2xl shadow-purple-400 flex flex-col justify-start">
        <div className="border border-blue-300 py-2 rounded-2xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Career advice"
            className="w-full h-40 object-cover rounded-xl"
          />
        </div>
        <div className="text-sm text-zinc-800 mt-2 px-2">
          Discover our extensive knowledge base, <strong>The Elevator</strong>, which gives you the best information on improving your resume and resume writing samples, taking your career to the next level.
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-[26rem] h-[22rem] border-2 bg-zinc-400 rounded-2xl px-2 shadow-2xl shadow-purple-400 flex flex-col justify-start">
        <div className="border border-blue-300 py-2 rounded-2xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Career advice"
            className="w-full h-40 object-cover rounded-xl"
          />
        </div>
        <div className="text-sm text-zinc-800 mt-2 px-2">
          Discover our extensive knowledge base, <strong>The Elevator</strong>, which gives you the best information on improving your resume and resume writing samples, taking your career to the next level.
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-[26rem] h-[22rem] border-2 bg-zinc-400 rounded-2xl px-2 shadow-2xl shadow-purple-400 flex flex-col justify-start">
        <div className="border border-blue-300 py-2 rounded-2xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Career advice"
            className="w-full h-40 object-cover rounded-xl"
          />
        </div>
        <div className="text-sm text-zinc-800 mt-2 px-2">
          Discover our extensive knowledge base, <strong>The Elevator</strong>, which gives you the best information on improving your resume and resume writing samples, taking your career to the next level.
        </div>
      </div>
    </div>
  );
}

export default Hero;