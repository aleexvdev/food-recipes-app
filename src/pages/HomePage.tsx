
import { ViewAbout, ViewFeature, ViewHome, ViewRecipes } from "../views"
import { FooterPage } from "./FooterPage"

export const HomePage = () => {

  return (
    <>
      <ViewHome />
      <ViewAbout />
      <ViewFeature />
      <ViewRecipes />
      <FooterPage />
    </>
  )
}