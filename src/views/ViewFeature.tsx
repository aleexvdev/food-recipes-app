import { categories } from '../data/categories'
import { ItemCategory } from '../components/common/Card/ItemCategory'

export const ViewFeature = () => {

  return (
    <section className='bg-white w-full h-auto px-4 2xl:px-52 2xl:min-h-[500px] pt-12 2xl:pt-0'>
      <div className="w-full h-full flex flex-col 2xl:flex-row items-center justify-center container">
        <div className='w-full 2xl:w-[30%] 2xl:min-h-[500px]'>
          <div className='w-full h-full 2xl:min-h-[500px] flex flex-col items-center 2xl:items-start justify-center'>
            <h1 className='font-bold text-green-600'><span className='text-4xl 2xl:text-7xl'>Eat Always Healthy</span></h1>
            <p className='mt-7 2xl:mt-10 font-semibold text-3xl'>Popular categories</p>
          </div>
        </div>
        <div className='w-full h-full 2xl:w-[70%] 2xl:min-h-[500px]'>
          <div className='w-full 2xl:h-[250px] flex flex-wrap items-center justify-center py-10 2xl:py-0'>
            {
              categories.map((category, index) => (
                <ItemCategory key={index} id={index} category={category.category} image={category.image} text={category.text} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
