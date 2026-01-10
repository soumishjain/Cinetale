import React from 'react'
import Card from './Card';

const Amazonfullpage = () => {
    const moreAmazonTitles = [
  {
    name: "The Boys",
    poster: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "The Family Man",
    poster: "https://i.pinimg.com/736x/85/26/cd/8526cdf47c8850bb2600658ea8310b09.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Mirzapur",
    poster: "https://i.pinimg.com/736x/e3/c6/88/e3c6882263243a58050b002b5bb41eaa.jpg",
    type: "Series",
    year: 2018,
  },
  {
    name: "Paatal Lok",
    poster: "https://i.pinimg.com/736x/93/90/1e/93901e8a64d900f2ad04485028111e58.jpg",
    type: "Series",
    year: 2020,
  },
  {
    name: "Reacher",
    poster: "https://i.pinimg.com/1200x/51/5a/ad/515aad53078267917eb0b838bbac9082.jpg",
    type: "Series",
    year: 2022,
  },
  {
    name: "Jack Ryan",
    poster: "https://i.pinimg.com/736x/f6/d3/84/f6d384a2a3ada77c519808b9a42ffe60.jpg",
    type: "Series",
    year: 2018,
  },
  {
    name: "The Marvelous Mrs. Maisel",
    poster: "https://i.pinimg.com/736x/95/f2/2f/95f22f25843b7bedf9155b72720021f5.jpg",
    type: "Series",
    year: 2017,
  },
  {
    name: "Upload",
    poster: "https://i.pinimg.com/1200x/7d/84/a2/7d84a2d7229043373702203a68aceefd.jpg",
    type: "Series",
    year: 2020,
  },
  {
    name: "The Terminal List",
    poster: "https://i.pinimg.com/736x/19/6d/49/196d49966be376727edb55050c02c96e.jpg",
    type: "Series",
    year: 2022,
  },
  {
    name: "Citadel",
    poster: "https://i.pinimg.com/736x/6f/3b/2d/6f3b2d9a2ec960b0704eb45be4da18cd.jpg",
    type: "Series",
    year: 2023,
  },

  {
    name: "KGF: Chapter 1",
    poster: "https://i.pinimg.com/736x/e2/e9/bc/e2e9bcbe34a5fb6522cc4f614b953315.jpg",
    type: "Movie",
    year: 2018,
  },
  {
    name: "KGF: Chapter 2",
    poster: "https://i.pinimg.com/736x/9c/a2/91/9ca291ac23b69ed5580cdf6e73fd913d.jpg",
    type: "Movie",
    year: 2022,
  },
  {
    name: "Sardar Udham",
    poster: "https://i.pinimg.com/1200x/2f/82/da/2f82da0b065865c52c54aa41f3b04fa6.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "Jai Bhim",
    poster: "https://i.pinimg.com/736x/dd/35/8b/dd358bc7e30b0477633d979e54df5be1.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "Drishyam 2",
    poster: "https://i.pinimg.com/474x/b1/4f/a6/b14fa6518e4a57e3c07ce278ff103949.jpg",
    type: "Movie",
    year: 2022,
  },
  {
    name: "Shershaah",
    poster: "https://i.pinimg.com/1200x/82/54/e2/8254e207d4a3ce72162b95463c933fe6.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "Pushpa: The Rise",
    poster: "https://i.pinimg.com/1200x/a9/74/c1/a974c1c19644d39d2b43cc799223279c.jpg",
    type: "Movie",
    year: 2021,
  },

  {
    name: "Without Remorse",
    poster: "https://image.tmdb.org/t/p/w500/rEm96ib0sPiZBADNKBHKBv5bve9.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "Coming 2 America",
    poster: "https://image.tmdb.org/t/p/w500/nWBPLkqNApY5pgrJFMiI9joSI30.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "Borat Subsequent Moviefilm",
    poster: "https://i.pinimg.com/736x/83/de/6a/83de6a63310839b915142037a3dc635d.jpg",
    type: "Movie",
    year: 2020,
  },
  {
    name: "Sound of Metal",
    poster: "https://i.pinimg.com/736x/78/1a/8b/781a8bf12eb6d74dfeb4a693c96184cd.jpg",
    type: "Movie",
    year: 2019,
  },
  {
    name: "Manchester by the Sea",
    poster: "https://i.pinimg.com/736x/b7/9d/c2/b79dc2d011c6a61ab1fa9fa02b6fc37b.jpg",
    type: "Movie",
    year: 2016,
  },
  {
    name: 'War',
    poster: "https://i.pinimg.com/736x/7e/4a/69/7e4a690244c526b6b922a613e1859a14.jpg",
    type: "Movie",
    year: 2019,
  },
  {
    name: "The Tomorrow War",
    poster: "https://i.pinimg.com/736x/ef/5b/5a/ef5b5acbaa5a9c9a9a072b56fc8976fd.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "Air",
    poster: "https://image.tmdb.org/t/p/w500/76AKQPdH3M8cvsFR9K8JsOzVlY5.jpg",
    type: "Movie",
    year: 2023,
  },
  {
    name: "Saltburn",
    poster: "https://i.pinimg.com/736x/51/f4/46/51f4463f1bb5745f7d2ce831ad77eb84.jpg",
    type: "Movie",
    year: 2023,
  },
  {
    name: "The Expanse",
    poster: "https://i.pinimg.com/1200x/ed/7d/d1/ed7dd120c0af6db079710e3e67bcb6a2.jpg",
    type: "Series",
    year: 2015,
  },
  {
    name: "Good Omens",
    poster: "https://i.pinimg.com/1200x/3e/49/d0/3e49d0ebcd40d7fc415aee68fa211901.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Fleabag",
    poster: "https://i.pinimg.com/736x/13/79/6d/13796d255ade0a94f5d6b142d886dd0e.jpg",
    type: "Series",
    year: 2016,
  },
  {
    name: "Hunters",
    poster: "https://i.pinimg.com/736x/31/b2/48/31b248ec4bfaa9de0722eb87adc577a9.jpg",
    type: "Series",
    year: 2020,
  },
  {
    name: "Invincible",
    poster: "https://image.tmdb.org/t/p/w500/yDWJYRAwMNKbIYT8ZB33qy84uzO.jpg",
    type: "Series",
    year: 2021,
  },
  {
    name: "The Wheel of Time",
    poster: "https://image.tmdb.org/t/p/w500/mpgDeLhl8HbhI03XLB7iKO6M6JE.jpg",
    type: "Series",
    year: 2021,
  },
];
  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>AMAZON PRIME</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {moreAmazonTitles.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Amazonfullpage
