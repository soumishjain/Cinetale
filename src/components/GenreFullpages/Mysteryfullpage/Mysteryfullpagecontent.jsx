import React from 'react'
import Card from '../Card';

const Mysteryfullpagecontent = () => {
    const mysteryList = [
  // 🎥 MOVIES
  {
    title: "Knives Out",
    type: "Movie",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
  },
  {
    title: "Glass Onion: A Knives Out Mystery",
    type: "Movie",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
  },
  {
    title: "The Prestige",
    type: "Movie",
    year: 2006,
    poster: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
  },
  {
    title: "Shutter Island",
    type: "Movie",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg",
  },
  {
    title: "Gone Girl",
    type: "Movie",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/qymaJhucquUwjpb8oiqynMeXnID.jpg",
  },
  {
    title: "Se7en",
    type: "Movie",
    year: 1995,
    poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
  },
  {
    title: "Zodiac",
    type: "Movie",
    year: 2007,
    poster: "https://image.tmdb.org/t/p/w500/6YmeO4pB7XTh8P8F960O1uA14JO.jpg",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    type: "Movie",
    year: 2011,
    poster: "https://image.tmdb.org/t/p/w500/voxRWFTtagLiqnC7gU9Jt9A0xYb.jpg",
  },
  {
    title: "Prisoners",
    type: "Movie",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/uhviyknTT5cEQXbn6vWIqfM4vGm.jpg",
  },
  {
    title: "Memento",
    type: "Movie",
    year: 2000,
    poster: "https://image.tmdb.org/t/p/w500/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg",
  },
  {
    title: "The Sixth Sense",
    type: "Movie",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/4AfSDjjCy6T5LA1TMz0Lh2HlpRh.jpg",
  },
  {
    title: "The Others",
    type: "Movie",
    year: 2001,
    poster: "https://image.tmdb.org/t/p/w500/1kF1Gf7rTn2z5mT5dZ8P0lF2b6L.jpg",
  },
  {
    title: "The Da Vinci Code",
    type: "Movie",
    year: 2006,
    poster: "https://image.tmdb.org/t/p/w500/8ZTVqvKDQ8o3m8rM0wT4zJ7lB0F.jpg",
  },
  {
    title: "Searching",
    type: "Movie",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/5PqD8kFz1z0pniS3pSke1Mt2rt7.jpg",
  },
  {
    title: "The Game",
    type: "Movie",
    year: 1997,
    poster: "https://image.tmdb.org/t/p/w500/5s0B5rZx6qYz0x0m5Hq8C7U8y0H.jpg",
  },
  {
    title: "Enemy",
    type: "Movie",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/lY0h0jJ4Pp3p3G1h0m7J9jYpY9x.jpg",
  },
  {
    title: "The Nice Guys",
    type: "Movie",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/4GWz0X9n8Xy2Y0n2Nn9R2V4U1bK.jpg",
  },

  // 📺 SERIES
  {
    title: "Sherlock",
    type: "Series",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg",
  },
  {
    title: "Dark",
    type: "Series",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
  },
  {
    title: "True Detective",
    type: "Series",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/5tXHq6n8PpZpN0tYx1YkZpJg5Q.jpg",
  },
  {
    title: "Mindhunter",
    type: "Series",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/7yqZ6qUqPqvR7jPpB8N5b1c2x0E.jpg",
  },
  {
    title: "The Sinner",
    type: "Series",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/9iZxGJYp8Jp8KkK8pZ7Z0H8Pp.jpg",
  },
  {
    title: "Sharp Objects",
    type: "Series",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/5E7pYp1Zp8KJYpZ5Yp7Zp.jpg",
  },
  {
    title: "The Night Of",
    type: "Series",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/g5aKkqH9PpZp8z8Z7FZp7P8gJ.jpg",
  },
  {
    title: "Only Murders in the Building",
    type: "Series",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/sY8JcDq4mY7ZyF3zK3VZzY6Zp.jpg",
  },
  {
    title: "Broadchurch",
    type: "Series",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/jg8Yv3pZpZpZpZp.jpg",
  },
  {
    title: "The Outsider",
    type: "Series",
    year: 2020,
    poster: "https://image.tmdb.org/t/p/w500/n2z8y0M7B5YwZqL2P9R5M6yJZLx.jpg",
  },
  {
    title: "Fargo",
    type: "Series",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/4w7E8YpZpZpZpZp.jpg",
  },
  {
    title: "Mare of Easttown",
    type: "Series",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/78Y1K6QpZpZpZpZp.jpg",
  },
  {
    title: "Luther",
    type: "Series",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/7yqUqPpZ6N5b1c2x0E.jpg",
  },
  {
    title: "Twin Peaks",
    type: "Series",
    year: 1990,
    poster: "https://image.tmdb.org/t/p/w500/6kM5n9xkPpZpZpZp.jpg",
  },
  {
    title: "The Watcher",
    type: "Series",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/2pCk9n0fYpZpJZpZpZp.jpg",
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
        <h2 className='text-white font-medium  text-3xl'>MYSTERY</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {mysteryList.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Mysteryfullpagecontent
