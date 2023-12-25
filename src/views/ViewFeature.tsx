import { ItemCategory } from "../components/common/Card/ItemCategory"
import { categories } from "../data/categories"

export const ViewFeature = () => {
  //bg-[#FFF9F0]
  return (
    <section className='bg-[#FFF9F0] w-full 2xl:h-auto lg:h-auto md:h-auto h-auto text-white 2xl:my-0 2xl:px-44 lg:px-28 md:px-16 lg:mb-0 lg:py-20 px-4'>
      <div className="w-full h-full flex flex-col items-center justify-center container">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <span className="2xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-orange-500 font-medium mb-3">Features</span>
          <h1 className="2xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-black font-bold mb-3">Popular Categories</h1>
          <p className="2xl:text-4xl lg:text-3xl md:text-2xl text-2xl font-semibold text-gray-900 mt-5 lg:mt-[4rem] md:mt-[1rem]">Check out the variety of culinary categories, from comforting breakfasts to indulgent dinners.</p>
          <div 
            className="flex flex-wrap items-center justify-center gap-4 2xl:gap-10 lg:gap-10 md:gap-10 lg:flex-wrap md:flex-wrap lg:px-20 lg:mt-[4rem] md:mt-[3rem] mt-10 px-0"
          >
            {
              categories.map( (category, index) => (
                <ItemCategory id={index} category={category.category} image={category.image} text={category.text} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
