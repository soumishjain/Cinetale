import Hero from './Hero/Hero'
import Continue from './Continue/Continue'
import Allottsections from './AllottSections/Allottsections'

const Mainsec = () => {
  return (
    <div className='px-10 w-full h-screen overflow-y-auto noscrolbar pr-8'>
      <Hero />
      <Continue />
      <Allottsections />
    </div>
  )
}

export default Mainsec
