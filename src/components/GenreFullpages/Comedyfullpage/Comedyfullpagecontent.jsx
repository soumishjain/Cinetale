import React from 'react'
import Card from '../Card';

const Comedyfullpagecontent = () => {
    const comedyList = [
  // 🎥 MOVIES
  {
    title: "The Hangover",
    type: "Movie",
    year: 2009,
    poster: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
  },
  {
    title: "Superbad",
    type: "Movie",
    year: 2007,
    poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
  },
  {
    title: "Step Brothers",
    type: "Movie",
    year: 2008,
    poster: "https://i.pinimg.com/736x/2e/0e/0f/2e0e0f251fbce42e0319ebca0914b036.jpg",
  },
  {
    title: "Dumb and Dumber",
    type: "Movie",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/4LdpBXiCyGKkR8FGHgjKlphrfUc.jpg",
  },
  {
    title: "We're the Millers",
    type: "Movie",
    year: 2013,
    poster: "https://i.pinimg.com/736x/a6/2d/99/a62d99f9f683e058735e456af969954d.jpg",
  },
  {
    title: "Deadpool",
    type: "Movie",
    year: 2016,
    poster: "https://i.pinimg.com/1200x/5e/34/68/5e3468a4278213d9cbaa7c40c533d5ab.jpg",
  },
  {
    title: "The Grand Budapest Hotel",
    type: "Movie",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
  },
  {
    title: "21 Jump Street",
    type: "Movie",
    year: 2012,
    poster: "https://i.pinimg.com/1200x/1f/cb/9c/1fcb9c4d3bf4360f9f015a15f22d76f8.jpg",
  },
  {
    title: "Borat",
    type: "Movie",
    year: 2006,
    poster: "https://i.pinimg.com/736x/83/de/6a/83de6a63310839b915142037a3dc635d.jpg",
  },
  {
    title: "Mean Girls",
    type: "Movie",
    year: 2004,
    poster: "https://image.tmdb.org/t/p/w500/alKvY5LuVcXraRBfi5UtVV8Ii6Y.jpg",
  },
  {
    title: "Home Alone",
    type: "Movie",
    year: 1990,
    poster: "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg",
  },
  {
    title: "The Mask",
    type: "Movie",
    year: 1994,
    poster: "https://i.pinimg.com/1200x/49/bd/1c/49bd1c3c570d0801d4794a270034384e.jpg",
  },
  {
    title: "3 Idiots",
    type: "Movie",
    year: 2009,
    poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
  },
  {
    title: "PK",
    type: "Movie",
    year: 2014,
    poster: "https://i.pinimg.com/736x/f8/b2/c4/f8b2c434ccea75a8e018bc882152040d.jpg",
  },
  {
    title: "Jumanji: Welcome to the Jungle",
    type: "Movie",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg",
  },
  {
    title: "Yes Man",
    type: "Movie",
    year: 2008,
    poster: "https://i.pinimg.com/1200x/aa/1b/4f/aa1b4f4ea731327925100bfd76e92127.jpg",
  },
  {
    title: "The Dictator",
    type: "Movie",
    year: 2012,
    poster: "https://i.pinimg.com/736x/33/4a/85/334a85025d41f1bf31249f4ae606239f.jpg",
  },
  {
    title: "Rush Hour",
    type: "Movie",
    year: 1998,
    poster: "https://i.pinimg.com/736x/28/b6/a8/28b6a870b3b4640f8e91d1329d3c997b.jpg",
  },

  // 📺 SERIES
  {
    title: "Friends",
    type: "Series",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
  },
  {
    title: "The Office (US)",
    type: "Series",
    year: 2005,
    poster: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
  },
  {
    title: "Brooklyn Nine-Nine",
    type: "Series",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/hgRMSOt7a1b8qyQR68vUixJPang.jpg",
  },
  {
    title: "How I Met Your Mother",
    type: "Series",
    year: 2005,
    poster: "https://image.tmdb.org/t/p/w500/b34jPzmB0wZy7EjUZoleXOl2RRI.jpg",
  },
  {
    title: "The Big Bang Theory",
    type: "Series",
    year: 2007,
    poster: "https://image.tmdb.org/t/p/w500/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg",
  },
  {
    title: "Modern Family",
    type: "Series",
    year: 2009,
    poster: "https://i.pinimg.com/1200x/2d/dd/c1/2dddc11437ba811d4f1880d944c87056.jpg",
  },
  {
    title: "Parks and Recreation",
    type: "Series",
    year: 2009,
    poster: "https://i.pinimg.com/736x/b0/74/6a/b0746abeb1bc45f51928ef4bc061c0b5.jpg",
  },
  {
    title: "Ted Lasso",
    type: "Series",
    year: 2020,
    poster: "https://image.tmdb.org/t/p/w500/5fhZdwP1DVJ0FyVH6vrFdHwpXIn.jpg",
  },
  {
    title: "The Boys",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    title: "Rick and Morty",
    type: "Series",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",
  },
  {
    title: "Sex Education",
    type: "Series",
    year: 2019,
    poster: "https://i.pinimg.com/736x/d1/ba/58/d1ba58702d879250ca8902216611a79d.jpg",
  },
  {
    title: "Schitt's Creek",
    type: "Series",
    year: 2015,
    poster: "https://i.pinimg.com/1200x/4a/ce/6b/4ace6bca6653ef6cf358ac5093b35d4d.jpg",
  },
  {
    title: "The Simpsons",
    type: "Series",
    year: 1989,
    poster: "https://i.pinimg.com/1200x/a3/a2/b1/a3a2b143f7a36ae174c8ab57eb36e658.jpg",
  },
  {
    title: "Family Guy",
    type: "Series",
    year: 1999,
    poster: "https://i.pinimg.com/736x/87/c0/be/87c0be4d3f186913dff783d09d69aa37.jpg",
  },
  {
    title: "The Kapil Sharma Show",
    type: "Series",
    year: 2016,
    poster: "https://i.pinimg.com/736x/24/b0/a3/24b0a34ab0258c367d695058427b3564.jpg",
  },
];

  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>COMEDY</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {comedyList.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Comedyfullpagecontent
