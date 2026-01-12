import React from 'react'
import Card from '../Card'

const Romancefullpagecontent = () => {
    const romanceList = [
  // 🎥 MOVIES
  {
    title: "Titanic",
    type: "Movie",
    year: 1997,
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
  },
  {
    title: "The Notebook",
    type: "Movie",
    year: 2004,
    poster: "https://i.pinimg.com/1200x/7e/d5/64/7ed5643e2fb4f2b5575a898a197f2aea.jpg",
  },
  {
    title: "La La Land",
    type: "Movie",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
  },
  {
    title: "Pride & Prejudice",
    type: "Movie",
    year: 2005,
    poster: "https://i.pinimg.com/1200x/09/b1/28/09b1284dcb29683f08a3aed0b325ef7d.jpg",
  },
  {
    title: "Before Sunrise",
    type: "Movie",
    year: 1995,
    poster: "https://i.pinimg.com/736x/ef/c6/25/efc625f7a38a6b22554eff384d9516a7.jpg",
  },
  {
    title: "Before Sunset",
    type: "Movie",
    year: 2004,
    poster: "https://i.pinimg.com/1200x/fd/50/f4/fd50f4a8b1ef2387591da2bce56b4a8b.jpg",
  },
  {
    title: "Before Midnight",
    type: "Movie",
    year: 2013,
    poster: "https://i.pinimg.com/1200x/1d/76/e6/1d76e63bb36e3c8baef54f7ad89c02eb.jpg",
  },
  {
    title: "Call Me by Your Name",
    type: "Movie",
    year: 2017,
    poster: "https://i.pinimg.com/1200x/c8/7f/bc/c87fbcac83094f16e7f839d07815d239.jpg",
  },
  {
    title: "A Walk to Remember",
    type: "Movie",
    year: 2002,
    poster: "https://i.pinimg.com/1200x/bb/4b/3c/bb4b3c19d4e0a2fbd439dee3aedf524f.jpg",
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    type: "Movie",
    year: 2004,
    poster: "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
  },
  {
    title: "500 Days of Summer",
    type: "Movie",
    year: 2009,
    poster: "https://i.pinimg.com/736x/b6/f5/e7/b6f5e704315f52621e66eed67c2fd1e1.jpg",
  },
  {
    title: "Me Before You",
    type: "Movie",
    year: 2016,
    poster: "https://i.pinimg.com/736x/5f/d0/6a/5fd06a83163d42160b905fd42cc65736.jpg",
  },
  {
    title: "Notting Hill",
    type: "Movie",
    year: 1999,
    poster: "https://i.pinimg.com/736x/b4/b7/c7/b4b7c7333104254ba834546b81f5eb9c.jpg",
  },
  {
    title: "Crazy Rich Asians",
    type: "Movie",
    year: 2018,
    poster: "https://i.pinimg.com/736x/48/34/0c/48340c2234e4b7f30efe923dfb37561d.jpg",
  },
  {
    title: "The Fault in Our Stars",
    type: "Movie",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/ep7dF4QR4Mm39LI958V0XbwE0hK.jpg",
  },
  {
    title: "3 Idiots",
    type: "Movie",
    year: 2009,
    poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
  },
  {
    title: "Jab We Met",
    type: "Movie",
    year: 2007,
    poster: "https://i.pinimg.com/1200x/d6/25/00/d625008c5ba3b93a8d457d989df05ee0.jpg",
  },
  {
    title: "Dilwale Dulhania Le Jayenge",
    type: "Movie",
    year: 1995,
    poster: "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
  },

  // 📺 SERIES
  {
    title: "Outlander",
    type: "Series",
    year: 2014,
    poster: "https://i.pinimg.com/1200x/85/03/dc/8503dce1536db15f99037fdde47356cb.jpg",
  },
  {
    title: "Bridgerton",
    type: "Series",
    year: 2020,
    poster: "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
  },
  {
    title: "Normal People",
    type: "Series",
    year: 2020,
    poster: "https://i.pinimg.com/736x/56/10/ca/5610ca2f562c621063fd57bdb02a10b1.jpg",
  },
  {
    title: "Emily in Paris",
    type: "Series",
    year: 2020,
    poster: "https://i.pinimg.com/736x/5d/ee/2e/5dee2e2a41a6452366c9985835ff91ac.jpg",
  },
  {
    title: "Love",
    type: "Series",
    year: 2016,
    poster: "https://i.pinimg.com/1200x/1f/57/07/1f5707b0be45234e7366eeb674ff0757.jpg",
  },
  {
    title: "Out of the Blue",
    type: "Series",
    year: 2019,
    poster: "https://i.pinimg.com/736x/49/1b/e6/491be68bc4f4cd1cc09c56a1914d0e80.jpg",
  },
  {
    title: "Sex Education",
    type: "Series",
    year: 2019,
    poster: "https://i.pinimg.com/1200x/15/86/01/158601b1e3647410bb214ba1958201dd.jpg",
  },
  {
    title: "Virgin River",
    type: "Series",
    year: 2019,
    poster: "https://i.pinimg.com/1200x/80/85/cc/8085cc15e331275ed43a2f46067c469d.jpg",
  },
  {
    title: "This Is Us",
    type: "Series",
    year: 2016,
    poster: "https://i.pinimg.com/736x/d7/92/c7/d792c70b73dd1aea542aa060f2820f22.jpg",
  },
  {
    title: "How I Met Your Mother",
    type: "Series",
    year: 2005,
    poster: "https://i.pinimg.com/736x/e1/ce/89/e1ce8903d2f9603cf8480fe7fb4b8a0f.jpg",
  },
  {
    title: "Friends",
    type: "Series",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
  },
  {
    title: "Modern Love",
    type: "Series",
    year: 2019,
    poster: "https://i.pinimg.com/736x/4a/11/78/4a1178ff82dec0e333204c9357ae1fca.jpg",
  },
  {
    title: "The Summer I Turned Pretty",
    type: "Series",
    year: 2022,
    poster: "https://i.pinimg.com/1200x/19/8b/ea/198bea6a1c199f589001b012566b9160.jpg",
  },
  {
    title: "Crash Landing on You",
    type: "Series",
    year: 2019,
    poster: "https://i.pinimg.com/736x/4a/2c/c1/4a2cc1fe15cf7343d14f9a527938b46e.jpg",
  },
  {
    title: "My Love from the Star",
    type: "Series",
    year: 2013,
    poster: "https://i.pinimg.com/736x/12/b1/97/12b19765ba657e9ff49ba4ebd661cabe.jpg",
  },
  {
    title: "Goblin",
    type: "Series",
    year: 2016,
    poster: "https://i.pinimg.com/736x/c1/69/b9/c169b9c4d3c0b00e1a4a47f347072b9b.jpg",
  },
];

  return (
   <div className='flex flex-col sm:pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>ROMANCE</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {romanceList.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Romancefullpagecontent
