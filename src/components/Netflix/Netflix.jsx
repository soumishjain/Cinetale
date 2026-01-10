import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom';

const Netflix = ({name}) => {
  const netflixFamous = [
  {
    name: "Breaking Bad",
    poster: "https://image.tmdb.org/t/p/w500/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
    type: "Series",
    year: 2008,
  },
  {
    name: "Stranger Things",
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    type: "Series",
    year: 2016,
  },
  {
    name: "Dark",
    poster: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    type: "Series",
    year: 2017,
  },
  {
    name: "Money Heist",
    poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    type: "Series",
    year: 2017,
  },
  {
    name: "Peaky Blinders",
    poster: "https://i.pinimg.com/736x/e0/05/47/e0054761767685e84ad65f6c766ca767.jpg",
    type: "Series",
    year: 2013,
  },
  {
    name: "Narcos",
    poster: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
    type: "Series",
    year: 2015,
  },
  {
    name: "The Witcher",
    poster: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Lucifer",
    poster: "https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
    type: "Series",
    year: 2016,
  },
  {
    name: "The Queen’s Gambit",
    poster: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
    type: "Series",
    year: 2020,
  },
  {
    name: "Extraction",
    poster: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
    type: "Movie",
    year: 2020,
  },
];
const navigate = useNavigate()
  return (
    <div className='mt-10'>
      <div className=" top flex justify-between text-white mb-5">
        <h1 className='text-3xl font-medium'>{name}</h1>
        <button onClick={() => navigate('/netflix')} className='bg-white/50 px-4 py-2 rounded-lg font-medium transition-all ease duration-300 hover:bg-black cursor-pointer'>See All</button>
      </div>
      <div className='overflow-x-auto flex-nowrap noscrolbar flex gap-5 snap-x snap-mandatory snap-smooth'>
        {netflixFamous.map((elem,idx) => {
        return <Card elem={elem}/>
      })}
      </div>
      </div>
  )
}

export default Netflix
