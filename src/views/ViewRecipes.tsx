import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FetchRecipe } from "../types/types"
import { getRecipes } from "../service/apirecipes"
import { CardRecipeView } from "../components/common/Card/CardRecipeView"
import IconRight from "../assets/icons/IconRight"

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
    <section className='bg-white w-full h-auto 2xl:h-auto lg:h-auto md:h-auto text-white 2xl:pb-20 lg:pb-20 2xl:px-52 lg:px-28 lg:py-20 md:py-20 md:px-16 px-4 py-20'>
      <div className="w-full h-full flex flex-col items-center justify-center container">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="2xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-green-600 font-bold mb-3">Explore Our Foods</h1>
          <p className="text-center 2xl:text-2xl lg:text-3xl md:text-2xl text-2xl text-gray-800 font-semibold 2xl:mt-5 lg:mt-[4rem] md:mt-[3rem] px-24">Explore diverse recipes for breakfast, lunch, dinner, drinks, and desserts all in one place.</p>
          <div className="w-full h-full flex items-center justify-center">
            <div 
              className="w-[80%] h-full flex flex-col 2xl:flex-row md:flex-row md:flex-wrap items-center justify-center gap-10 lg:mt-[4rem] md:mt-[3rem] mt-14k"
            >
              {
                recipes?.hits && recipes.hits.slice(0, 6).map((hit, index) => (
                  <CardRecipeView key={index} id={index} props={hit} />
                ))
              }
            </div>
            <div className="w-[20%] h-full flex flex-col items-center justify-center">
              <Link 
                to={'/recipes'}
              >
                <button className="bg-green-600 rounded-full p-2 relative">
                  <IconRight className="text-white text-3xl" />
                  <span className="bg-green-600 h-2 absolute w-24 rounded-md top-5 right-10"></span>
                </button>
              </Link>
              <span className="w-full flex items-center justify-start text-xl text-black font-semibold mt-2 pl-1">Explore Recipes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
