import { categories } from '../data/categories'
import { ItemCategory } from '../components/common/Card/ItemCategory'

export const ViewFeature = () => {

  return (
    <section className='bg-white w-full h-auto px-52 min-h-[500px]'>
      <div className="w-full h-full flex items-center justify-center container">
        <div className='w-[30%] min-h-[500px]'>
          <div className='w-full h-full min-h-[500px] flex flex-col items-start justify-center'>
            <h1 className='font-bold'><span className='text-7xl'>Eat Always Healthy</span></h1>
            <p className='mt-10 font-semibold text-3xl'>Popular categories</p>
          </div>
        </div>
        <div className='w-[70%] min-h-[500px]'>
          <div className='w-full h-[250px] flex flex-wrap items-center justify-center'>
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
