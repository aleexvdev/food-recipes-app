import IconBxHappyAlt from '../assets/icons/IconBxHappyAlt'
import { CircleImage } from '../components/common/Foods/CircleImage'

export const ViewHome = () => {
  return (
    <section className='bg-[#FFFEFC] w-full h-[100vh] text-white'>
      <div className="w-full h-full flex items-center justify-center container pb-20">
        <div className="w-[50%] h-full flex flex-col items-center justify-center">
          <div className="w-full h-full flex flex-col items-start justify-center">
            <span className="text-3xl text-orange-500 font-medium mb-3">Recipes</span>
            <h1 className="text-black font-bold tracking-wider mb-10 flex items-end justify-center">
              <span className='text-8xl mr-6'>Good</span>
              <span className='flex items-end justify-center text-8xl'>F<span className='flex items-end justify-center'>
                <img src={`/assets/images/plato_3.svg`} alt="Foody" title="Foody" className="rounded-full w-full h-auto select-none" />
                <img src={`/assets/images/plato_5.svg`} alt="Foody" title="Foody" className="rounded-full w-full h-auto select-none" />
              </span>d</span>
            </h1>
            <h1 className="text-black font-bold tracking-wider mb-10 flex items-end justify-center">
              <span className='text-8xl mr-6'>Good</span>
              <span className='flex items-end justify-center text-8xl'>M<span className='flex items-end justify-center'>
                <IconBxHappyAlt className='text-[70px] text-orange-500' />
                <IconBxHappyAlt className='text-[70px] text-orange-500' />
              </span>d</span>
            </h1>
            <p className="font-semibold text-2xl text-gray-900">The food palace is an neighborhood restaurent serving seasonal global cuisine driven by the faire.</p>
          </div>
        </div>
        <div className="w-[50%] h-full flex items-center justify-center py-20">
          <div className="w-full h-full flex items-center justify-center">
            <CircleImage />
          </div>
        </div>
      </div>
    </section>
  )
}
