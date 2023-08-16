import React from 'react'

const Services = () => {
  return (
    <div className='relative mx-5 flex min-h-screen flex-col items-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
  <div className='relative w-full bg-[#000103] py-6  ring-gray-900/5 rounded-3xl'>
    <div className='mx-auto max-w-md'>
      <div className='pb-3 pt-12 text-center text-xs font-extralight tracking-widest text-white'>OUR SERVICE</div>
      <div className='-mx-40 mt-3 line-clamp-2 text-center text-5xl text-white font-medium'>We help businesses to make their product come to life, worldwide.</div>
    </div>

    <div className='grid grid-rows-3 gap-y-14 my-24'>

      <div className='grid grid-cols-2'>
            <div className='h-80 w-1/2 ml-64 bg-red-700 rounded-3xl'></div>
            <div className='mt-'>
                <h1 className='text-gray-100 text-3xl font-medium '>Website Development</h1>
                <p className='text-gray-400 pt-5 text-xl font-light '>Websites and eCommerce do not have to be expensive or complicated in order to be effective. 
                We deal with a wide spectrum of clients with varying budgets and needs.</p></div>
      </div>

      <div className='grid grid-cols-2'>
            <div className='h-80 w-1/2 ml-64 bg-red-700 rounded-3xl'></div>
            <div className='mt-10'>
                <h1 className='text-gray-100 text-3xl font-medium '>Website Development</h1>
                <p className='text-gray-400 pt-5 text-xl font-light '>We provide web applications on a variety of open source platforms to enable optimal budget management.</p></div>
      </div>

      <div className='grid grid-cols-2'>
            <div className='h-80 w-1/2 ml-64 bg-red-700 rounded-3xl'></div>
            <div className='mt-10'>
                <h1 className='text-gray-100 text-3xl font-medium '>Website Development</h1>
                <p className='text-gray-400 pt-5 text-xl font-light '>Websites and eCommerce do not have to be expensive or complicated in order to be effective. 
                We deal with a wide spectrum of clients with varying budgets and needs.</p></div>
      </div>
      
    </div>
  </div>
</div>

  )
}

export default Services