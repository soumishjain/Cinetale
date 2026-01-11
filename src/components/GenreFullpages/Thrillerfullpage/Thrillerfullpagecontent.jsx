import React from 'react'
import Card from '../Card';

const Thrillerfullpagecontent = () => {
    const thrillerList = [
  // 🎥 MOVIES
  {
    title: "Se7en",
    type: "Movie",
    year: 1995,
    poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
  },
  {
    title: "Gone Girl",
    type: "Movie",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/qymaJhucquUwjpb8oiqynMeXnID.jpg",
  },
  {
    title: "Prisoners",
    type: "Movie",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/uhviyknTT5cEQXbn6vWIqfM4vGm.jpg",
  },
  {
    title: "Shutter Island",
    type: "Movie",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg",
  },
  {
    title: "Fight Club",
    type: "Movie",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  },
  {
    title: "Nightcrawler",
    type: "Movie",
    year: 2014,
    poster: "https://i.pinimg.com/736x/5a/c3/25/5ac32531eba73c28ce80ba27f154d978.jpg",
  },
  {
    title: "Zodiac",
    type: "Movie",
    year: 2007,
    poster: "https://image.tmdb.org/t/p/w500/6YmeO4pB7XTh8P8F960O1uA14JO.jpg",
  },
  {
    title: "No Country for Old Men",
    type: "Movie",
    year: 2007,
    poster: "https://image.tmdb.org/t/p/w500/6d5XOczc226jECq0LIX0siKtgHR.jpg",
  },
  {
    title: "The Silence of the Lambs",
    type: "Movie",
    year: 1991,
    poster: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
  },
  {
    title: "Oldboy",
    type: "Movie",
    year: 2003,
    poster: "https://i.pinimg.com/1200x/49/86/6e/49866e4acc34b72bbd9cb7b59e370466.jpg",
  },
  {
    title: "Black Swan",
    type: "Movie",
    year: 2010,
    poster: "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    type: "Movie",
    year: 2011,
    poster: "https://i.pinimg.com/736x/9b/e5/f3/9be5f36be25e6a07bcc3d0151460e57a.jpg",
  },
  {
    title: "A Simple Favor",
    type: "Movie",
    year: 2018,
    poster: "https://m.media-amazon.com/images/M/MV5BZmM4MGFkMTItNzI1ZS00ODZlLThjYjktMTQyYmQzM2M2M2Y3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Departed",
    type: "Movie",
    year: 2006,
    poster: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
  },
  {
    title: "The Game",
    type: "Movie",
    year: 1997,
    poster: "https://i.pinimg.com/1200x/88/53/ac/8853acc09b9ee9659c64d84560ed1980.jpg",
  },
  {
    title: "Enemy",
    type: "Movie",
    year: 2013,
    poster: "https://i.pinimg.com/736x/e4/a6/bc/e4a6bc155762c67cf05d578c8e56e88a.jpg",
  },
  {
    title: "Heat",
    type: "Movie",
    year: 1995,
    poster: "https://image.tmdb.org/t/p/w500/umSVjVdbVwtx5ryCA2QXL44Durm.jpg",
  },

  // 📺 SERIES
  {
    title: "Mindhunter",
    type: "Series",
    year: 2017,
    poster: "https://rukminim2.flixcart.com/image/480/640/k0zlsi80/poster/6/u/2/medium-mindhunter-tv-series-poster-for-room-office-13-inch-x-19-original-imafknmcphdyuywh.jpeg?q=90",
  },
  {
    title: "Breaking Bad",
    type: "Series",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
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
    poster: "https://i.pinimg.com/1200x/9a/5b/1d/9a5b1d8b19197425e9c47da0e300f6d0.jpg",
  },
  {
    title: "You",
    type: "Series",
    year: 2018,
    poster: "https://i.pinimg.com/1200x/43/b2/8e/43b28e0d0a17500db07e2bdadf086b37.jpg",
  },
  {
    title: "Money Heist",
    type: "Series",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  },
  {
    title: "The Night Of",
    type: "Series",
    year: 2016,
    poster: "https://i.pinimg.com/736x/d2/f2/db/d2f2db05681115727ad4e67e9aa9000d.jpg",
  },
  {
    title: "The Sinner",
    type: "Series",
    year: 2017,
    poster: "https://i.pinimg.com/1200x/31/a2/a7/31a2a73417b16f3a9159d2dbc781a8cb.jpg",
  },
  {
    title: "Ozark",
    type: "Series",
    year: 2017,
    poster: "https://i.pinimg.com/736x/49/2d/03/492d039091d0625a05ab25c0a270dade.jpg",
  },
  {
    title: "The Fall",
    type: "Series",
    year: 2013,
    poster: "https://i.pinimg.com/1200x/42/de/fa/42defac5802c44947f7b0b7f450132e3.jpg",
  },
  {
    title: "Sharp Objects",
    type: "Series",
    year: 2018,
    poster: "https://i.pinimg.com/736x/65/e6/a5/65e6a5d3aab0eaad46a47bde2c35581e.jpg",
  },
  {
    title: "Bodyguard",
    type: "Series",
    year: 2018,
    poster: "https://i.pinimg.com/1200x/86/5d/a9/865da965f62a073f723250c78113463a.jpg",
  },
  {
    title: "The Watcher",
    type: "Series",
    year: 2022,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBDNg7CYDjVZf5Gv8FdKOGt5OIYccNkf-FLQ&s",
  },
  {
    title: "Hannibal",
    type: "Series",
    year: 2013,
    poster: "https://i.pinimg.com/736x/c9/19/50/c91950f3aa5be653d5bceab0b0ce83dd.jpg",
  },
  {
    title: "Bates Motel",
    type: "Series",
    year: 2013,
    poster: "https://i.pinimg.com/1200x/96/0e/dc/960edcd487fc280d0ef2b7c98f298ea7.jpg",
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
];

  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>THRILLER</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {thrillerList.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Thrillerfullpagecontent
