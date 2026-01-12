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
    poster: "https://i.pinimg.com/1200x/23/bc/82/23bc82369f8bc188d8666dc0da466b34.jpg",
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
    poster: "https://i.pinimg.com/736x/9b/e5/f3/9be5f36be25e6a07bcc3d0151460e57a.jpg",
  },
  {
    title: "Prisoners",
    type: "Movie",
    year: 2013,
    poster: "https://i.pinimg.com/736x/77/af/b9/77afb929230608bf6d8ddec3d0281ce8.jpg",
  },
  {
    title: "Memento",
    type: "Movie",
    year: 2000,
    poster: "https://i.pinimg.com/1200x/a6/a8/6a/a6a86ab73e8304f8692b09e84fca1112.jpg",
  },
  {
    title: "The Sixth Sense",
    type: "Movie",
    year: 1999,
    poster: "https://i.pinimg.com/736x/02/f8/eb/02f8eb40632e292470f7c1edc529c134.jpg",
  },
  {
    title: "The Others",
    type: "Movie",
    year: 2001,
    poster: "https://i.pinimg.com/736x/47/45/3a/47453a6acac71995a48d5259e29f3013.jpg",
  },
  {
    title: "The Da Vinci Code",
    type: "Movie",
    year: 2006,
    poster: "https://i.pinimg.com/1200x/88/98/c3/8898c386910353174a7ed0cafbef2b07.jpg",
  },
  {
    title: "Searching",
    type: "Movie",
    year: 2018,
    poster: "https://i.pinimg.com/1200x/e4/f3/4f/e4f34f44029b1b70eeb504858825f792.jpg",
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
    title: "The Nice Guys",
    type: "Movie",
    year: 2016,
    poster: "https://i.pinimg.com/1200x/c3/03/f5/c303f5c97989859d20f321ef6da11907.jpg",
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
    poster: "https://i.pinimg.com/1200x/08/ff/ab/08ffab3eaf36d0df649b7b716bba4ed1.jpg",
  },
  {
    title: "Mindhunter",
    type: "Series",
    year: 2017,
    poster: "https://i.pinimg.com/1200x/d5/ae/8d/d5ae8d30a58a4853ad5c74b0e169b939.jpg",
  },
  {
    title: "The Sinner",
    type: "Series",
    year: 2017,
    poster: "https://i.pinimg.com/1200x/31/a2/a7/31a2a73417b16f3a9159d2dbc781a8cb.jpg",
  },
  {
    title: "Sharp Objects",
    type: "Series",
    year: 2018,
    poster: "https://i.pinimg.com/1200x/c6/49/96/c64996fd2dfa3844f34cc77168c5e7a1.jpg",
  },
  {
    title: "The Night Of",
    type: "Series",
    year: 2016,
    poster: "https://i.pinimg.com/736x/f4/58/81/f45881fb472f37d407d9d9a16be84d2c.jpg",
  },
  {
    title: "Only Murders in the Building",
    type: "Series",
    year: 2021,
    poster: "https://i.pinimg.com/736x/90/0f/d3/900fd3aa3a2f33b53835c608bb43474e.jpg",
  },
  {
    title: "Broadchurch",
    type: "Series",
    year: 2013,
    poster: "https://i.pinimg.com/1200x/f6/26/33/f62633d80108282da8c324fb0d82a68b.jpg",
  },
  {
    title: "The Outsider",
    type: "Series",
    year: 2020,
    poster: "https://i.pinimg.com/736x/4e/72/92/4e72926a667d4d042f39b12acc7e558f.jpg",
  },
  {
    title: "Fargo",
    type: "Series",
    year: 2014,
    poster: "https://i.pinimg.com/1200x/82/2d/3b/822d3b5464172d48dabd37e4bb7920ef.jpg",
  },
  {
    title: "Mare of Easttown",
    type: "Series",
    year: 2021,
    poster: "https://i.pinimg.com/1200x/a8/5f/58/a85f5873af5118f20633d6503858f7b8.jpg",
  },
  {
    title: "Luther",
    type: "Series",
    year: 2010,
    poster: "https://i.pinimg.com/1200x/59/2d/af/592daff12f0907ec4a4e95256d17102f.jpg",
  },
  {
    title: "Twin Peaks",
    type: "Series",
    year: 1990,
    poster: "https://i.pinimg.com/736x/1b/e1/68/1be1682d6f8ee1a5a83ee5c653c80352.jpg",
  },
  {
    title: "The Watcher",
    type: "Series",
    year: 2022,
    poster: "https://i.pinimg.com/1200x/a7/d5/be/a7d5be0e784ceb76bb2c520edb7a220e.jpg",
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
