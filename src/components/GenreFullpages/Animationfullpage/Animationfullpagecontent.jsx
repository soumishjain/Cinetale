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
    poster: "https://i.pinimg.com/736x/cd/f0/2f/cdf02fbb3554e09507bad8789e238b26.jpg",
  },
  {
    title: "Kung Fu Panda",
    type: "Movie",
    year: 2008,
    poster: "https://i.pinimg.com/1200x/e8/f8/d5/e8f8d5f5e40afd31ca1f5f4000927525.jpg",
  },
  {
    title: "The Incredibles",
    type: "Movie",
    year: 2004,
    poster: "https://i.pinimg.com/1200x/9f/c7/39/9fc739d7ecce5091cad3907734aa1337.jpg",
  },
  {
    title: "Ratatouille",
    type: "Movie",
    year: 2007,
    poster: "https://i.pinimg.com/736x/87/91/bd/8791bd9195dc87f5b3972d321112d865.jpg",
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
    poster: "https://i.pinimg.com/1200x/c2/0c/f7/c20cf7dea496252dcd12e3c7dd2c993f.jpg",
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
    poster: "https://i.pinimg.com/736x/85/36/3c/85363cfc65a0581f0012c08a105e65c3.jpg",
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
    poster: "https://i.pinimg.com/1200x/9f/dc/69/9fdc69965ec70d21700bdd33bdb96be5.jpg",
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
    poster: "https://i.pinimg.com/1200x/ce/c6/2c/cec62cabf2aaafa302a46da4db32419d.jpg",
  },
  {
    title: "Death Note",
    type: "Series",
    year: 2006,
    poster: "https://i.pinimg.com/736x/c1/7d/af/c17daf0bf50f3c7bbdee8ddf05df5940.jpg",
  },
  {
    title: "Jujutsu Kaisen",
    type: "Series",
    year: 2020,
    poster: "https://i.pinimg.com/1200x/fd/37/cd/fd37cdadeea6cf97ca6acec593fcff2b.jpg",
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
    poster: "https://i.pinimg.com/736x/f5/97/5b/f5975b23dc2be37241c33aaf30e71fcd.jpg",
  },
  {
    title: "The Simpsons",
    type: "Series",
    year: 1989,
    poster: "https://i.pinimg.com/1200x/a3/a2/b1/a3a2b143f7a36ae174c8ab57eb36e658.jpg",
  },
  {
    title: "Futurama",
    type: "Series",
    year: 1999,
    poster: "https://i.pinimg.com/736x/59/a3/6c/59a36c8c86675eea954ba0d45ffa054a.jpg",
  },
  {
    title: "Family Guy",
    type: "Series",
    year: 1999,
    poster: "https://i.pinimg.com/736x/87/c0/be/87c0be4d3f186913dff783d09d69aa37.jpg",
  },
  {
    title: "Bluey",
    type: "Series",
    year: 2018,
    poster: "https://i.pinimg.com/736x/8f/d7/60/8fd760c139d174241c50128e86cf4bea.jpg",
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
