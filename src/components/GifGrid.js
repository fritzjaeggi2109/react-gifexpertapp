import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>
      {loading && <p className='animate__animated animate__bounceIn'>Loading...</p>}
      <div className='card-grid'>
        {gifs.map((gif) => {
          return <GifGridItem key={gif.id} {...gif} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
