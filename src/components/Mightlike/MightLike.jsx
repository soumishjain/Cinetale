import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router';

const MightLike = ({name}) => {
  const freshMightLikeTitles = [
  {
    name: "Black Mirror",
    poster: "https://i.pinimg.com/1200x/ab/9c/8e/ab9c8e8048fec1b54ef1fdcb27c37bae.jpg",
    type: "Series",
    year: 2011,
  },
  {
    name: "Chernobyl",
    poster: "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Mindhunter",
    poster: "https://i.pinimg.com/1200x/de/ab/24/deab2416998776e5fb591b1bf564698d.jpg",
    type: "Series",
    year: 2017,
  },
  {
    name: "The Last of Us",
    poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    type: "Series",
    year: 2023,
  },
  {
    name: "Dune",
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "John Wick",
    poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    type: "Movie",
    year: 2014,
  },
  {
    name: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    type: "Movie",
    year: 2008,
  },
  {
    name: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    type: "Movie",
    year: 2014,
  },
  {
    name: "Prison Break",
    poster: "https://image.tmdb.org/t/p/w500/5E1BhkCgjLBlqx557Z5yzcN0i88.jpg",
    type: "Series",
    year: 2005,
  },
  {
    name: "The Office (US)",
    poster: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
    type: "Series",
    year: 2005,
  },
];
const navigate = useNavigate();
  return (
    <div>
      <div className=" top flex justify-between text-white mb-5">
        <h1 className='text-3xl font-medium'>{name}</h1>
        <button onClick={() => navigate('/explore')} className='bg-white/50 px-4 py-2 rounded-lg cursor-pointer font-medium transition-all ease duration-300 hover:bg-black'>See All</button>
      </div>
      <div className='overflow-x-auto flex-nowrap noscrolbar flex gap-5 snap-x snap-mandatory snap-smooth'>
        {freshMightLikeTitles.map((elem,idx) => {
          return <Card elem={elem}/>
        })}
      </div>
    </div>
  )
}

export default MightLike