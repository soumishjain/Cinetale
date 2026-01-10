import React from 'react'
import Card from './Card';

const Netflixfullpage = () => {
    const moreNetflixTitles = [
  {
    name: "Stranger Things",
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    type: "Series",
    year: 2016,
  },
  {
    name: "Breaking Bad",
    poster: "https://image.tmdb.org/t/p/w500/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
    type: "Series",
    year: 2008,
  },
  {
    name: "Money Heist",
    poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    type: "Series",
    year: 2017,
  },
  {
    name: "Dark",
    poster: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    type: "Series",
    year: 2017,
  },
  {
    name: "The Witcher",
    poster: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Narcos",
    poster: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
    type: "Series",
    year: 2015,
  },
  {
    name: "Peaky Blinders",
    poster: "https://image.tmdb.org/t/p/w500/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg",
    type: "Series",
    year: 2013,
  },
  {
    name: "Ozark",
    poster: "https://i.pinimg.com/1200x/87/09/03/8709034c070c261e8a364f06587970cf.jpg",
    type: "Series",
    year: 2017,
  },
  {
    name: "The Crown",
    poster: "https://i.pinimg.com/736x/d4/1e/23/d41e2310684da7174fca126311f78c60.jpg",
    type: "Series",
    year: 2016,
  },
  {
    name: "Black Mirror",
    poster: "https://i.pinimg.com/1200x/06/ae/1c/06ae1ce18d451ec922e17946f2582e51.jpg",
    type: "Series",
    year: 2011,
  },
  {
    name: "You",
    poster: "https://i.pinimg.com/736x/c0/d8/4a/c0d84a49dfccb18a7573ef918b32ee20.jpg",
    type: "Series",
    year: 2018,
  },
  {
    name: "The Umbrella Academy",
    poster: "https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Sex Education",
    poster: "https://image.tmdb.org/t/p/w500/8j12tohv1NBZNmpU93f47sAKBbw.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Lucifer",
    poster: "https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
    type: "Series",
    year: 2016,
  },
  {
    name: "Wednesday",
    poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    type: "Series",
    year: 2022,
  },
  {
    name: "The Queen’s Gambit",
    poster: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
    type: "Series",
    year: 2020,
  },
  {
    name: "Extraction",
    poster: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
    type: "Movie",
    year: 2020,
  },
  {
    name: "Bird Box",
    poster: "https://image.tmdb.org/t/p/w500/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg",
    type: "Movie",
    year: 2018,
  },
  {
    name: "The Irishman",
    poster: "https://image.tmdb.org/t/p/w500/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg",
    type: "Movie",
    year: 2019,
  },
  {
    name: "Animal",
    poster: "https://i.pinimg.com/736x/ab/ef/e4/abefe4f67952816b71514e866e888f46.jpg",
    type: "Movie",
    year: 2023,
  },
  {
    name: "Don’t Look Up",
    poster: "https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "Red Notice",
    poster: "https://image.tmdb.org/t/p/w500/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "Roma",
    poster: "https://i.pinimg.com/736x/a1/cb/b0/a1cbb032b80f7aba475212cbce89776e.jpg",
    type: "Movie",
    year: 2018,
  },
  {
    name: "Army of the Dead",
    poster: "https://image.tmdb.org/t/p/w500/z8CExJekGrEThbpMXAmCFvvgoJR.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "The Gray Man",
    poster: "https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg",
    type: "Movie",
    year: 2022,
  },
  {
    name: "Marriage Story",
    poster: "https://image.tmdb.org/t/p/w500/pZekG6xabTmZxjmYw10wN84Hp8d.jpg",
    type: "Movie",
    year: 2019,
  },
  {
    name: "Squid Game",
    poster: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    type: "Series",
    year: 2021,
  },
  {
    name: "13 Reasons Why",
    poster: "https://image.tmdb.org/t/p/w500/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
    type: "Series",
    year: 2017,
  },
  {
    name: "Elite",
    poster: "https://image.tmdb.org/t/p/w500/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg",
    type: "Series",
    year: 2018,
  },
  {
    name: "Mindhunter",
    poster: "https://i.pinimg.com/1200x/de/ab/24/deab2416998776e5fb591b1bf564698d.jpg",
    type: "Series",
    year: 2017,
  },
  {
    name: "Beef",
    poster: "https://i.pinimg.com/1200x/8c/5a/9d/8c5a9de103275bdd9d7bbb8eb3085a6a.jpg",
    type: "Series",
    year: 2023,
  },
  {
    name: "All Quiet on the Western Front",
    poster: "https://image.tmdb.org/t/p/w500/hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg",
    type: "Movie",
    year: 2022,
  },
];
  return (
   <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>NETFLIX</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {moreNetflixTitles.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Netflixfullpage
