import React from 'react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Welcome to the Form Builder</h2>
      <p className="text-gray-600 text-center">Start creating your own custom forms!</p>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Create a New Form</h3>
        <input type="text" placeholder="Form Title" className="w-full p-2 mb-4 border rounded" />
        <textarea placeholder="Form Description" className="w-full p-2 mb-4 border rounded"></textarea>
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Create Form
        </button>
      </div>
    </div>
  );
};

export default Home;
