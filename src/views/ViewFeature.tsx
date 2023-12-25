import { ItemCategory } from "../components/common/Card/ItemCategory"
import { categories } from "../data/categories"

export const ViewFeature = () => {
  return (
    <section className='bg-[#FFF9F0] w-full h-[90vh] text-white pb-36'>
      <div className="w-full h-full flex flex-col items-center justify-center container">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <span className="text-3xl text-orange-500 font-medium mb-3">Features</span>
          <h1 className="text-5xl text-black font-bold mb-3">Popular Categories</h1>
          <p className="font-semibold text-2xl text-gray-900 mt-10">Check out the variety of culinary categories, from comforting breakfasts to indulgent dinners.</p>
          <div 
            className="flex items-center justify-center gap-10"
            style={{ margin: '5rem 0' }}
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
