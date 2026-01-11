import Card from "../Card";


const DramaFullpageContent = () => {
  const dramaList = [
  // 🎥 MOVIES
  {
    title: "Forrest Gump",
    type: "Movie",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
  },
  {
    title: "The Shawshank Redemption",
    type: "Movie",
    year: 1994,
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    title: "The Green Mile",
    type: "Movie",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
  },
  {
    title: "Fight Club",
    type: "Movie",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  },
  {
    title: "The Social Network",
    type: "Movie",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
  },
  {
    title: "Whiplash",
    type: "Movie",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
  },
  {
    title: "Parasite",
    type: "Movie",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    title: "Joker",
    type: "Movie",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    title: "A Beautiful Mind",
    type: "Movie",
    year: 2001,
    poster: "https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
  },
  {
    title: "The Pursuit of Happyness",
    type: "Movie",
    year: 2006,
    poster: "https://image.tmdb.org/t/p/w500/f6l9rghSHORkWLurUGJhaKAiyjY.jpg",
  },
  {
    title: "Slumdog Millionaire",
    type: "Movie",
    year: 2008,
    poster: "https://i.pinimg.com/736x/fb/e4/fd/fbe4fd272909306ca1cd909c978092cb.jpg",
  },
  {
    title: "12 Years a Slave",
    type: "Movie",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/xdANQijuNrJaw1HA61rDccME4Tm.jpg",
  },
  {
    title: "The Pianist",
    type: "Movie",
    year: 2002,
    poster: "https://image.tmdb.org/t/p/w500/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg",
  },
  {
    title: "Manchester by the Sea",
    type: "Movie",
    year: 2016,
    poster: "https://i.pinimg.com/736x/e8/53/0b/e8530bbbd1e8a861830a0e7c9a89a6fc.jpg",
  },
  {
    title: "3 Idiots",
    type: "Movie",
    year: 2009,
    poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
  },
  {
    title: "Taare Zameen Par",
    type: "Movie",
    year: 2007,
    poster: "https://i.pinimg.com/736x/73/62/cb/7362cb2629d1411725480156f6d717e8.jpg",
  },
  {
    title: "Rang De Basanti",
    type: "Movie",
    year: 2006,
    poster: "https://i.pinimg.com/1200x/a9/32/f4/a932f49a73013beef320b45c9da87fb9.jpg",
  },

  // 📺 SERIES
  {
    title: "Breaking Bad",
    type: "Series",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
  },
  {
    title: "Better Call Saul",
    type: "Series",
    year: 2015,
    poster: "https://image.tmdb.org/t/p/w500/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg",
  },
  {
    title: "The Crown",
    type: "Series",
    year: 2016,
    poster: "https://i.pinimg.com/736x/5a/e0/db/5ae0db4ac98161f3ccbdf1c507b8672f.jpg",
  },
  {
    title: "This Is Us",
    type: "Series",
    year: 2016,
    poster: "https://i.pinimg.com/736x/97/db/54/97db54b497b958ecc392a61e5fb2b00d.jpg",
  },
  {
    title: "Peaky Blinders",
    type: "Series",
    year: 2013,
    poster: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
  },
  {
    title: "Chernobyl",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
  },
  {
    title: "The Sopranos",
    type: "Series",
    year: 1999,
    poster: "https://i.pinimg.com/736x/6f/d6/a3/6fd6a3c4abf9167e3e6c4970eab7b2e2.jpg",
  },
  {
    title: "Mad Men",
    type: "Series",
    year: 2007,
    poster: "https://i.pinimg.com/1200x/55/b1/7f/55b17f5689f90f26e3972fd3c26d2ac8.jpg",
  },
  {
    title: "The Wire",
    type: "Series",
    year: 2002,
    poster: "https://image.tmdb.org/t/p/w500/4lbclFySvugI51fwsyxBTOm4DqK.jpg",
  },
  {
    title: "Succession",
    type: "Series",
    year: 2018,
    poster: "https://i.pinimg.com/1200x/e0/94/85/e094850d9cca79d9ad31803de391312d.jpg",
  },
  {
    title: "Euphoria",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/3Q0hd3heuWwDWpwcDkhQOA6TYWI.jpg",
  },
  {
    title: "Ozark",
    type: "Series",
    year: 2017,
    poster: "https://i.pinimg.com/736x/ae/15/a1/ae15a133fe9701cfa48191f87613d707.jpg",
  },
  {
    title: "Delhi Crime",
    type: "Series",
    year: 2019,
    poster: "https://i.pinimg.com/1200x/ae/c9/8b/aec98bc9568448efcb7c12a979658272.jpg",
  },
  {
    title: "Sacred Games",
    type: "Series",
    year: 2018,
    poster: "https://i.pinimg.com/1200x/7f/6d/ca/7f6dca071b1d01c7bfd58a25b3454c65.jpg",
  },
  {
    title: "Band of Brothers",
    type: "Series",
    year: 2001,
    poster: "https://i.pinimg.com/736x/c6/8a/ff/c68aff627b8cc82628160b9f39b587e9.jpg",
  },
  {
    title: "Normal People",
    type: "Series",
    year: 2020,
    poster: "https://i.pinimg.com/736x/56/10/ca/5610ca2f562c621063fd57bdb02a10b1.jpg",
  },
];

  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>DRAMA</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {dramaList.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default DramaFullpageContent
