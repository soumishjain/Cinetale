import Card from "../Card";


const DramaFullpageContent = () => {
         const dramalist = [
  {
    name: "Game of Thrones",
    poster: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    type: "Series",
    year: 2011,
  },
  {
    name: "House of the Dragon",
    poster: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
    type: "Series",
    year: 2022,
  },
  {
    name: "The Mandalorian",
    poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Loki",
    poster: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
    type: "Series",
    year: 2021,
  },
  {
    name: "WandaVision",
    poster: "https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
    type: "Series",
    year: 2021,
  },
  {
    name: "Moon Knight",
    poster: "https://i.pinimg.com/736x/7b/c2/e5/7bc2e55176c3763545d869cc1d33ae15.jpg",
    type: "Series",
    year: 2022,
  },
  {
    name: "Ms. Marvel",
    poster: "https://i.pinimg.com/736x/64/47/d6/6447d68a35088e49e1a5967b44ca6cd9.jpg",
    type: "Series",
    year: 2022,
  },
  {
    name: "The Falcon and the Winter Soldier",
    poster: "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
    type: "Series",
    year: 2021,
  },
  {
    name: "Secret Invasion",
    poster: "https://i.pinimg.com/1200x/53/fb/96/53fb96c05d962404b3a41e22e77c08dc.jpg",
    type: "Series",
    year: 2023,
  },
  {
    name: "She-Hulk: Attorney at Law",
    poster: "https://i.pinimg.com/736x/5e/bd/21/5ebd212448e48f7cc3a6178818098dde.jpg",
    type: "Series",
    year: 2022,
  },

  {
    name: "Aarya",
    poster: "https://i.pinimg.com/736x/99/cc/93/99cc938564619f66de419b029fb5fca5.jpg",
    type: "Series",
    year: 2020,
  },
  {
    name: "Special OPS",
    poster: "https://i.pinimg.com/736x/73/ca/38/73ca384c28486c5a43b678eca4a55d61.jpg",
    type: "Series",
    year: 2020,
  },
  {
    name: "The Night Manager (India)",
    poster: "https://i.pinimg.com/1200x/72/75/44/727544f44e7dad20a55611fad225a240.jpg",
    type: "Series",
    year: 2023,
  },
  {
    name: "Criminal Justice",
    poster: "https://i.pinimg.com/736x/58/50/e7/5850e78dae228f45d2bae3b051f27d36.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Rudra: The Edge of Darkness",
    poster: "https://i.pinimg.com/736x/53/09/0d/53090d40246e5e1b891948f83e4aeb4a.jpg",
    type: "Series",
    year: 2022,
  },

  {
    name: 'IT: Welcome to Derry',
    poster: 'https://i.pinimg.com/736x/32/96/aa/3296aa798707e25d55d702f45d736bd2.jpg',
    type: 'Series',
    year: 2025,
  },
  {
    name: "Pirates of the Carrebian : At World's End",
    poster: "https://i.pinimg.com/1200x/78/d4/1f/78d41fa5a8a5f383d0444f94115843a3.jpg",
    type: "Movie",
    year: 2007,
  },
  {
    name: "Avengers: Endgame",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    type: "Movie",
    year: 2019,
  },
  {
    name: "Avengers: Infinity War",
    poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    type: "Movie",
    year: 2018,
  },
  {
    name: "Iron Man",
    poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    type: "Movie",
    year: 2008,
  },
  {
    name: "Black Panther",
    poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    type: "Movie",
    year: 2018,
  },
  {
    name: "Doctor Strange",
    poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    type: "Movie",
    year: 2016,
  },
  {
    name: "Thor: Ragnarok",
    poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    type: "Movie",
    year: 2017,
  },

  {
    name: "RRR",
    poster: "https://image.tmdb.org/t/p/w500/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg",
    type: "Movie",
    year: 2022,
  },
  {
    name: "Brahmāstra",
    poster: "https://i.pinimg.com/1200x/54/d1/cc/54d1cc315cbf1e9cbbe74c075a3bc0c7.jpg",
    type: "Movie",
    year: 2022,
  },
  {
    name: "Tanhaji",
    poster: "https://i.pinimg.com/1200x/52/cc/53/52cc536965bf9b15bbe533eebbfa9abe.jpg",
    type: "Movie",
    year: 2020,
  },
  {
    name: "Chhichhore",
    poster: "https://i.pinimg.com/1200x/74/c6/58/74c658e3ab3b01dd712ad2b1d50800a6.jpg",
    type: "Movie",
    year: 2019,
  },

  {
    name: "Frozen II",
    poster: "https://image.tmdb.org/t/p/w500/mINJaa34MtknCYl5AjtNJzWj8cD.jpg",
    type: "Movie",
    year: 2019,
  },
  {
    name: "The Lion King",
    poster: "https://image.tmdb.org/t/p/w500/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
    type: "Movie",
    year: 2019,
  },
  {
    name: "Toy Story 4",
    poster: "https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
    type: "Movie",
    year: 2019,
  },
  {
    name: "Coco",
    poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    type: "Movie",
    year: 2017,
  },
  {
    name: "Soul",
    poster: "https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
    type: "Movie",
    year: 2020,
  },
];
  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>DRAMA</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {dramalist.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default DramaFullpageContent
