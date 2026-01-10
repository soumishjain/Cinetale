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
    poster: "https://image.tmdb.org/t/p/w500/rzUeV7fQZ0PpZpZpZp.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/1KgkK6PpZpZpZpZp.jpg",
  },
  {
    title: "Before Sunrise",
    type: "Movie",
    year: 1995,
    poster: "https://image.tmdb.org/t/p/w500/8QpZpZpZpZpZpZp.jpg",
  },
  {
    title: "Before Sunset",
    type: "Movie",
    year: 2004,
    poster: "https://image.tmdb.org/t/p/w500/5kzZpZpZpZpZpZp.jpg",
  },
  {
    title: "Before Midnight",
    type: "Movie",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/9pZpZpZpZpZpZp.jpg",
  },
  {
    title: "Call Me by Your Name",
    type: "Movie",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/3BRN3zZpZpZpZpZp.jpg",
  },
  {
    title: "A Walk to Remember",
    type: "Movie",
    year: 2002,
    poster: "https://image.tmdb.org/t/p/w500/8yZpZpZpZpZpZp.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/f9mbM0YMLpYemcWx6o2WeiYp4Xk.jpg",
  },
  {
    title: "Me Before You",
    type: "Movie",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/6pZpZpZpZpZpZp.jpg",
  },
  {
    title: "Notting Hill",
    type: "Movie",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/9mJ6D2pZpZpZpZp.jpg",
  },
  {
    title: "Crazy Rich Asians",
    type: "Movie",
    year: 2018,
    poster: "https://image.tmdb.org/t/p/w500/1XxL4j0yZpZpZpZp.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/4KZpZpZpZpZpZp.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/9pZpZpZpZpZpZp.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/6KZpZpZpZpZpZp.jpg",
  },
  {
    title: "Emily in Paris",
    type: "Series",
    year: 2020,
    poster: "https://image.tmdb.org/t/p/w500/5ZpZpZpZpZpZp.jpg",
  },
  {
    title: "Love",
    type: "Series",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/7ZpZpZpZpZpZp.jpg",
  },
  {
    title: "Out of the Blue",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/4pZpZpZpZpZpZp.jpg",
  },
  {
    title: "Sex Education",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/8jz7Oa4C4FJzZpZpZp.jpg",
  },
  {
    title: "Virgin River",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/3pZpZpZpZpZpZp.jpg",
  },
  {
    title: "This Is Us",
    type: "Series",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/1J6gZpZpZpZpZpZp.jpg",
  },
  {
    title: "How I Met Your Mother",
    type: "Series",
    year: 2005,
    poster: "https://image.tmdb.org/t/p/w500/b34jPzmB0wZy7EjUZoleXOl2RRI.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/7YpZpZpZpZpZp.jpg",
  },
  {
    title: "The Summer I Turned Pretty",
    type: "Series",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/2YpZpZpZpZpZp.jpg",
  },
  {
    title: "Crash Landing on You",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/9ZpZpZpZpZpZp.jpg",
  },
  {
    title: "My Love from the Star",
    type: "Series",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/6YpZpZpZpZpZp.jpg",
  },
  {
    title: "Goblin",
    type: "Series",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/4YpZpZpZpZpZp.jpg",
  },
];

  return (
   <div className='flex flex-col pl-5 overflow-y-auto'>
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
