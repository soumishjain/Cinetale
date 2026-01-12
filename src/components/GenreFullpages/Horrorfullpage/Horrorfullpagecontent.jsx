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
    poster: "https://i.pinimg.com/736x/96/b0/e0/96b0e0c6b0acfed0038d56bf70a4b6cb.jpg",
  },
  {
    title: "The Ring",
    type: "Movie",
    year: 2002,
    poster: "https://i.pinimg.com/1200x/fa/53/af/fa53af7b7568c6fd5bdaa80e225a326c.jpg",
  },
  {
    title: "A Quiet Place",
    type: "Movie",
    year: 2018,
    poster: "https://i.pinimg.com/736x/b1/97/7b/b1977b1222e5883640e160ca59c5d927.jpg",
  },
  {
    title: "Sinister",
    type: "Movie",
    year: 2012,
    poster: "https://i.pinimg.com/1200x/24/67/7c/24677c895f48ea75f58e9dde43d28457.jpg",
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
    poster: "https://i.pinimg.com/1200x/13/5d/3c/135d3c71735ff65b195ab71a153c7214.jpg",
  },
  {
    title: "Annabelle",
    type: "Movie",
    year: 2014,
    poster: "https://i.pinimg.com/1200x/6a/39/5f/6a395f05abaa078aebb6cf68f030727c.jpg",
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
    poster: "https://i.pinimg.com/1200x/28/87/ef/2887efc951b44bda1f77b20bd6349771.jpg",
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
    poster: "https://i.pinimg.com/1200x/c5/94/bf/c594bf1955b466b37b3f42fe6f7c8cb2.jpg",
  },
  {
    title: "The Haunting of Bly Manor",
    type: "Series",
    year: 2020,
    poster: "https://i.pinimg.com/1200x/c7/c5/70/c7c570ccd437437a6f4a9c9d6fc7f2e9.jpg",
  },
  {
    title: "Midnight Mass",
    type: "Series",
    year: 2021,
    poster: "https://i.pinimg.com/1200x/c1/47/3c/c1473c35636f81eb434f41555f924730.jpg",
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
    poster: "https://i.pinimg.com/736x/4d/88/33/4d8833ec31776b5c72214a3deee77c92.jpg",
  },
  {
    title: "Marianne",
    type: "Series",
    year: 2019,
    poster: "https://i.pinimg.com/1200x/8a/33/94/8a3394d3984653338e0536368c50fe96.jpg",
  },
  {
    title: "The Exorcist",
    type: "Series",
    year: 2016,
    poster: "https://i.pinimg.com/736x/f1/0f/51/f10f510d2ced1d8ce24e155ef9a1ce96.jpg",
  },
  {
    title: "From",
    type: "Series",
    year: 2022,
    poster: "https://i.pinimg.com/736x/68/f6/b1/68f6b1e5c549eb2f57292cab7e899533.jpg",
  },
  {
    title: "Penny Dreadful",
    type: "Series",
    year: 2014,
    poster: "https://i.pinimg.com/1200x/3e/22/9d/3e229dc7699630ac7f0c747f4e17494f.jpg",
  },
  {
    title: "The Terror",
    type: "Series",
    year: 2018,
    poster: "https://i.pinimg.com/736x/a9/60/1f/a9601fc3cfaf9404d7d7febb90310235.jpg",
  },
  {
    title: "Cabinet of Curiosities",
    type: "Series",
    year: 2022,
    poster: "https://i.pinimg.com/1200x/9b/6d/6f/9b6d6f69a2c0f05c454cf1b56cbeb3d1.jpg",
  },
  {
    title: "The Outsider",
    type: "Series",
    year: 2020,
    poster: "https://i.pinimg.com/736x/4e/72/92/4e72926a667d4d042f39b12acc7e558f.jpg",
  },
  {
    title: "Chilling Adventures of Sabrina",
    type: "Series",
    year: 2018,
    poster: "https://i.pinimg.com/736x/b8/10/a5/b810a589f60e6d7fe3d3dfa0222afb7c.jpg",
  },
];
  return (
    <div className='flex flex-col sm:pl-5 overflow-y-auto'>
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
