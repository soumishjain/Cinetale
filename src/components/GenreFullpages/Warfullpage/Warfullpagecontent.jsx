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
    poster: "https://i.pinimg.com/736x/d4/92/17/d4921703544ed07e8fdddfde9e2b8422.jpg",
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
    poster: "https://i.pinimg.com/736x/ec/7f/71/ec7f7166c8e9dd31d80ece8a4ddf0561.jpg",
  },
  {
    title: "The Thin Red Line",
    type: "Movie",
    year: 1998,
    poster: "https://i.pinimg.com/1200x/0f/b3/c4/0fb3c43bd92fefc4177a702fffb71109.jpg",
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
    poster: "https://i.pinimg.com/1200x/b9/bf/45/b9bf4569a33b87cdc2a62373a4220fbc.jpg",
  },
  {
    title: "The Hurt Locker",
    type: "Movie",
    year: 2008,
    poster: "https://i.pinimg.com/1200x/27/76/66/27766616306db2f91de119626ec59f02.jpg",
  },
  {
    title: "Platoon",
    type: "Movie",
    year: 1986,
    poster: "https://i.pinimg.com/736x/fa/46/e8/fa46e8147c295d2b2640034ed6f12dc6.jpg",
  },
  {
    title: "War Horse",
    type: "Movie",
    year: 2011,
    poster: "https://i.pinimg.com/736x/dd/1b/6a/dd1b6a0fec9c8eeaf375287497955843.jpg",
  },
  {
    title: "The Patriot",
    type: "Movie",
    year: 2000,
    poster: "https://i.pinimg.com/736x/2f/87/09/2f870979c849b9de6cda8bb501e1173a.jpg",
  },
  {
    title: "Midway",
    type: "Movie",
    year: 2019,
    poster: "https://i.pinimg.com/736x/f8/5c/12/f85c120c464f898e37010cc0f312aa1a.jpg",
  },

  // 📺 SERIES
  {
    title: "Band of Brothers",
    type: "Series",
    year: 2001,
    poster: "https://i.pinimg.com/736x/c6/8a/ff/c68aff627b8cc82628160b9f39b587e9.jpg",
  },
  {
    title: "The Pacific",
    type: "Series",
    year: 2010,
    poster: "https://i.pinimg.com/1200x/39/0b/a8/390ba84a2cffb31ca527c5f44b340a38.jpg",
  },
  {
    title: "Generation Kill",
    type: "Series",
    year: 2008,
    poster: "https://i.pinimg.com/736x/0e/dd/e2/0edde2dd6337e7e30b70ed6838e147e8.jpg",
  },
  {
    title: "World on Fire",
    type: "Series",
    year: 2019,
    poster: "https://i.pinimg.com/1200x/21/0d/b5/210db5c724dade5715b9d70a3c3656c9.jpg",
  },
  {
    title: "Our World War",
    type: "Series",
    year: 2014,
    poster: "https://i.pinimg.com/736x/43/41/50/4341501775b9d8de283bf8602a14a70a.jpg",
  },
  {
    title: "The Vietnam War",
    type: "Series",
    year: 2017,
    poster: "https://i.pinimg.com/736x/c6/9b/20/c69b20d1690e3c7073d4ad289ff8a3d2.jpg",
  },
  {
    title: "Five Came Back",
    type: "Series",
    year: 2017,
    poster: "https://i.pinimg.com/1200x/6b/d6/d5/6bd6d536b8164b201a5126985a3949f2.jpg",
  },
  {
    title: "Catch-22",
    type: "Series",
    year: 2019,
    poster: "https://i.pinimg.com/736x/e0/8c/21/e08c21d1e8ac94f74b957d319bb3a6fc.jpg",
  },
  {
    title: "SEAL Team",
    type: "Series",
    year: 2017,
    poster: "https://i.pinimg.com/1200x/47/24/d1/4724d121349da34142d1b27395100d47.jpg",
  },
  {
    title: "Fauda",
    type: "Series",
    year: 2015,
    poster: "https://i.pinimg.com/1200x/1d/86/6f/1d866f4a74c5ce6845d3ee6d17419b90.jpg",
  },
  {
    title: "Rogue Heroes",
    type: "Series",
    year: 2022,
    poster: "https://i.pinimg.com/1200x/d8/18/e3/d818e3b37d3c7a9cf552c461e3ce6a46.jpg",
  },
  {
    title: "The Long Road Home",
    type: "Series",
    year: 2017,
    poster: "https://i.pinimg.com/1200x/de/80/65/de80651982546a2d235890178932ef7c.jpg",
  },
  {
    title: "Warrior",
    type: "Series",
    year: 2019,
    poster: "https://i.pinimg.com/1200x/47/9e/09/479e093dd939cd070d573a2769654f01.jpg",
  },
  {
    title: "Valley of Tears",
    type: "Series",
    year: 2020,
    poster: "https://i.pinimg.com/1200x/31/c8/ad/31c8ad1207b76c7f836bd1b3551cb9fd.jpg",
  },
  {
    title: "Turn: Washington's Spies",
    type: "Series",
    year: 2014,
    poster: "https://i.pinimg.com/1200x/bf/29/9a/bf299a510bf6eef8ea271eae985c0a6f.jpg",
  },
  {
    title: "The Liberator",
    type: "Series",
    year: 2020,
    poster: "https://i.pinimg.com/736x/f8/39/8d/f8398df2378a3d81e928bde5fdb65a59.jpg",
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
