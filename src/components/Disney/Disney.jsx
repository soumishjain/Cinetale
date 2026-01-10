import React from 'react'
import Card from './Card'

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
    poster: "https://i.pinimg.com/736x/99/cc/93/99cc938564619f66de419b029fb5fca5.jpg",
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
    poster: "https://i.pinimg.com/736x/73/ca/38/73ca384c28486c5a43b678eca4a55d61.jpg",
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
    poster: "https://i.pinimg.com/1200x/8e/c9/20/8ec9208a24ab6ba4d085e556fd6a7ddc.jpg",
    type: "Movie",
    year: 2022,
  },
];

  return (
    <div className='mt-10'>
      <div className=" top flex justify-between text-white mb-5">
        <h1 className='text-3xl font-medium'>{name}</h1>
        <button className='bg-white/50 px-4 py-2 rounded-lg font-medium'>See All</button>
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
