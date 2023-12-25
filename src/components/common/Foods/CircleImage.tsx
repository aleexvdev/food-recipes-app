import { useState } from 'react'
import { images } from '../../../data/homeImages'

export const CircleImage = () => {

  const [imageState, setImageState] = useState<number>(1);

  const changueImage = (id: number) => {
    setImageState(id);
  }

  return (
    <div className='w-full h-full'>
      <div className='flex items-center justify-start 2xl:justify-center lg:justify-center md:w-justify-center w-full h-full relative'>
        <div 
          key={imageState} 
          className='p-2 rounded-full flex items-center justify-center w-[80%] 2xl:w-[60%] lg:w-[60%] md:w-[60%]'
        >
          <img src={`/assets/images/plato_${imageState}.svg`} alt="Foody" title="Foody" className="rounded-full w-full h-auto select-none" />
        </div>
        <div className='w-20 h-full flex flex-col items-center justify-between gap-0 absolute right-0 bottom-20 2xl:bottom-0 lg:bottom-0 md:bottom-0'>
        {
          images.map((image, key) => (
            <button 
              key={key} 
              className='p-2 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50 cursor-pointer'
              onClick={() => changueImage(image.id)}
            >
              <img src={`/assets/images/${image.image}.svg`} alt="Foody" title="Foody" className="rounded-full w-auto h-auto" />
            </button>
          ))
        }
        </div>
      </div>
    </div>
  )
}
