import React from 'react'
import Card from '../Card';

const ActionfullpageContent = () => {
         const actiontitle = [
  {
    title: "Mad Max: Fury Road",
    poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    type: "Movie",
    year: 2015,
  },
  {
    title: "John Wick",
    poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    type: "Movie",
    year: 2014,
  },
  {
    title: "John Wick: Chapter 2",
    poster: "https://i.pinimg.com/1200x/f3/f4/c6/f3f4c64663457d886bd7508b6950c433.jpg",
    type: "Movie",
    year: 2017,
  },
  {
    title: "John Wick: Chapter 3 – Parabellum",
    poster: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    type: "Movie",
    year: 2019,
  },
  {
    title: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    type: "Movie",
    year: 2008,
  },
  {
    title: "The Dark Knight Rises",
    poster: "https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
    type: "Movie",
    year: 2012,
  },
  {
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    type: "Movie",
    year: 2010,
  },
  {
    title: "Gladiator",
    poster: "https://image.tmdb.org/t/p/w500/ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg",
    type: "Movie",
    year: 2000,
  },
  {
    title: "Die Hard",
    poster: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg",
    type: "Movie",
    year: 1988,
  },
  {
    title: "The Matrix",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    type: "Movie",
    year: 1999,
  },
  {
    title: "Mission: Impossible – Fallout",
    poster: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
    type: "Movie",
    year: 2018,
  },
  {
    title: "Top Gun: Maverick",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    type: "Movie",
    year: 2022,
  },
  {
    title: "The Bourne Identity",
    poster: "https://image.tmdb.org/t/p/w500/aP8swke3gmowbkfZ6lmNidu0y9p.jpg",
    type: "Movie",
    year: 2002,
  },
  {
    title: "The Bourne Ultimatum",
    poster: "https://i.pinimg.com/736x/f7/a2/07/f7a207e243ca6efe3af819c6bb808b0b.jpg",
    type: "Movie",
    year: 2007,
  },
  {
    title: "Casino Royale",
    poster: "https://i.pinimg.com/736x/1b/46/90/1b469055e0117e9c17148f97312cf1bb.jpg",
    type: "Movie",
    year: 2006,
  },
  {
    title: "Avengers: Infinity War",
    poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    type: "Movie",
    year: 2018,
  },
  {
    title: "Avengers: Endgame",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    type: "Movie",
    year: 2019,
  },
  {
    title: "Captain America: The Winter Soldier",
    poster: "https://i.pinimg.com/1200x/3b/04/c5/3b04c5b1fa821dae49f64bd2cef56e36.jpg",
    type: "Movie",
    year: 2014,
  },
  {
    title: "Thor: Ragnarok",
    poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    type: "Movie",
    year: 2017,
  },
  {
    title: "Extraction",
    poster: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
    type: "Movie",
    year: 2020,
  },

  // 🇮🇳 Indian Action Movies
  {
    title: "RRR",
    poster: "https://image.tmdb.org/t/p/w500/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg",
    type: "Movie",
    year: 2022,
  },
  {
    title: "Baahubali: The Beginning",
    poster: "https://image.tmdb.org/t/p/w500/9BAjt8nSSms62uOVYn1t3C3dVto.jpg",
    type: "Movie",
    year: 2015,
  },
  {
    title: "Baahubali 2: The Conclusion",
    poster: "https://image.tmdb.org/t/p/w500/21sC2assImQIYCEDA84Qh9d1RsK.jpg",
    type: "Movie",
    year: 2017,
  },
  {
    title: "War",
    poster: "https://i.pinimg.com/736x/7e/4a/69/7e4a690244c526b6b922a613e1859a14.jpg",
    type: "Movie",
    year: 2019,
  },
  {
    title: "Tanhaji: The Unsung Warrior",
    poster: "https://i.pinimg.com/1200x/52/cc/53/52cc536965bf9b15bbe533eebbfa9abe.jpg",
    type: "Movie",
    year: 2020,
  },
  {
    title: "KGF: Chapter 1",
    poster: "https://i.pinimg.com/1200x/e2/e9/bc/e2e9bcbe34a5fb6522cc4f614b953315.jpg",
    type: "Movie",
    year: 2018,
  },
  {
    title: "KGF: Chapter 2",
    poster: "https://image.tmdb.org/t/p/w500/khNVygolU0TxLIDWff5tQlAhZ23.jpg",
    type: "Movie",
    year: 2022,
  },
  {
    title: "Vikram",
    poster: "https://image.tmdb.org/t/p/w500/774UV1aCURb4s4JfEFg3IEMu5Zj.jpg",
    type: "Movie",
    year: 2022,
  },
  {
    title: "Pathaan",
    poster: "https://image.tmdb.org/t/p/w500/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg",
    type: "Movie",
    year: 2023,
  },
  {
    title: "Jawan",
    poster: "https://i.pinimg.com/736x/e7/cd/70/e7cd703383ef996b022048dbe556f946.jpg",
    type: "Movie",
    year: 2023,
  },
];

  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>ACTION</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {actiontitle.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default ActionfullpageContent
