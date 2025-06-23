
import React from 'react';

function MovieCard({ movie, onClick }) {
  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={() => onClick(movie)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick(movie)}
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
        <p className="text-gray-400 text-sm">{movie.episode}</p>
        <p className="text-gray-300 text-sm">{movie.description}</p>
      </div>
    </div>
  );
}

export default MovieCard;