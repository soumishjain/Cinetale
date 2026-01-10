import React from 'react'
import Card from '../Card';

const Fantasyfullpagecontent = () => {
    const fantasyList = [
  // 🎥 MOVIES
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    type: "Movie",
    year: 2001,
    poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    type: "Movie",
    year: 2002,
    poster: "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    type: "Movie",
    year: 2003,
    poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    type: "Movie",
    year: 2001,
    poster: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    type: "Movie",
    year: 2004,
    poster: "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
  },
  {
    title: "The Hobbit: An Unexpected Journey",
    type: "Movie",
    year: 2012,
    poster: "https://image.tmdb.org/t/p/w500/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
  },
  {
    title: "Pan's Labyrinth",
    type: "Movie",
    year: 2006,
    poster: "https://image.tmdb.org/t/p/w500/2VVy7l0M8FbhQJ9zL2pXjlg8R6N.jpg",
  },
  {
    title: "Alice in Wonderland",
    type: "Movie",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/o0kre9wRCZz3jjSjaru7QU0UtFz.jpg",
  },
  {
    title: "Maleficent",
    type: "Movie",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/ik8PugpL41s137RAWEGTAWu0dPo.jpg",
  },
  {
    title: "Fantastic Beasts and Where to Find Them",
    type: "Movie",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/h6NYfVUyM6CDURtZSnBpz647Ldd.jpg",
  },
  {
    title: "Doctor Strange",
    type: "Movie",
    year: 2016,
    poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
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
  {
    title: "Clash of the Titans",
    type: "Movie",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/wjzPZr2gM6p4u2pN4hMi6XH4g3p.jpg",
  },
  {
    title: "Percy Jackson & the Olympians: The Lightning Thief",
    type: "Movie",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/3lFJx6zCzXzYhC2v5pNnX7gF4fQ.jpg",
  },
  {
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    type: "Movie",
    year: 2005,
    poster: "https://image.tmdb.org/t/p/w500/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
  },

  // 📺 SERIES
  {
    title: "Game of Thrones",
    type: "Series",
    year: 2011,
    poster: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
  },
  {
    title: "House of the Dragon",
    type: "Series",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
  },
  {
    title: "The Witcher",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
  },
  {
    title: "The Rings of Power",
    type: "Series",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg",
  },
  {
    title: "Shadow and Bone",
    type: "Series",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/mrVoyDFiDSdWnbq4DfC0F5jHR6Z.jpg",
  },
  {
    title: "Merlin",
    type: "Series",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/5mXvCwFqRx7P7eZG5hzz1xYpZp.jpg",
  },
  {
    title: "His Dark Materials",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/9yKCJzU0uD9Kp5QZ4ZJxN8gk4p.jpg",
  },
  {
    title: "Carnival Row",
    type: "Series",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/7p3hX5r0rQ0s4kTtq4E0tE5rF3Z.jpg",
  },
  {
    title: "The Sandman",
    type: "Series",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/q54qEgagGOYCq5D1903eBVMNkbo.jpg",
  },
  {
    title: "Once Upon a Time",
    type: "Series",
    year: 2011,
    poster: "https://image.tmdb.org/t/p/w500/49Zck6ZfL6k4R0S8QpZp5p5p.jpg",
  },
  {
    title: "The Wheel of Time",
    type: "Series",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/mpgDeLhl8HbhI03XLB7iKO6M6JE.jpg",
  },
  {
    title: "Arcane",
    type: "Series",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
  },
  {
    title: "Locke & Key",
    type: "Series",
    year: 2020,
    poster: "https://image.tmdb.org/t/p/w500/7V5iCwFZqR5lQqZ6p5U4B5mCk4X.jpg",
  },
  {
    title: "Sweet Tooth",
    type: "Series",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/k7Hk0U9T0lHnU1bZs8oYpZp.jpg",
  },
];

  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>FANTASY</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {fantasyList.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Fantasyfullpagecontent
