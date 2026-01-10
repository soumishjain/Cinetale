import React from 'react'
import Card from '../Card';

const Animationfullpagecontent = () => {
    const animationList = [
  // 🎥 MOVIES
  {
    title: "Toy Story",
    type: "Movie",
    year: 1995,
    poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
  },
  {
    title: "Finding Nemo",
    type: "Movie",
    year: 2003,
    poster: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
  },
  {
    title: "The Lion King",
    type: "Movie",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
  },
  {
    title: "Up",
    type: "Movie",
    year: 2009,
    poster: "https://image.tmdb.org/t/p/w500/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg",
  },
  {
    title: "WALL·E",
    type: "Movie",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
  },
  {
    title: "Inside Out",
    type: "Movie",
    year: 2015,
    poster: "https://image.tmdb.org/t/p/w500/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg",
  },
  {
    title: "Coco",
    type: "Movie",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
  },
  {
    title: "Spirited Away",
    type: "Movie",
    year: 2001,
    poster: "https://image.tmdb.org/t/p/w500/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
  },
  {
    title: "How to Train Your Dragon",
    type: "Movie",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
  },
  {
    title: "Shrek",
    type: "Movie",
    year: 2001,
    poster: "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
  },
  {
    title: "Frozen",
    type: "Movie",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/eFnGmj63QPUpK7QUWSOUhypIQOT.jpg",
  },
  {
    title: "Kung Fu Panda",
    type: "Movie",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/wWt4JYJ1C7O2uE2cV6HltC5Fh7U.jpg",
  },
  {
    title: "The Incredibles",
    type: "Movie",
    year: 2004,
    poster: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wXpv.jpg",
  },
  {
    title: "Ratatouille",
    type: "Movie",
    year: 2007,
    poster: "https://image.tmdb.org/t/p/w500/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg",
  },
  {
    title: "Your Name",
    type: "Movie",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
  },
  {
    title: "Suzume",
    type: "Movie",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/iA7CG85k0m9gD7f1m9w1Yk8WJ1z.jpg",
  },
  {
    title: "The Super Mario Bros. Movie",
    type: "Movie",
    year: 2023,
    poster: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    type: "Movie",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
  },

  // 📺 SERIES
  {
    title: "Rick and Morty",
    type: "Series",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",
  },
  {
    title: "Avatar: The Last Airbender",
    type: "Series",
    year: 2005,
    poster: "https://image.tmdb.org/t/p/w500/8ZTVqvKDQ8o3m8rM0wT4zJ7lB0F.jpg",
  },
  {
    title: "Arcane",
    type: "Series",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
  },
  {
    title: "BoJack Horseman",
    type: "Series",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/pB9L0cY8BfHkzRzYpZpZpZp.jpg",
  },
  {
    title: "Attack on Titan",
    type: "Series",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
  },
  {
    title: "Demon Slayer",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
  },
  {
    title: "Naruto",
    type: "Series",
    year: 2002,
    poster: "https://image.tmdb.org/t/p/w500/vauCEnR7CiyBDzRCeElKkCaXIYu.jpg",
  },
  {
    title: "One Piece",
    type: "Series",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/4I1WsANzF8gBz9ZLZ5bZpZpZp.jpg",
  },
  {
    title: "Death Note",
    type: "Series",
    year: 2006,
    poster: "https://image.tmdb.org/t/p/w500/iigTJJskR1PcjjXqxdyJwVB3BoU.jpg",
  },
  {
    title: "Jujutsu Kaisen",
    type: "Series",
    year: 2020,
    poster: "https://image.tmdb.org/t/p/w500/hFWP5H2pH0E3Z6nJ5l9y2PpZ.jpg",
  },
  {
    title: "Pokémon",
    type: "Series",
    year: 1997,
    poster: "https://image.tmdb.org/t/p/w500/rOuGm07PxBhEsK9TaGPRQVJQm1X.jpg",
  },
  {
    title: "Tom and Jerry",
    type: "Series",
    year: 1940,
    poster: "https://image.tmdb.org/t/p/w500/7YB3c6Kp8Z5p5pZpZpZ.jpg",
  },
  {
    title: "The Simpsons",
    type: "Series",
    year: 1989,
    poster: "https://image.tmdb.org/t/p/w500/zI3E2a3kz7r8JZ5kZ5pZpZ.jpg",
  },
  {
    title: "Futurama",
    type: "Series",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/7r3pZpZpZpZpZp.jpg",
  },
  {
    title: "Family Guy",
    type: "Series",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/gBGUQ8PZpZpZpZp.jpg",
  },
  {
    title: "Bluey",
    type: "Series",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/9vZpZpZpZpZp.jpg",
  },
];

  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>ANIMATION</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {animationList.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Animationfullpagecontent
