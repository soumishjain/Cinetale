import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router';

const Disney = ({name}) => {
  const jioHotstarTitles = [
  {
    name: "Game of Thrones",
    poster: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    type: "Series",
    year: 2011,
  },
  {
    name: "House of the Dragon",
    poster: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
    type: "Series",
    year: 2022,
  },
  {
    name: "Loki",
    poster: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg",
    type: "Series",
    year: 2021,
  },
  {
    name: "The Mandalorian",
    poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Avengers: Endgame",
    poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    type: "Movie",
    year: 2019,
  },
  {
    name: "Aarya",
    poster: "https://i.pinimg.com/1200x/3a/15/e8/3a15e8c6cde87758139278ae26a5c0ac.jpg",
    type: "Series",
    year: 2020,
  },
  {
    name: "Criminal Justice",
    poster: "https://i.pinimg.com/736x/58/50/e7/5850e78dae228f45d2bae3b051f27d36.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Special Ops",
    poster: "https://i.pinimg.com/1200x/c4/ad/b1/c4adb1624fbfc176c57dd1acc13f3819.jpg",
    type: "Series",
    year: 2020,
  },
  {
    name: "The Night Manager (India)",
    poster: "https://i.pinimg.com/1200x/5c/6b/72/5c6b723970f21871a846dc665da631c5.jpg",
    type: "Series",
    year: 2023,
  },
  {
    name: "Brahmāstra: Part One – Shiva",
    poster: "https://i.pinimg.com/1200x/98/3b/93/983b9336b6d69fe17ae6b483c0ece9c1.jpg",
    type: "Movie",
    year: 2022,
  },
];
const navigate = useNavigate();
  return (
    <div className='mt-10'>
      <div className=" top flex justify-between text-white mb-5">
        <h1 className='text-3xl font-medium'>{name}</h1>
        <button onClick={() => navigate('/disney')} className='bg-white/50 px-4 py-2 rounded-lg font-medium transition-all ease duration-300 hover:bg-black cursor-pointer'>See All</button>
      </div>
      <div className='overflow-x-auto flex-nowrap noscrolbar flex gap-5 snap-x snap-mandatory snap-smooth'>
        {jioHotstarTitles.map((elem,idx) => {
          return <Card elem={elem}/>
        })}
      </div>
      </div>
  )
}

export default Disney
