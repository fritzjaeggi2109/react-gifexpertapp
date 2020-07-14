import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {
  const [categories, setCategory] = useState([
    'Star Wars',
  ]);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategory={setCategory} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
