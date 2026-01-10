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
    poster: "https://image.tmdb.org/t/p/w500/q2wY9K5FQxgI8Z9pZpZpZp.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/9pQ1LZpZpZpZpZp.jpg",
  },
  {
    title: "Deadpool",
    type: "Movie",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/inVq3FRqcYIRl2la8iZikYYxFNR.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/8v3SQBXyC3K2pZpZpZp.jpg",
  },
  {
    title: "Borat",
    type: "Movie",
    year: 2006,
    poster: "https://image.tmdb.org/t/p/w500/kj9X7z1lZpZpZpZp.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/z90h3hMAFZbK5FjzX7pZpZp.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/4T4p1pZpZpZpZp.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/v0wMKEdspYJxZpZpZpZp.jpg",
  },
  {
    title: "The Dictator",
    type: "Movie",
    year: 2012,
    poster: "https://image.tmdb.org/t/p/w500/7V5iCwFZqR5lQqZ6p5U4B5mCk4X.jpg",
  },
  {
    title: "Rush Hour",
    type: "Movie",
    year: 1998,
    poster: "https://image.tmdb.org/t/p/w500/1GLn1QYpZpZpZpZp.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/klL4yhwiU8aF0H6rJrjVxR1sK6y.jpg",
  },
  {
    title: "Parks and Recreation",
    type: "Series",
    year: 2009,
    poster: "https://image.tmdb.org/t/p/w500/2FfWZpZpZpZpZp.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/8jz7Oa4C4FJzZpZpZp.jpg",
  },
  {
    title: "Schitt's Creek",
    type: "Series",
    year: 2015,
    poster: "https://image.tmdb.org/t/p/w500/2YJpcA0xw0v8U6o1gChp5ZpZp.jpg",
  },
  {
    title: "The Simpsons",
    type: "Series",
    year: 1989,
    poster: "https://image.tmdb.org/t/p/w500/zI3E2a3kz7r8JZ5kZ5pZpZ.jpg",
  },
  {
    title: "Family Guy",
    type: "Series",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/gBGUQ8PZpZpZpZp.jpg",
  },
  {
    title: "The Kapil Sharma Show",
    type: "Series",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/5yZpZpZpZpZp.jpg",
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
