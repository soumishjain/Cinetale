import React from 'react'
import { moreNetflixTitles } from '../../assets/data/netflixdata'
import { moreMightLikeTitles } from '../../assets/data/exploredata'
import { moreDisneyTitles } from '../../assets/data/hotstardata'
import { moreappleTitles } from '../../assets/data/appledata'
import { useNavigate, useParams } from 'react-router-dom'
import { moreAmazonTitles } from '../../assets/data/amazondata'
const Titledetailfullpage = ({}) => {
  const navigate = useNavigate()
  const {name} = useParams()
  let title = null
  title = moreNetflixTitles.find(
    item => item.slug === name
  )
  if(!title){
    title = moreDisneyTitles.find(
    item => item.slug === name
  )
  }
  if(!title){
  title = moreMightLikeTitles.find(
    item => item.slug === name
  )
}
if(!title){
  title = moreappleTitles.find(
    item => item.slug === name
  )}
  if(!title){
    title = moreAmazonTitles.find(
      item => item.slug === name
    )
  }
  if(!title){
    return (
      <div className='w-screen h-screen bg-purple-950'>
      <div className='w-[100%] h-[100%] bg-black/70 flex justify-center items-center'>
      <h1>TITLE NOT FOUND</h1>
      </div>
    </div>
    )
  }
  return (
    <div className='w-screen h-screen bg-red-950'>
      <div className='w-[100%] h-[100%] bg-black/50 flex'>
        <div className="left w-[40%] flex justify-center items-center">
          <img className='shadow-[150px_50px_50px_rgba(0,0,0,0.7)] rounded-2xl w-[80%]' src={title.poster} alt="" />
        </div>
        <div className="right text-white flex flex-col w-[60%] justify-between py-15">
          <div className='flex gap-3 text-white py-15'>
            {title.genre.map(genre => {
            return <span onClick={() => navigate(`/genre/${genre.toLowerCase()}`)} className='bg-white/40 cursor-pointer transition-all ease duration-300 hover:bg-black px-4 rounded-2xl'>{genre}</span>
          })}
          </div>
          <div className='py-10 flex  flex-col gap-7 items-start pr-35'>
            <div className='flex gap-5 justify-center items-center'>
            <a href={title.ottLink} target='_blank' className='px-4 py-2 rounded-xl bg-purple-700 font-medium transition-all ease duration-300 hover:bg-black'><i className="ri-play-large-fill"></i>Watch Now</a>
            <img className='w-[100px]' src={title.ottIcon} alt="" />
            </div>
            <h1 className='text-6xl font-bold text-shadow-[10px_10px_10px_rgba(0,0,0,0.5)]'>{title.name}</h1>
          <h5 className='text-lg'>{title.desc}</h5>
          <span className='font-bold text-lg'>IMDB: {title.imdb}⭐</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Titledetailfullpage
