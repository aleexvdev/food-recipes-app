import { Layout } from "./components/layout/Layout"
import { RecipeRoutes } from "./routes/RecipeRoutes"

export const RecipeApp = () => {
  return (
    <main className="mx-auto">
      <Layout />
      <RecipeRoutes />
    </main>
  )
}
