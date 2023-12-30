import { Layout } from "./components/layout/Layout"
import { RecipeRoutes } from "./routes/RecipeRoutes"

export const RecipeApp = () => {
  return (
    <main 
      className="mx-auto bg-gradient-to-r"
      style={{  backgroundImage: "linear-gradient(90deg, #60af46 20%, #60af46 35%, white 20%)" }}
    >
      <Layout />
      <RecipeRoutes />
    </main>
  )
}
