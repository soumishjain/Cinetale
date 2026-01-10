import React from 'react'
import Card from './Card';

const Applefullpage = () => {
    const moreappleTitles = [
        {
          name: "The Studio",
          poster: "https://i.pinimg.com/736x/f8/48/95/f84895b100922baa7d68a0adeb69148a.jpg",
          type: "Series",
          year: 2025  
        },
  {
    name: "Ted Lasso",
    poster: "https://image.tmdb.org/t/p/w500/kK6Oq4JywUNXmJ299efUkv1h6Mn.jpg",
    type: "Series",
    year: 2020,
  },
  {
    name: "Severance",
    poster: "https://i.pinimg.com/736x/10/dd/d4/10ddd4b1754ece422f20b54cdba3174d.jpg",
    type: "Series",
    year: 2022,
  },
  {
    name: "The Morning Show",
    poster: "https://i.pinimg.com/1200x/1d/bf/09/1dbf09a87d2e2bb1120535b9b8356fe3.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Silo",
    poster: "https://i.pinimg.com/1200x/ca/57/d6/ca57d613a0bdc931bab1b0d5c0e24f74.jpg",
    type: "Series",
    year: 2023,
  },
  {
    name: "Foundation",
    poster: "https://i.pinimg.com/1200x/17/ed/29/17ed2943fbecd665d588777f0c945d54.jpg",
    type: "Series",
    year: 2021,
  },
  {
    name: "See",
    poster: "https://i.pinimg.com/736x/9d/9a/3c/9d9a3c1c4580c647654bb920ca0c3ae5.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "For All Mankind",
    poster: "https://i.pinimg.com/1200x/e0/ba/96/e0ba96c1104d0d0aaf6ba9ba3d728570.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Slow Horses",
    poster: "https://i.pinimg.com/736x/d2/d1/c3/d2d1c34c2462f9ba6de77df50e596cc9.jpg",
    type: "Series",
    year: 2022,
  },
  {
    name: "Hijack",
    poster: "https://i.pinimg.com/736x/c8/ae/15/c8ae157a305ca8036693f6287a95828d.jpg",
    type: "Series",
    year: 2023,
  },
  {
    name: "Black Bird",
    poster: "https://i.pinimg.com/1200x/b9/89/56/b989564774023235b5d758b696e601ef.jpg",
    type: "Series",
    year: 2022,
  },

  {
    name: "Shrinking",
    poster: "https://i.pinimg.com/1200x/4c/4b/a8/4c4ba82c831bd5c4b3c1d73db79fe6be.jpg",
    type: "Series",
    year: 2023,
  },
  {
    name: "Platonic",
    poster: "https://i.pinimg.com/736x/06/6a/02/066a02178f59b7921488ab3dafa27274.jpg",
    type: "Series",
    year: 2023,
  },
  {
    name: "Truth Be Told",
    poster: "https://i.pinimg.com/736x/ff/21/4e/ff214e103929db003fe151b2caf18f95.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "Servant",
    poster: "https://i.pinimg.com/736x/00/6f/84/006f843e7146e315abcd3bc1abdae875.jpg",
    type: "Series",
    year: 2019,
  },
  {
    name: "The Afterparty",
    poster: "https://i.pinimg.com/1200x/30/62/28/306228089fe2964ea1f929536cb29226.jpg",
    type: "Series",
    year: 2022,
  },

  {
    name: "Greyhound",
    poster: "https://image.tmdb.org/t/p/w500/kjMbDciooTbJPofVXgAoFjfX8Of.jpg",
    type: "Movie",
    year: 2020,
  },
  {
    name: "CODA",
    poster: "https://image.tmdb.org/t/p/w500/BzVjmm8l23rPsijLiNLUzuQtyd.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "Napoleon",
    poster: "https://i.pinimg.com/1200x/f8/ec/3a/f8ec3a0141596be0ae3e083573e1b023.jpg",
    type: "Movie",
    year: 2023,
  },
  {
    name: "Killers of the Flower Moon",
    poster: "https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
    type: "Movie",
    year: 2023,
  },
  {
    name: "Finch",
    poster: "https://image.tmdb.org/t/p/w500/jKuDyqx7jrjiR9cDzB5pxzhJAdv.jpg",
    type: "Movie",
    year: 2021,
  },

  {
    name: "Emancipation",
    poster: "https://i.pinimg.com/736x/4a/46/79/4a467985f6ada2fcda047780fa3215ac.jpg",
    type: "Movie",
    year: 2022,
  },
  {
    name: "Spirited",
    poster: "https://i.pinimg.com/736x/fc/c9/e3/fcc9e3c3730db7184a7b57b9900ea54c.jpg",
    type: "Movie",
    year: 2022,
  },
  {
    name: "Luck",
    poster: "https://i.pinimg.com/1200x/ba/05/5b/ba055b8f267a3b4b7f01398520d14b13.jpg",
    type: "Movie",
    year: 2022,
  },
  {
    name: "Tetris",
    poster: "https://i.pinimg.com/736x/50/46/a7/5046a708fb4e857173b8cdff197378cb.jpg",
    type: "Movie",
    year: 2023,
  },
  {
    name: "Ghosted",
    poster: "https://i.pinimg.com/1200x/43/e4/d6/43e4d619dc44b1a2fd5b2a35cfc4fdf2.jpg",
    type: "Movie",
    year: 2023,
  },

  {
    name: "Cha Cha Real Smooth",
    poster: "https://i.pinimg.com/1200x/69/cf/eb/69cfeb5d739ab89b2335aa5ff6f90178.jpg",
    type: "Movie",
    year: 2022,
  },
  {
    name: "Palmer",
    poster: "https://i.pinimg.com/1200x/5c/e9/3c/5ce93cecba0e07c94d0897b2ddf0f2df.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "Swan Song",
    poster: "https://i.pinimg.com/1200x/6f/d8/33/6fd8330da7e401ad9847932b5e61945f.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "Causeway",
    poster: "https://i.pinimg.com/1200x/59/4a/05/594a054c032cb87f48d8b1f762832d48.jpg",
    type: "Movie",
    year: 2022,
  },
  {
    name: "Cherry",
    poster: "https://i.pinimg.com/1200x/0e/cf/6c/0ecf6c3ecc280a4cfdec5c422164c574.jpg",
    type: "Movie",
    year: 2021,
  },
  {
    name: "The Tragedy of Macbeth",
    poster: "https://i.pinimg.com/1200x/ef/31/2f/ef312fd9590faec9802d533f41d6c983.jpg",
    type: "Movie",
    year: 2021,
  },
];

  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>APPLE TV+</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {moreappleTitles.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Applefullpage
