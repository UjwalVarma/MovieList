import React from 'react';

function GenreFilter({ genres }) {
  const handleClick = (genre) => {
    console.log(`Filtering by ${genre}`);
  };

  return (
    <div className="genre-filter">
      <h2>Filter by Genre</h2>
      <div className="buttons">
        {genres.map((genre, index) => (
          <button key={index} onClick={() => handleClick(genre)}>{genre}</button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
