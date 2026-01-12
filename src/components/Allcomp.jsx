import Leftnav from './Leftnav/Leftnav'
import Mainsec from './Mainsec'
import Topnav from './Topnav/Topnav'


const Allcomp = () => {
  return (
    <div className='w-screen flex flex-col bg-black/80 backdrop-blur-2xl sm:flex-row'>
      <div className='w-[90%] hidden sm:block p-4 pr-0 sm:w-[17%]'>
           <Leftnav />
      </div>
      <div className='flex flex-col sm:p-4 gap-3  w-[100%] sm:w-[85%] h-screen'>
        <Topnav />
        <Mainsec />
      </div>
    </div>
    
  )
}

export default Allcomp
