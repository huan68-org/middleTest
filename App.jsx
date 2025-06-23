import { useState } from 'react';
import MovieCard from './MovieCard';
import huan_1 from './photo/aoashi_card 1.png';
import huan_2 from './photo/attackontitan 1.png';
import huan_3 from './photo/boruto-naruto-next-generations 1.png';
import huan_4 from './photo/One-piece 1.png';
import huan_5 from './photo/spy_card 1.png';
import huan_6 from './photo/spy_carousel 1.png';

const movies = [
  { id: 1, title: 'One Piece', episode: 'tập 1018', image: huan_4, 
    description: 'Ta se tro thah vua hai tac' },
  { id: 2, title: 'Boruto Naruto Next Generations', episode: 'tật 250', image: huan_3, 
    description: 'Rasengannnnnnnn =))))' },
  { id: 3, title: 'Spy X Family', episode: 'tập 7', image: huan_5, 
    description: 'dobido ba du bi du bi ba du' },
  { id: 4, title: 'Shingeki no Kyojin', episode: 'tập 22228', image: huan_2,
     description: ' skibidi toilet' },
  { id: 5, title: 'Captain Tsubasa', episode: 'tập 8', image: huan_1, 
    description: 'A sigma boy' },
  { id: 6, title: 'Aoashi', episode: 'tập cuối', image: huan_6, 
    description: 'Khong bt phim nay ;(( ' },
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Anonime</h1>
        <nav>
          <a href="#" className="mr-4">Home</a>
          <a href="#" className="mr-4">List anime</a>
          <input type="text" placeholder="Search anime or movie" className="p-2 rounded bg-gray-800" />
        </nav>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Explore</h2>
          <p className="text-gray-400 mb-4">What are you gonna watch today?</p>
          <div className="relative bg-gray-800 p-6 rounded-lg">
            {selectedMovie ? (
              <>
                <img src={selectedMovie.image} alt={selectedMovie.title} className="w-full h-64 object-cover rounded-lg" />
                <h3 className="text-xl font-bold mt-4">{selectedMovie.title}</h3>
                <p className="text-gray-300">{selectedMovie.description}</p>
              </>
            ) : (
              <div className="text-center text-gray-500">Click a movie to explore!</div>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">New Realease</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;