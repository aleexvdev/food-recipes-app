
import { ViewFeature, ViewHome, ViewRecipes } from "../views"
import { FooterPage } from "./FooterPage"

export const HomePage = () => {
  // className="2xl:bg-red-700 sm:bg-black md:bg-slate-600 lg:bg-yellow-400 bg-slate-500"
  return (
    <>
      <ViewHome />
      <ViewFeature />
      <ViewRecipes />
      <FooterPage />
    </>
  )
}