// src/components/FrontPage.js

import React from "react";

import {Link,Routes,Route} from "react-router-dom"

function FrontPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-green-400">
      <div className="bg-white bg-opacity-90 px-8 py-12 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Welcome to Colliewallah
        </h1>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg border-2 border-blue-500 transition duration-300">
          <Link to="/addcollie">AddCollie</Link>
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg border-2 border-green-500 transition duration-300">
           <Link to="/show">Show Existing Collies</Link> 
          </button>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
