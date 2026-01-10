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
    poster: "https://image.tmdb.org/t/p/w500/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/4Kx6mKQpZpZpZpZp.jpg",
  },
  {
    title: "American Gangster",
    type: "Movie",
    year: 2007,
    poster: "https://image.tmdb.org/t/p/w500/8s6bKcPzYpZpZpZp.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/7OFqsVuS6DlVM10GUD72vCGpQm9.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/4kQ1Pz5rZpZpZpZp.jpg",
  },
  {
    title: "Catch Me If You Can",
    type: "Movie",
    year: 2002,
    poster: "https://image.tmdb.org/t/p/w500/sdYvxQw1q5d0V1ZpZpZp.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/7yqZ6qUqPqvR7jPpB8N5b1c2x0E.jpg",
  },
  {
    title: "The Sopranos",
    type: "Series",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/6GJQY9GxZpZpZpZp.jpg",
  },
  {
    title: "Ozark",
    type: "Series",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/m73x8r3o1GkH4OZ4C5PpN1kz.jpg",
  },
  {
    title: "True Detective",
    type: "Series",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/5tXHq6n8PpZpN0tYx1YkZpJg5Q.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/7yqUqPpZ6N5b1c2x0E.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/4w7E8YpZpZpZpZp.jpg",
  },
  {
    title: "Gangs of London",
    type: "Series",
    year: 2020,
    poster: "https://image.tmdb.org/t/p/w500/1p7w0pZpZpZpZp.jpg",
  },
  {
    title: "The Night Of",
    type: "Series",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/g5aKkqH9PpZp8z8Z7FZp7P8gJ.jpg",
  },
  {
    title: "Sacred Games",
    type: "Series",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/6K8M2t0pZpZpZpZp.jpg",
  },
  {
    title: "Delhi Crime",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/6KpZpZpZpZpZp.jpg",
  },
];

  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
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
