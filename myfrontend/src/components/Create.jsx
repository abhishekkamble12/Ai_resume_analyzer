import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ATS from './ATS';
function Create() {
  return (
    <div className="w-full min-h-screen border-2 text-blue-50 relative">
      <div className="flex flex-col justify-center items-center pt-16">
        <h1 className="font-[Sofia] text-5xl p-1 mb-4">Resume Templates</h1>
        <div className="font-[AlumniSansSC] text-2xl p-3 text-center">
          Each resume template is designed to follow the exact rules you need to get hired faster.
        </div>
        <p className="font-[AlumniSansSC] text-2xl text-center">
          Use our resume templates and get free access to 18 more career tools!
        </p>
      </div>
      <hr className="w-11/12 max-w-3xl mx-auto h-1 border-4 border-amber-500 my-5" />

      {/* Navigation List */}
      <div className="w-11/12 max-w-2xl mx-auto h-12 rounded-3xl border-2 mt-6">
        <ul className="flex flex-row justify-evenly items-center h-full">
          <li>
            <Link
              to="./create/temp"
              className="border-2 rounded-2xl py-0.5 px-2 m-1.5 hover:bg-amber-500 hover:text-black transition-colors"
            >
              TEMPLATE
            </Link>
          </li>
          <li>
            <Link
              to=".ats"
              className="border-2 rounded-2xl py-0.5 px-2 m-1.5 hover:bg-amber-500 hover:text-black transition-colors"
            >
              ATS
            </Link>
            
          </li>
           <li>
            <Link
              to="/AI"
              className="border-2 rounded-2xl py-0.5 px-2 m-1.5 hover:bg-amber-500 hover:text-black transition-colors"
            >
              AI
            </Link>
            
          </li>
        </ul>
      </div>

      {/* Sub-Routes */}
      <div className="w-11/12 max-w-5xl mx-auto">
        <Routes>
          <Route
            path="temp"
            element={
              <div className="w-full p-4 mt-4 text-blue-50">
                <h2 className="text-3xl font-bold">Template Content</h2>
                <p>Customize your resume template here.</p>
              </div>
            }
          />
          <Route
            path=".ats"
            element={
              <div className="w-full p-4 mt-4 text-blue-50">
                
                <h2 className="text-3xl font-bold">ATS Content</h2>
                <p>Optimize your resume for ATS systems here.</p>
                <div>
                    <ATS/>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Create;