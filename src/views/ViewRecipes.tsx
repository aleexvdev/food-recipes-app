import { ButtonFood } from "../components/common/Button/ButtonFood"
import { ItemCard } from "../components/common/Card"
import { recipes } from "../data/recipes"
import { TypeButton } from "../types/typesComponents"

export const ViewRecipes = () => {

  const btnprops: TypeButton = {
    onclick: () => console.log('object'),
    text: "See More Recipes",
    type: "button"
  }

  return (
    <section className='bg-[#FFF9F0] w-full h-[90vh] text-white'>
      <div className="w-full h-full flex flex-col items-center justify-center container">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <span className="text-3xl text-orange-500 font-medium mb-3">Recipes</span>
          <h1 className="text-5xl text-black font-bold">Most Popular Recipes</h1>
          <p className="font-semibold text-2xl text-gray-900 mt-10">Among the most popular recipes on the platform you will find delicious classics such as Ceviche, Lomo Saltado and Arroz Verde.</p>
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
        <div className="mb-10 w-full flex items-center justify-center">
          <ButtonFood props={btnprops} />
        </div>
      </div>
    </section>
  )
}
