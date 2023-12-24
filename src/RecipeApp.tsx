import { Layout } from "./components/layout/Layout"
import { RecipeRoutes } from "./routes/RecipeRoutes"

export const RecipeApp = () => {
  return (
    <main className="bg-orange-500 mx-auto bg-main">
      <Layout />
      <RecipeRoutes />
    </main>
  )
}
