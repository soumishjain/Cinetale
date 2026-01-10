import React from 'react'
import Card from './Card';

const Explorefullpage = () => {
    const moreMightLikeTitles = [
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
  {
    name: "Peaky Blinders",
    poster: "https://image.tmdb.org/t/p/w500/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg",
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
    name: "Ozark",
    poster: "https://i.pinimg.com/1200x/87/09/03/8709034c070c261e8a364f06587970cf.jpg",
    type: "Series",
    year: 2017,
  },
  {
    name: "Better Call Saul",
    poster: "https://i.pinimg.com/736x/e9/3d/6d/e93d6d6f23bc4c7eaa6b2f1f81731e62.jpg",
    type: "Series",
    year: 2015,
  },
  {
  name: "3 Idiots",
  poster: "https://i.pinimg.com/1200x/17/b3/5b/17b35b00f1e64d55dd43311c72fcdec2.jpg",
  type: "Movie",
  year: 2009,
},
{
  name: "Drishyam",
  poster: "https://i.pinimg.com/736x/14/37/48/1437487842aa9519262f44f00230c057.jpg",
  type: "Movie",
  year: 2015,
},
  {
    name: "Westworld",
    poster: "https://image.tmdb.org/t/p/w500/y55oBgf6bVMI7sFNXwJDrSIxPQt.jpg",
    type: "Series",
    year: 2016,
  },
  {
    name: "The Umbrella Academy",
    poster: "https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Euphoria",
    poster: "https://image.tmdb.org/t/p/w500/3Q0hd3heuWwDWpwcDkhQOA6TYWI.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Sherlock",
    poster: "https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg",
    type: "Series",
    year: 2010,
  },
  {
    name: "Vikings",
    poster: "https://image.tmdb.org/t/p/w500/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg",
    type: "Series",
    year: 2013,
  },
  {
    name: "The Queen’s Gambit",
    poster: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
    type: "Series",
    year: 2020,
  },
  {
    name: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    type: "Movie",
    year: 2010,
  },
  {
    name: "Fight Club",
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    type: "Movie",
    year: 1999,
  },
  {
    name: "Parasite",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    type: "Movie",
    year: 2019,
  },
  {
    name: "Joker",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    type: "Movie",
    year: 2019,
  },
  {
    name: "The Matrix",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    type: "Movie",
    year: 1999,
  },
  {
    name: "Gladiator",
    poster: "https://image.tmdb.org/t/p/w500/ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg",
    type: "Movie",
    year: 2000,
  },
  {
    name: "Forrest Gump",
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    type: "Movie",
    year: 1994,
  },
  {
    name: "The Shawshank Redemption",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    type: "Movie",
    year: 1994,
  },
  {
    name: "Blade Runner",
    poster: "https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
    type: "Movie",
    year: 1982,
  },
  {
    name: "Mad Max: Fury Road",
    poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    type: "Movie",
    year: 2015,
  },
];

  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium text-3xl'>You Might Like</h2>
        <div className='flex flex-wrap gap-5 mt-5'>
            {moreMightLikeTitles.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Explorefullpage
