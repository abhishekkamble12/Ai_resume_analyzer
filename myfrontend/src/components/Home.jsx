import React from 'react';

function Home() {
  return (
    <div className="flex flex-row justify-center items-center h-auto w-auto text-white p-6 border-2 border-gray-600 bg-emerald-400">
      <div className="border-2 border-gray-600 text-center p-6  rounded-lg shadow-lg pl-4  ">
        <h1 className="font-[Oswald] text-4xl py-1 px-2"><span className='text-purple-500'>W</span>elcome to My Page</h1>
        <h2 className="font-[Oswald] text-2xl py-4">All about the AI-powered resume builder</h2>
        <h4 className="font-light text-lg max-w-md ">
          Only 2% of resumes win. Yours will be one of them. Let’s build you a resume that works.
        </h4>
      </div>
      <div className="mt-6">
        <img
          src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Professional workspace"
          className="max-w-full h-auto rounded-lg shadow-md px-10 py-2"
        />
      </div>
    </div>
  );
}

export default Home;