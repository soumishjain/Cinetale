import React from 'react'
import Card from './Card'

const Apple = ({name}) => {
  const appleTvTitles = [
  {
    name: "Ted Lasso",
    poster: "https://image.tmdb.org/t/p/w500/5fhZdwP1DVJ0FyVH6vrFdHwpXIn.jpg",
    type: "Series",
    year: 2020,
  },
  {
    name: "Severance",
    poster: "https://image.tmdb.org/t/p/w500/lFf6LLrQjYldcZItzOkGmMMigP7.jpg",
    type: "Series",
    year: 2022,
  },
  {
    name: "The Morning Show",
    poster: "https://i.pinimg.com/736x/e8/38/5c/e8385c5d87a578110cd2cfa5ac4a3dcd.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "The Studio",
    poster: "https://i.pinimg.com/736x/07/f4/96/07f4967dd4aaec7055155320596516b3.jpg",
    type: "Series",
    year: 2025,
  },
  {
    name: "Silo",
    poster: "https://i.pinimg.com/736x/77/15/29/7715291bcd3ddbe99191f9ec9cfe0959.jpg",
    type: "Series",
    year: 2023,
  },
  {
    name: "Monarch: Legacy of Monsters",
    poster: "https://i.pinimg.com/736x/38/85/12/3885120ead42b9ba2d3721328d04865d.jpg",
    type: "Series",
    year: 2024,
  },
  {
    name: "Greyhound",
    poster: "https://image.tmdb.org/t/p/w500/kjMbDciooTbJPofVXgAoFjfX8Of.jpg",
    type: "Movie",
    year: 2020,
  },
  {
    name: "CODA",
    poster: "https://image.tmdb.org/t/p/w500/BzVjmm8l23rPsijLiNLUzuQtyd.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "Killers of the Flower Moon",
    poster: "https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
    type: "Movie",
    year: 2023,
  },
  {
    name: "Napoleon",
    poster: "https://i.pinimg.com/1200x/f8/ec/3a/f8ec3a0141596be0ae3e083573e1b023.jpg",
    type: "Movie",
    year: 2023,
  },
];

  return (
    <div className='mt-10'>
      <div className=" top flex justify-between text-white mb-5">
        <h1 className='text-3xl font-medium'>{name}</h1>
        <button className='bg-white/50 px-4 py-2 rounded-lg font-medium'>See All</button>
      </div>
      <div className='overflow-x-auto flex-nowrap noscrolbar flex gap-5 snap-x snap-mandatory snap-smooth'>
        {appleTvTitles.map((elem,idx) => {
          return <Card elem={elem}/>
        })}
      </div>
      </div>
  )
}

export default Apple
