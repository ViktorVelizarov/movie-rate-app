
import { fetchPopular, fetchMovieDetails }from '@/utils'
import React from 'react'
import UpcomingMovCard from './MovieCard';
import MaxWidthWrapper from './MaxWidthWrapper';
import MovieCard from './MovieCard';

export default async function UpcomingMovies() {
    const upcomingMovies = await fetchPopular();
    console.log(upcomingMovies)
    const movieDetails = await fetchMovieDetails()

    const isDataEmpty = !Array.isArray(upcomingMovies.results) || upcomingMovies.results.length < 1 || !upcomingMovies.results;
  return (  
    <MaxWidthWrapper>
    <main className='bg-black'>
    <h1 className='text-white'>Popular:</h1>
    {!isDataEmpty ? (
          <section>
            <div className='flex flex-row gap-3'>
              {upcomingMovies.results?.slice(0, 6).map((upcomingMovie: {id: string, title: string,poster_path: string, backdrop_path: string; } ) => (
                
                <MovieCard title={upcomingMovie.title} poster={upcomingMovie.poster_path} id={upcomingMovie.id}/>
              ))}
            </div>
          </section>
        ) : (
          <div>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          </div>
        )}

   
    </main>
    </MaxWidthWrapper>
  ) 
}
