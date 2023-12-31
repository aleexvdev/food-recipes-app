import { Link } from "react-router-dom"
import { ButtonFood } from "../components/common/Button/ButtonFood"
import { TypeButton } from "../types/typesComponents"

export const ViewHome = () => {

  const btnprops: TypeButton = {
    onclick: () => console.log('object'),
    text: "Explore Recipes",
    type: "button"
  }

  return (
    <section className="w-full h-auto 2xl:h-[calc(100vh-80px)] px-4 2xl:px-52 pt-20 2xl:pt-0">
      <div className="w-full h-full flex flex-col-reverse 2xl:flex-row items-center justify-center">
        <div className="w-full 2xl:w-[50%] my-14 2xl:mt-0">
          <div className="w-full h-full p-1 2xl:p-16">
            <img src={`/assets/images/plato_2.svg`} alt="Food Recipe" title="Food Recipe" className="rounded-full w-full h-auto select-none border-[20px] p-3 border-[#16A34A]" />
          </div>
        </div>
        <div className="w-full 2xl:w-[50%]">
          <div className="w-full flex flex-col justify-center items-center text-center">
            <div className="w-full my-3">
              <h1 className="font-bold"><span className='2xl:text-7xl lg:text-8xl md:text-[90px] text-5xl md:mr-6 lg:mr-6 2xl:mr-6 mr-0'>Health Requires</span></h1>
              <h1 className="font-bold"><span className='2xl:text-7xl lg:text-8xl md:text-[90px] text-5xl md:mr-6 lg:mr-6 2xl:mr-6 mr-0'>Healthy food</span></h1>
              <p className="mt-4 font-semibold text-2xl 2xl:text-3xl">Manage your recipes the easy way</p>
            </div>
            <div className="mt-5">
              <p className="text-gray-600/90 font-semibold block">Embark on a sensory feast at our website! Immerse yourself in a culinary world brimming with delightful recipes, all sourced from the rich database of Edaman. From exquisite preparations to detailed nutritional insights, our platform is the perfect place to explore, learn, and tantalize your taste buds. Welcome to the gastronomic journey you've been waiting for.</p>
            </div>
            <div className='2xl:mt-14 lg:mt-10 md:mt-14 mt-10'>
              <Link to={'/recipes'}>
                <ButtonFood props={btnprops} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
