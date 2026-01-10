import Card from "../Card";


const HorrorfullpageContent = () => {
         const horrortitle = [
 {
    title: "The Exorcist",
    type: "Movie",
    year: 1973,
    poster: "https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg",
  },
  {
    title: "Hereditary",
    type: "Movie",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg",
  },
  {
    title: "The Conjuring",
    type: "Movie",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
  },
  {
    title: "Insidious",
    type: "Movie",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/tnN1yZxJqBzDra4nA7s6xZ5Ckz7.jpg",
  },
  {
    title: "The Ring",
    type: "Movie",
    year: 2002,
    poster: "https://image.tmdb.org/t/p/w500/gghD2ZIPjMzq5Ir2JcXJ4vUgW3c.jpg",
  },
  {
    title: "A Quiet Place",
    type: "Movie",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
  },
  {
    title: "Sinister",
    type: "Movie",
    year: 2012,
    poster: "https://image.tmdb.org/t/p/w500/6uWzTz5yox8kA1yqID4F6CkCm9C.jpg",
  },
  {
    title: "IT",
    type: "Movie",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
  },
  {
    title: "The Nun",
    type: "Movie",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
  },
  {
    title: "Get Out",
    type: "Movie",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
  },
  {
    title: "The Witch",
    type: "Movie",
    year: 2015,
    poster: "https://image.tmdb.org/t/p/w500/o384OC1tCV8n8JZ6l1csuKkM2jE.jpg",
  },
  {
    title: "Annabelle",
    type: "Movie",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/yAgxM61Sn0dYML4C9v3V5aMMPYp.jpg",
  },
  {
    title: "Doctor Sleep",
    type: "Movie",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/p69QzIBbN06aTYqRRiCOY1emNBh.jpg",
  },
  {
    title: "The Babadook",
    type: "Movie",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/3YzEt8J8BkpC2a3x9X5K7TzJHzt.jpg",
  },
  {
    title: "Evil Dead Rise",
    type: "Movie",
    year: 2023,
    poster: "https://image.tmdb.org/t/p/w500/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
  },
  {
    title: "The Shining",
    type: "Movie",
    year: 1980,
    poster: "https://image.tmdb.org/t/p/w500/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg",
  },
  {
    title: "Smile",
    type: "Movie",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
  },
  {
    title: "Barbarian",
    type: "Movie",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/idT5mnqPcJgSkvpDX7pJffBzdVH.jpg",
  },

  // 🔹 SERIES
  {
    title: "The Haunting of Hill House",
    type: "Series",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/mj0Zj0qkwmFOfUo6M5j5n8z6n6N.jpg",
  },
  {
    title: "The Haunting of Bly Manor",
    type: "Series",
    year: 2020,
    poster: "https://image.tmdb.org/t/p/w500/jdA3u6CH8h7rLbNgF2wZ6aJwwBz.jpg",
  },
  {
    title: "Midnight Mass",
    type: "Series",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/4bNjE6WbPjFHvP6zpV3pFxv0cMx.jpg",
  },
  {
    title: "Stranger Things",
    type: "Series",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
  },
  {
    title: "The Walking Dead",
    type: "Series",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg",
  },
  {
    title: "American Horror Story",
    type: "Series",
    year: 2011,
    poster: "https://image.tmdb.org/t/p/w500/9J1nJ9f5BAXmug8nG8f1zZZF9vi.jpg",
  },
  {
    title: "Marianne",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/8KpFjO3kEJ4nHbHhSUs0YzKp7kl.jpg",
  },
  {
    title: "The Exorcist",
    type: "Series",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/2Z7VfW9J9W1oZB2Zlz7n7tKp9vy.jpg",
  },
  {
    title: "From",
    type: "Series",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/6x4Y0YJ6kJ4pQ1lZfM2dF4o8E3P.jpg",
  },
  {
    title: "Penny Dreadful",
    type: "Series",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/mvWZ0dUo7bYZ3k7NwhqkP5bttJr.jpg",
  },
  {
    title: "The Terror",
    type: "Series",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/l9G2M7pQ5B3mZCk7zX9nG5JxL7U.jpg",
  },
  {
    title: "Cabinet of Curiosities",
    type: "Series",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/7V5iCwFZqR5lQqZ6p5U4B5mCk4X.jpg",
  },
  {
    title: "The Outsider",
    type: "Series",
    year: 2020,
    poster: "https://image.tmdb.org/t/p/w500/n2z8y0M7B5YwZqL2P9R5M6yJZLx.jpg",
  },
  {
    title: "Chilling Adventures of Sabrina",
    type: "Series",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/6z8hX1NnPp9Y3RkYQz6yN4BzBzK.jpg",
  },
];
  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>HORROR</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {horrortitle.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default HorrorfullpageContent
