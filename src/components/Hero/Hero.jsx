import React from 'react'
import Card from './Card'

const Hero = () => {
  const featuredTitles = [
  {
    name: "Stranger Things",
    status: "New Season",
    genres: ["SciFi", "Thriller"],
    availableOn: 'netflix',
    slug: 'stranger-things',
    poster: "https://pbs.twimg.com/media/EIs-iykU8AASn2x.jpg",
    platform: 'https://www.netflix.com',
    description:
      "When a young boy disappears, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
  },
  {
    name: "The Boys",
    status: "Trending",
    genres: ["Action", "Dark Comedy"],
    availableOn: 'amazon',
    slug: 'the-boys',
    poster: "https://storage.googleapis.com/rodeofx-webpage-videos/project/images/149-The-Boys-S1/_1920xAUTO_crop_center-center_none/14122/the-boys-season-1_header-001.webp",
    platform: 'https://www.primevideo.com/',
    description:
      "A group of vigilantes set out to take down corrupt superheroes who abuse their powers while pretending to be the world’s protectors.",
  },
  {
    name: "House of the Dragon",
    status: "New Season",
    genres: ["Fantasy", "Drama"],
    availableOn: 'disney',
    slug: 'house-of-the-dragon',
    poster: "https://www.viridianfx.co.uk/wp-content/uploads/2022/10/HOTD_landscape_A1_v02-1280x905.jpg",
    platform: 'https://www.hotstar.com/',
    description:
      "The Targaryen civil war erupts as rival factions fight for control of the Iron Throne nearly 200 years before the events of Game of Thrones.",
  },
  {
    name: "Money Heist",
    status: "Trending",
    genres: ["Crime", "Thriller"],
    availableOn: 'netflix',
    slug: 'money-heist',
    poster: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/736dee100650681.5f0da29e3cce4.jpg",
    platform: 'https://www.netflix.com',
    description:
      "A criminal mastermind known as The Professor plans the biggest heist in history, targeting Spain’s Royal Mint with a team of elite thieves.",
  },
  {
    name: "The Last of Us",
    status: "Trending",
    genres: ["Drama", "Post-Apocalyptic"],
    availableOn: 'disney',
    slug: 'last-of-us',
    poster: "https://i.pinimg.com/736x/5a/15/f9/5a15f9835949534671ed3c83703b4005.jpg",
    platform: 'https://www.hotstar.com/',
    description:
      "Twenty years after civilization collapses, a hardened survivor escorts a young girl across a dangerous world where humanity hangs by a thread.",
  },
];

  return (
    <div className='noscrolbar sm-h-full h-[400px] flex flex-nowrap overflow-x-auto gap-10 snap-x snap-mandatory scroll-smoodh'>
      {featuredTitles.map((elem,idx) => {
        return <Card elem={elem}/>
      })}
    </div>
  )
}

export default Hero
