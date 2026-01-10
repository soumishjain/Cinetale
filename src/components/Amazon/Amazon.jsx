import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router';

const Amazon = ({name}) => {
  const amazonPrimeTitles = [
  {
    name: "The Boys",
    poster: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Fallout",
    poster: "https://i.pinimg.com/736x/f0/7c/dd/f07cdd2f2e07433f6f16e1022cbd8154.jpg",
    type: "Series",
    year: 2024,
  },
  {
    name: "Reacher",
    poster: "https://image.tmdb.org/t/p/w500/jFuH0md41x5mB4qj5344mSmtHrO.jpg",
    type: "Series",
    year: 2022,
  },
  {
    name: "The Lord of the Rings: The Rings of Power",
    poster: "https://image.tmdb.org/t/p/w500/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg",
    type: "Series",
    year: 2022,
  },
  {
    name: "Citadel",
    poster: "https://i.pinimg.com/736x/75/d7/d5/75d7d5aa75d7c11ceb337380ea8bb154.jpg",
    type: "Series",
    year: 2023,
  },
  {
    name: "Jack Ryan",
    poster: "https://i.pinimg.com/736x/a3/f7/61/a3f761c426c7e8ef765c72600556c6a4.jpg",
    type: "Series",
    year: 2018,
  },
  {
    name: "The Tomorrow War",
    poster: "https://image.tmdb.org/t/p/w500/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "Air",
    poster: "https://image.tmdb.org/t/p/w500/76AKQPdH3M8cvsFR9K8JsOzVlY5.jpg",
    type: "Movie",
    year: 2023,
  },
  {
    name: "Saltburn",
    poster: "https://image.tmdb.org/t/p/w500/qjhahNLSZ705B5JP92YMEYPocPz.jpg",
    type: "Movie",
    year: 2023,
  },
  {
    name: "Road House",
    poster: "https://image.tmdb.org/t/p/w500/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
    type: "Movie",
    year: 2024,
  },
];
const navigate = useNavigate();
  return (
    <div className='mt-10'>
      <div className=" top flex justify-between text-white mb-5">
        <h1 className='text-3xl font-medium'>{name}</h1>
        <button onClick={() => navigate('/amazon')} className='bg-white/50 px-4 py-2 rounded-lg font-medium transition-all ease duration-300 hover:bg-black cursor-pointer'>See All</button>
      </div>
      <div className='overflow-x-auto flex-nowrap noscrolbar flex gap-5 snap-x snap-mandatory snap-smooth'>
        {amazonPrimeTitles.map((elem,idx) => {
          return <Card elem={elem}/>
        })}
      </div>
      </div>
  )
}

export default Amazon
