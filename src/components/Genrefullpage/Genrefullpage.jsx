import React from 'react'
import Card from './Card';
import { Outlet, useParams } from 'react-router-dom';
import Leftnav from '../Leftnav/Leftnav';
import ActionfullpageContent from '../GenreFullpages/Actionfullpage/ActionfullpageContent';
import DramaFullpageContent from '../GenreFullpages/DramaFullpage/DramaFullPageContent';
import ScififullpageContent from '../GenreFullpages/Scififullpage/Scififullpagecontent';
import HorrorfullpageContent from '../GenreFullpages/Horrorfullpage/Horrorfullpagecontent';
import Romancefullpagecontent from '../GenreFullpages/Romancefullpage/Romancefullpagecontent';
import Animationfullpagecontent from '../GenreFullpages/Animationfullpage/Animationfullpagecontent';
import Comedyfullpagecontent from '../GenreFullpages/Comedyfullpage/Comedyfullpagecontent';
import Crimefullpagecontent from '../GenreFullpages/Crimefullpage/Crimefullpagecontent';
import Fantasyfullpagecontent from '../GenreFullpages/Fantasyfullpage/Fantasyfullpagecontent';
import Mysteryfullpagecontent from '../GenreFullpages/Mysteryfullpage/Mysteryfullpagecontent';
import Thrillerfullpagecontent from '../GenreFullpages/Thrillerfullpage/Thrillerfullpagecontent';
import Warfullpagecontent from '../GenreFullpages/Warfullpage/Warfullpagecontent';

const Genrefullpage = () => {

    const { type } = useParams();

            const movieGenres = [
  {
    genre: "Action",
    poster: "https://images.wallpapersden.com/image/download/bullet-train-hd-2022-poster_bWpobWiUmZqaraWkpJRmbmdlrWZlbWU.jpg", // The Dark Knight
  },
  {
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", // Forrest Gump
  },
  {
    genre: "SciFi",
    poster: "https://i.pinimg.com/1200x/db/6f/e3/db6fe3fd181624243d7fc4f69d2b5d43.jpg", // Interstellar
  },
  {
    genre: "Thriller",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", // Parasite
  },
  {
    genre: "Horror",
    poster: "https://i.pinimg.com/736x/e4/a9/7b/e4a97b49603401a9aa40fdfae6b24db5.jpg", // The Exorcist
  },
  {
    genre: "Comedy",
    poster: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg", // The Office
  },
  {
    genre: "Romance",
    poster: "https://i.pinimg.com/1200x/0e/84/d5/0e84d580eb24bffc3dabc017412d7a4d.jpg", // 3 Idiots
  },
  {
    genre: "Fantasy",
    poster: "https://i.pinimg.com/1200x/be/d6/7c/bed67c7b05c18f36b8ebb90b98a433dc.jpg", // The Witcher
  },
  {
    genre: "Crime",
    poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg", // Money Heist
  },
  {
    genre: "Animation",
    poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg", // Coco
  },
  {
    genre: "War",
    poster: "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg", // 1917
  },
  {
    genre: "Mystery",
    poster: "https://premierescene.net/wp-content/uploads/2020/03/poster-knives-out.jpg", // Mindhunter
  },
];
 const genrecontentmap = {
            action: <ActionfullpageContent />,
            drama: <DramaFullpageContent />,
            scifi: <ScififullpageContent />,
            horror: <HorrorfullpageContent />,
            romance: <Romancefullpagecontent />,
            animation: <Animationfullpagecontent />,
            comedy: <Comedyfullpagecontent />,
            crime: <Crimefullpagecontent />,
            fantasy: <Fantasyfullpagecontent />,
            mystery: <Mysteryfullpagecontent />,
            thriller: <Thrillerfullpagecontent />,
            war: <Warfullpagecontent />,
        }
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-black/80 backdrop-blur-2xl">

      <div className="hidden sm:block w-[17%] p-4 pr-0">
        <Leftnav />
      </div>

      <div className="w-[95%] mt-5 overflow-y-auto h-[96%] noscrolbar pl-5">
        
        {
            !type && (
                <>
                <h2 className='text-white font-medium  text-3xl'>GENRES</h2>
        <div className='flex sm:justify-start flex-wrap gap-5 mt-5 mb-5'>
            {movieGenres.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
                </>
            )
        }


        {type && genrecontentmap[type]}




      </div>

    </div>
  )
}

export default Genrefullpage
