import React from 'react'
import Card from '../Card';

const Warfullpagecontent = () => {
    const warList = [
  // 🎥 MOVIES
  {
    title: "Saving Private Ryan",
    type: "Movie",
    year: 1998,
    poster: "https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
  },
  {
    title: "1917",
    type: "Movie",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
  },
  {
    title: "Dunkirk",
    type: "Movie",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg",
  },
  {
    title: "Hacksaw Ridge",
    type: "Movie",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/fTuxNlgEm04PPFkr1xfK94Jn8BW.jpg",
  },
  {
    title: "Fury",
    type: "Movie",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
  },
  {
    title: "Black Hawk Down",
    type: "Movie",
    year: 2001,
    poster: "https://image.tmdb.org/t/p/w500/yUzQ4r3q1Dy0bUAkMvUIwf0rPpR.jpg",
  },
  {
    title: "Full Metal Jacket",
    type: "Movie",
    year: 1987,
    poster: "https://image.tmdb.org/t/p/w500/kMKyx1k8hWWscYFnPbnxxN4Eqo4.jpg",
  },
  {
    title: "Apocalypse Now",
    type: "Movie",
    year: 1979,
    poster: "https://image.tmdb.org/t/p/w500/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg",
  },
  {
    title: "Enemy at the Gates",
    type: "Movie",
    year: 2001,
    poster: "https://image.tmdb.org/t/p/w500/4Q4YzjEJZpZpZpZp.jpg",
  },
  {
    title: "The Thin Red Line",
    type: "Movie",
    year: 1998,
    poster: "https://image.tmdb.org/t/p/w500/3Snsr7ryF6dNfnGdFRp3dcZS5kA.jpg",
  },
  {
    title: "Lone Survivor",
    type: "Movie",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
  },
  {
    title: "American Sniper",
    type: "Movie",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/i1U4j6wXx5bV4w1qkKJ2qJpZ.jpg",
  },
  {
    title: "The Hurt Locker",
    type: "Movie",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/1bXYrWZJc5V8yQvYJpZpZp.jpg",
  },
  {
    title: "Platoon",
    type: "Movie",
    year: 1986,
    poster: "https://image.tmdb.org/t/p/w500/6nZP1gPzZpZpZpZp.jpg",
  },
  {
    title: "War Horse",
    type: "Movie",
    year: 2011,
    poster: "https://image.tmdb.org/t/p/w500/y9ZKx1rJZpZpZpZp.jpg",
  },
  {
    title: "The Patriot",
    type: "Movie",
    year: 2000,
    poster: "https://image.tmdb.org/t/p/w500/fvHj0z2XxZpZpZpZp.jpg",
  },
  {
    title: "Midway",
    type: "Movie",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/hj8pyoNnynGe3KsIYw2Z5JY0fEO.jpg",
  },

  // 📺 SERIES
  {
    title: "Band of Brothers",
    type: "Series",
    year: 2001,
    poster: "https://image.tmdb.org/t/p/w500/x4G8Xv4pZpZpZpZp.jpg",
  },
  {
    title: "The Pacific",
    type: "Series",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/3xQp6ZPzZpZpZpZp.jpg",
  },
  {
    title: "Generation Kill",
    type: "Series",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/gq0F6y1pZpZpZpZp.jpg",
  },
  {
    title: "World on Fire",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/qhZ6ZpZpZpZpZp.jpg",
  },
  {
    title: "Our World War",
    type: "Series",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/4pZpZpZpZpZpZp.jpg",
  },
  {
    title: "The Vietnam War",
    type: "Series",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/lpZpZpZpZpZpZp.jpg",
  },
  {
    title: "Five Came Back",
    type: "Series",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/yZpZpZpZpZpZp.jpg",
  },
  {
    title: "Catch-22",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/7KZpZpZpZpZpZp.jpg",
  },
  {
    title: "SEAL Team",
    type: "Series",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/hpZpZpZpZpZpZp.jpg",
  },
  {
    title: "Fauda",
    type: "Series",
    year: 2015,
    poster: "https://image.tmdb.org/t/p/w500/9pZpZpZpZpZpZp.jpg",
  },
  {
    title: "Rogue Heroes",
    type: "Series",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/2pZpZpZpZpZpZp.jpg",
  },
  {
    title: "The Long Road Home",
    type: "Series",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/5pZpZpZpZpZpZp.jpg",
  },
  {
    title: "Warrior",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/qZpZpZpZpZpZp.jpg",
  },
  {
    title: "Valley of Tears",
    type: "Series",
    year: 2020,
    poster: "https://image.tmdb.org/t/p/w500/rpZpZpZpZpZpZp.jpg",
  },
  {
    title: "Turn: Washington's Spies",
    type: "Series",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/tpZpZpZpZpZpZp.jpg",
  },
  {
    title: "The Liberator",
    type: "Series",
    year: 2020,
    poster: "https://image.tmdb.org/t/p/w500/ypZpZpZpZpZpZp.jpg",
  },
];

  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>WAR</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {warList.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Warfullpagecontent
