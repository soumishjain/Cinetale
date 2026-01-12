import Hero from './Hero/Hero'
import Continue from './Continue/Continue'
import Allottsections from './AllottSections/Allottsections'

const Mainsec = () => {
  return (
    <div className='sm:px-10 w-[100%] sm:pr-5 h-screen pt-4 pl-4 overflow-x-hidden overflow-y-auto noscrolbar sm:pr-8'>
      <Hero />
      <Continue />
      <Allottsections />
    </div>
  )
}

export default Mainsec
