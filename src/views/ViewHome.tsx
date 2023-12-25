import { Link } from 'react-router-dom'
import IconBxHappyAlt from '../assets/icons/IconBxHappyAlt'
import { ButtonFood } from '../components/common/Button/ButtonFood'
import { CircleImage } from '../components/common/Foods/CircleImage'
import { TypeButton } from '../types/typesComponents'

export const ViewHome = () => {

  const btnprops: TypeButton = {
    onclick: () => console.log('object'),
    text: "Explore Recipes",
    type: "button"
  }

  return (
    <section className='bg-[#FFFEFC] w-full h-[100vh] text-white 2xl:px-44 lg:h-[100vh] lg:px-28'>
      <div className="w-full h-full flex items-center justify-center container">
        <div className="w-[50%] h-full flex flex-col items-center justify-center">
          <div className="w-full h-full flex flex-col items-start justify-center">
            <span className="2xl:text-4xl lg:text-3xl text-orange-500 font-medium mb-3">Recipes</span>
            <h1 className="text-black font-bold tracking-wider mb-5 flex items-end justify-center">
              <span className='2xl:text-9xl lg:text-8xl mr-6'>Good</span>
              <span className='flex items-end justify-center 2xl:text-9xl lg:text-8xl'>F<span className='flex items-end justify-center lg:pb-2'>
                <img src={`/assets/images/plato_3.svg`} alt="Foody" title="Foody" className="rounded-full 2xl:w-full lg:w-14 h-auto select-none" />
                <img src={`/assets/images/plato_5.svg`} alt="Foody" title="Foody" className="rounded-full 2xl:w-full lg:w-14 h-auto select-none" />
              </span>d</span>
            </h1>
            <h1 className="text-black font-bold tracking-wider mb-10 flex items-end justify-center">
              <span className='2xl:text-9xl lg:text-8xl mr-6'>Good</span>
              <span className='flex items-end justify-center 2xl:text-9xl lg:text-8xl'>M<span className='flex items-end justify-center'>
                <IconBxHappyAlt className='2xl:text-[70px] lg:text-[60px] text-orange-500' />
                <IconBxHappyAlt className='2xl:text-[70px] lg:text-[60px] text-orange-500' />
              </span>d</span>
            </h1>
            <p className="font-semibold text-2xl text-gray-900">The food palace is an neighborhood restaurent serving seasonal global cuisine driven by the faire.</p>
            <div className='2xl:mt-14 lg:mt-10'>
              <Link to={'/recipes'}>
                <ButtonFood props={btnprops} />
              </Link>
            </div>
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
