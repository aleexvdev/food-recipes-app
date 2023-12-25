
import { ViewAbout, ViewFeature, ViewHome, ViewRecipes } from "../views"
import { FooterPage } from "./FooterPage"

export const HomePage = () => {
  //2xl:bg-red-700 sm:bg-black md:bg-slate-600 lg:bg-yellow-400
  return (
    <div className="">
      <ViewHome />
      <ViewAbout />
      <ViewFeature />
      <ViewRecipes />
      <FooterPage />
    </div>
  )
}