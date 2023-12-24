import { ViewAbout } from "../views/ViewAbout"
import { ViewHome } from "../views/ViewHome"
import { ViewRecipes } from "../views/ViewRecipes"

export const HomePage = () => {

  return (
    <>
      <ViewHome />
      <ViewAbout />
      <ViewRecipes />
    </>
  )
}