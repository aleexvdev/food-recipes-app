import { ItemCard } from "../components/common/Card"
import { recipes } from "../data/recipes"

export const ViewRecipes = () => {
  return (
    <section className='bg-[#FFF9F0] w-full h-[90vh] text-white'>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <span className="text-3xl text-orange-500 font-medium mb-3">Recipes</span>
          <h1 className="text-5xl text-black font-bold mb-3">Most Popular Recipes</h1>
          <div 
            className="flex items-center justify-center gap-10"
            style={{ margin: '5rem 0' }}
          >
            {
              recipes.map( (recipe, index) => (
                <ItemCard id={index} props={recipe} />
              ))
            }
          </div>
        </div>
        <div className="mb-10">
          <button className="bg-orange-500 px-4 py-3 rounded-xl hover:bg-orange-700">See More Recipes -</button>
        </div>
      </div>
    </section>
  )
}
