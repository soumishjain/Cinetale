import React from 'react'
import Card from '../Continue/Card'

const Continue = () => {
const mixedContinueWatching = [
  {
    name: "The Bear",
    poster: "https://i.pinimg.com/736x/3d/76/97/3d7697de30265e18f16e001506506c8b.jpg",
    type: "Series",
    season: 2,
    episode: 4,
    percentCompleted: 58,
    timeCompleted: "31m 42s",
  },
  {
    name: "Succession",
    poster: "https://i.pinimg.com/1200x/13/e2/fe/13e2fe8422c4311473aebec5cbab41f7.jpg",
    type: "Series",
    season: 3,
    episode: 7,
    percentCompleted: 73,
    timeCompleted: "39m 10s",
  },
  {
    name: "The Batman",
    poster: "https://image.tmdb.org/t/p/w780/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
    type: "Movie",
    percentCompleted: 44,
    timeCompleted: "01h 12m 25s",
  },

  /* 🇮🇳 Indian Titles */

  {
    name: "Paatal Lok",
    poster: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*QLk6tewcEBDF2TUz.jpeg",
    type: "Series",
    season: 1,
    episode: 6,
    percentCompleted: 61,
    timeCompleted: "34m 50s",
  },
  {
    name: "The Family Man",
    poster: "https://i.pinimg.com/1200x/0a/89/6d/0a896def14548a7999c56e1b2f1af482.jpg",
    type: "Series",
    season: 2,
    episode: 3,
    percentCompleted: 47,
    timeCompleted: "28m 19s",
  },
  {
    name: "Andhadhun",
    poster: "https://assets-in.bmscdn.com/discovery-catalog/events/et00077959-emtnapyaan-landscape.jpg",
    type: "Movie",
    percentCompleted: 82,
    timeCompleted: "01h 23m 40s",
  },

  /* More International */

  {
    name: "Blade Runner 2049",
    poster: "https://image.tmdb.org/t/p/w780/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg",
    type: "Movie",
    percentCompleted: 36,
    timeCompleted: "45m 18s",
  },
  {
    name: "Arcane",
    poster: "https://i.pinimg.com/736x/6d/96/66/6d96662a7a00dd6283193ca755919356.jpg",
    type: "Series",
    season: 1,
    episode: 5,
    percentCompleted: 69,
    timeCompleted: "32m 06s",
  },
  {
    name: "True Detective",
    poster: "https://i.pinimg.com/1200x/e2/36/05/e2360584074cc9ca656db94e2001542b.jpg",
    type: "Series",
    season: 1,
    episode: 2,
    percentCompleted: 41,
    timeCompleted: "24m 58s",
  },
  {
    name: "1917",
    poster: "https://i.pinimg.com/1200x/a2/e1/05/a2e1055788ae76c46b34a87da8d2bc09.jpg",
    type: "Movie",
    percentCompleted: 53,
    timeCompleted: "52m 11s",
  },
];

  return (
    <div className='mt-10'>
      <div className="top flex justify-between text-white mb-5">
        <h1 className='text-2xl'>Continue Watching</h1>
        <button className='bg-white/50 px-4 py-2 rounded-lg font-medium'>See All</button>
      </div>
      <div className='flex gap-3 flex-nowrap scroll-smooth snap-mandatory snap-x overflow-x-auto noscrolbar'>
      {mixedContinueWatching.map((elem,idx) => {
        return <Card elem={elem}/>
      })}
      </div>
    </div>
  )
}

export default Continue
