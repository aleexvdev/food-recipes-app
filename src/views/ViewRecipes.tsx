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
    <section className='bg-[#FFF9F0] w-full h-auto 2xl:h-auto lg:h-auto md:h-auto text-white 2xl:my-0 2xl:pt-40 2xl:pb-20 lg:pb-20 2xl:px-44 lg:px-28 lg:py-20 md:py-20 md:px-16 px-4 py-20'>
      <div className="w-full h-full flex flex-col items-center justify-center container">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <span className="2xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-orange-500 font-medium mb-3">Recipes</span>
          <h1 className="2xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-black font-bold">Most Popular Recipes</h1>
          <p className="2xl:text-4xl lg:text-3xl md:text-2xl text-2xl font-semibold text-gray-900 mt-10 lg:mt-[4rem] md:mt-[3rem]">Among the most popular recipes on the platform you will find delicious classics such as Ceviche, Lomo Saltado and Arroz Verde.</p>
          <div 
            className="flex flex-col 2xl:flex-row md:flex-row md:flex-wrap items-center justify-center gap-10 lg:mt-[4rem] md:mt-[3rem] mt-14"
          >
            {
              recipes.map( (recipe, index) => (
                <ItemCard id={index} props={recipe} />
              ))
            }
          </div>
        </div>
        <div className="lg:pb-10 w-full flex items-center justify-center lg:pt-20 md:pt-20 pt-16">
          <Link to={'/recipes'}>
            <ButtonFood props={btnprops} />
          </Link>
        </div>
      </div>
    </section>
  )
}
