import { Layout } from "./components/layout/Layout"
import { RecipeRoutes } from "./routes/RecipeRoutes"

export const RecipeApp = () => {
  return (
    <div>
      <Layout />
      <RecipeRoutes />
    </div>
  )
}
