import Card from "../Card";


const ScififullpageContent = () => {
   const scifiList = [
  // 🎥 MOVIES
  {
    title: "Interstellar",
    type: "Movie",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    title: "Inception",
    type: "Movie",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    title: "The Matrix",
    type: "Movie",
    year: 1999,
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    title: "Blade Runner",
    type: "Movie",
    year: 1982,
    poster: "https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
  },
  {
    title: "Blade Runner 2049",
    type: "Movie",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
  },
  {
    title: "Dune",
    type: "Movie",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
  {
    title: "Arrival",
    type: "Movie",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
  },
  {
    title: "Ex Machina",
    type: "Movie",
    year: 2014,
    poster: "https://i.pinimg.com/1200x/d4/5c/65/d45c65a1766fcbe9eb460abbcd4a1895.jpg",
  },
  {
    title: "Edge of Tomorrow",
    type: "Movie",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/uUHvlkLavotfGsNtosDy8ShsIYF.jpg",
  },
  {
    title: "The Martian",
    type: "Movie",
    year: 2015,
    poster: "https://i.pinimg.com/736x/cb/5d/9c/cb5d9c4fa22db1ff9399f84ee7ee1408.jpg",
  },
  {
    title: "Tenet",
    type: "Movie",
    year: 2020,
    poster: "https://image.tmdb.org/t/p/w500/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg",
  },
  {
    title: "Gravity",
    type: "Movie",
    year: 2013,
    poster: "https://i.pinimg.com/736x/20/34/a4/2034a441ae9c5775e25448e9f15b9831.jpg",
  },
  {
    title: "Looper",
    type: "Movie",
    year: 2012,
    poster: "https://image.tmdb.org/t/p/w500/sNjL6SqErDBE8OUZlrDLkexfsCj.jpg",
  },
  {
    title: "District 9",
    type: "Movie",
    year: 2009,
    poster: "https://i.pinimg.com/736x/26/7f/a0/267fa04fe45f98bbc19924f2285e5ee2.jpg",
  },
  {
    title: "Minority Report",
    type: "Movie",
    year: 2002,
    poster: "https://i.pinimg.com/736x/2a/2e/11/2a2e1146a6e00c6b55ff40a8c5b55a21.jpg",
  },
  {
    title: "Avatar",
    type: "Movie",
    year: 2009,
    poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
  },
  {
    title: "Avatar: The Way of Water",
    type: "Movie",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  },

  // 📺 SERIES
  {
    title: "Stranger Things",
    type: "Series",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
  },
  {
    title: "Dark",
    type: "Series",
    year: 2017,
    poster: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
  },
  {
    title: "Black Mirror",
    type: "Series",
    year: 2011,
    poster: "https://i.pinimg.com/1200x/ab/9c/8e/ab9c8e8048fec1b54ef1fdcb27c37bae.jpg",
  },
  {
    title: "Westworld",
    type: "Series",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/y55oBgf6bVMI7sFNXwJDrSIxPQt.jpg",
  },
  {
    title: "The Expanse",
    type: "Series",
    year: 2015,
    poster: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
  },
  {
    title: "Foundation",
    type: "Series",
    year: 2021,
    poster: "https://i.pinimg.com/1200x/42/0c/63/420c635a4965ac34bf46f67cd473b8ad.jpg",
  },
  {
    title: "Love, Death & Robots",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/asDqvkE66EegtKJJXIRhBJPxscr.jpg",
  },
  {
    title: "The Mandalorian",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
  },
  {
    title: "Doctor Who",
    type: "Series",
    year: 2005,
    poster: "https://image.tmdb.org/t/p/w500/7r4FieFH6Eh6S55hi8c9LOiFENg.jpg",
  },
  {
    title: "The 100",
    type: "Series",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg",
  },
  {
    title: "Altered Carbon",
    type: "Series",
    year: 2018,
    poster: "https://i.pinimg.com/1200x/89/20/3f/89203f03d45978e529165d72de88f58b.jpg",
  },
  {
    title: "Andor",
    type: "Series",
    year: 2022,
    poster: "https://i.pinimg.com/1200x/b6/8d/d6/b68dd6c71938fd21716875d54a79064f.jpg",
  },
  {
    title: "Raised by Wolves",
    type: "Series",
    year: 2020,
    poster: "https://i.pinimg.com/736x/ef/bc/e6/efbce6cdb455febf9e269037ef46b9c6.jpg",
  },
];

  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>SCI-FI</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {scifiList.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default ScififullpageContent
