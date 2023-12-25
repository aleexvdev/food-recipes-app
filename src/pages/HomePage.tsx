import { ViewAbout } from "../views/ViewAbout"
import { ViewFeature } from "../views/ViewFeature"
import { ViewHome } from "../views/ViewHome"
import { ViewRecipes } from "../views/ViewRecipes"

export const HomePage = () => {

  return (
    <>
      <ViewHome />
      <ViewAbout />
      <ViewFeature />
      <ViewRecipes />
    </>
  )
}