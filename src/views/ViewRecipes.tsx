import { Link } from "react-router-dom"
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
  //bg-[#FFF9F0]
  return (
    <section className='bg-[#FFF9F0] w-full 2xl:h-auto lg:h-auto text-white 2xl:my-0 2xl:pt-40 2xl:pb-20 lg:pb-20 2xl:px-44 lg:px-28 lg:py-20'>
      <div className="w-full h-full flex flex-col items-center justify-center container">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <span className="2xl:text-5xl lg:text-4xl text-orange-500 font-medium mb-3">Recipes</span>
          <h1 className="2xl:text-7xl lg:text-6xl text-black font-bold">Most Popular Recipes</h1>
          <p className="2xl:text-4xl lg:text-3xl font-semibold text-gray-900 mt-10 lg:mt-[4rem]">Among the most popular recipes on the platform you will find delicious classics such as Ceviche, Lomo Saltado and Arroz Verde.</p>
          <div 
            className="flex items-center justify-center gap-10 lg:mt-[4rem]"
          >
            {
              recipes.map( (recipe, index) => (
                <ItemCard id={index} props={recipe} />
              ))
            }
          </div>
        </div>
        <div className="lg:pb-10 w-full flex items-center justify-center lg:pt-20">
          <Link to={'/recipes'}>
            <ButtonFood props={btnprops} />
          </Link>
        </div>
      </div>
    </section>
  )
}
