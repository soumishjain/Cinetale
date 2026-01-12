import React from 'react'
import Card from '../Card';

const Crimefullpagecontent = () => {
    const crimeList = [
  // 🎥 MOVIES
  {
    title: "The Godfather",
    type: "Movie",
    year: 1972,
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    title: "The Godfather Part II",
    type: "Movie",
    year: 1974,
    poster: "https://i.pinimg.com/1200x/3a/2d/34/3a2d34f0a80d0a462ed5b953df963a3e.jpg",
  },
  {
    title: "Scarface",
    type: "Movie",
    year: 1983,
    poster: "https://image.tmdb.org/t/p/w500/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
  },
  {
    title: "Goodfellas",
    type: "Movie",
    year: 1990,
    poster: "https://image.tmdb.org/t/p/w500/6QMSLvU5ziIL2T6VrkaKzN2YkxK.jpg",
  },
  {
    title: "Pulp Fiction",
    type: "Movie",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
  },
  {
    title: "Casino",
    type: "Movie",
    year: 1995,
    poster: "https://image.tmdb.org/t/p/w500/4TS5O1IP42bY2BvgMxL156EENy.jpg",
  },
  {
    title: "Heat",
    type: "Movie",
    year: 1995,
    poster: "https://image.tmdb.org/t/p/w500/umSVjVdbVwtx5ryCA2QXL44Durm.jpg",
  },
  {
    title: "The Departed",
    type: "Movie",
    year: 2006,
    poster: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
  },
  {
    title: "Donnie Brasco",
    type: "Movie",
    year: 1997,
    poster: "https://i.pinimg.com/1200x/a8/a7/96/a8a79629129d60a0107d606aedf52880.jpg",
  },
  {
    title: "American Gangster",
    type: "Movie",
    year: 2007,
    poster: "https://i.pinimg.com/1200x/3b/2e/0c/3b2e0cb1650ad98c6c20176a0693865f.jpg",
  },
  {
    title: "The Irishman",
    type: "Movie",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg",
  },
  {
    title: "Training Day",
    type: "Movie",
    year: 2001,
    poster: "https://i.pinimg.com/1200x/08/f8/f7/08f8f79bc6ec982cc5932fcf55f690f4.jpg",
  },
  {
    title: "Zodiac",
    type: "Movie",
    year: 2007,
    poster: "https://image.tmdb.org/t/p/w500/6YmeO4pB7XTh8P8F960O1uA14JO.jpg",
  },
  {
    title: "Se7en",
    type: "Movie",
    year: 1995,
    poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
  },
  {
    title: "Prisoners",
    type: "Movie",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/uhviyknTT5cEQXbn6vWIqfM4vGm.jpg",
  },
  {
    title: "City of God",
    type: "Movie",
    year: 2002,
    poster: "https://i.pinimg.com/736x/30/95/43/309543710de2aff022d65bf39622c472.jpg",
  },
  {
    title: "Catch Me If You Can",
    type: "Movie",
    year: 2002,
    poster: "https://i.pinimg.com/1200x/93/98/a1/9398a15b1ff3f1a3afacb8dbbbcc25db.jpg",
  },

  // 📺 SERIES
  {
    title: "Breaking Bad",
    type: "Series",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
  },
  {
    title: "Better Call Saul",
    type: "Series",
    year: 2015,
    poster: "https://image.tmdb.org/t/p/w500/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg",
  },
  {
    title: "Narcos",
    type: "Series",
    year: 2015,
    poster: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
  },
  {
    title: "Peaky Blinders",
    type: "Series",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
  },
  {
    title: "Money Heist",
    type: "Series",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  },
  {
    title: "Mindhunter",
    type: "Series",
    year: 2017,
    poster: "https://i.pinimg.com/736x/de/ab/24/deab2416998776e5fb591b1bf564698d.jpg",
  },
  {
    title: "The Sopranos",
    type: "Series",
    year: 1999,
    poster: "https://i.pinimg.com/736x/6f/d6/a3/6fd6a3c4abf9167e3e6c4970eab7b2e2.jpg",
  },
  {
    title: "Ozark",
    type: "Series",
    year: 2017,
    poster: "https://i.pinimg.com/736x/ae/15/a1/ae15a133fe9701cfa48191f87613d707.jpg",
  },
  {
    title: "True Detective",
    type: "Series",
    year: 2014,
    poster: "https://i.pinimg.com/736x/10/5f/da/105fdaaaa3a5d0904168dd8035b0c86e.jpg",
  },
  {
    title: "Dexter",
    type: "Series",
    year: 2006,
    poster: "https://image.tmdb.org/t/p/w500/58H6Ctze1nnpS0s9vPmAAzPcipR.jpg",
  },
  {
    title: "Luther",
    type: "Series",
    year: 2010,
    poster: "https://i.pinimg.com/736x/0b/9c/09/0b9c09e24abfdbb55e4539d9220676ab.jpg",
  },
  {
    title: "The Wire",
    type: "Series",
    year: 2002,
    poster: "https://image.tmdb.org/t/p/w500/4lbclFySvugI51fwsyxBTOm4DqK.jpg",
  },
  {
    title: "Fargo",
    type: "Series",
    year: 2014,
    poster: "https://i.pinimg.com/1200x/4b/ac/d4/4bacd43d9b8d91de2de34368148bf370.jpg",
  },
  {
    title: "Gangs of London",
    type: "Series",
    year: 2020,
    poster: "https://i.pinimg.com/1200x/63/3a/bb/633abb3a993793cd362c88c64690b2d6.jpg",
  },
  {
    title: "The Night Of",
    type: "Series",
    year: 2016,
    poster: "https://i.pinimg.com/736x/d2/f2/db/d2f2db05681115727ad4e67e9aa9000d.jpg",
  },
  {
    title: "Sacred Games",
    type: "Series",
    year: 2018,
    poster: "https://i.pinimg.com/736x/9f/f1/c3/9ff1c3b1ac636f56083e7c707c3bc899.jpg",
  },
  {
    title: "Delhi Crime",
    type: "Series",
    year: 2019,
    poster: "https://i.pinimg.com/1200x/74/ee/02/74ee02cbbcef0c226ee79005aa703d18.jpg",
  },
];

  return (
    <div className='flex flex-col sm:pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>CRIME</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {crimeList.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Crimefullpagecontent
