import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FetchRecipe, Hits } from "../types/types"
import { getRecipes } from "../service/apirecipes"
import { CardRecipeView } from "../components/common/Card/CardRecipeView"
import IconRight from "../assets/icons/IconRight"
import IconArrowRight from "../assets/icons/IconArrowRight"

export const ViewRecipes = () => {

  const [recipes, setRecipes] = useState<FetchRecipe|null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRecipes();
        response.data && setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className='bg-white w-full h-auto 2xl:h-auto lg:h-auto md:h-auto text-white 2xl:pb-20 lg:pb-20 2xl:px-52 lg:px-40 lg:py-20 md:py-20 md:px-16 px-4 py-10'>
      <div className="w-full h-full flex flex-col items-center justify-center container bg-white">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="2xl:text-5xl lg:text-5xl md:text-4xl text-4xl text-green-600 font-bold mb-3">Explore Our Foods</h1>
          <p className="text-center 2xl:text-2xl lg:text-3xl md:text-2xl text-2xl text-gray-800 font-semibold 2xl:mt-5 lg:mt-5 md:mt-[3rem] mt-5 2x:px-24 px-0">Explore diverse recipes for breakfast, lunch, dinner, drinks, and desserts all in one place.</p>
          <div className="w-full h-full flex 2xl:flex-row lg:flex-col flex-col items-center justify-center 2xl:px-0 2xl:mt-14 my-5">
            <div 
              className="w-full 2xl:w-[80%] h-full flex flex-col 2xl:flex-row lg:flex-row md:flex-row 2xl:flex-wrap lg:flex-wrap items-center justify-center gap-10 mt-10 2xl:mt-0 2xl:px-0"
            >
              {
                recipes?.hits &&
                recipes.hits.slice(0, 6).map((hit: Hits, index: number) => (
                  <CardRecipeView key={index} id={index} props={hit} />
                ))
              }
            </div>
            <div className="w-full 2xl:w-[20%] h-full flex flex-row justify-center items-center 2xl:flex-col 2xl:items-start 2xl:justify-start mt-16 2xl:mt-0 2xl:mb-0">
              <Link 
                to={'/recipes'}
              >
                <button className="w-full  h-full flex items-center justify-between p-1 bg-green-600 rounded-3xl hover:bg-green-700">
                  <span className="text-white font-semibold text-xl mx-4">Explore Recipes</span>
                  <span className="bg-white rounded-full h-12 w-12 p-2 flex items-center justify-center"><IconArrowRight className="w-full h-full text-2xl text-black" /></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
