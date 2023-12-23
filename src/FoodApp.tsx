import { Layout } from "./components/layout/Layout"
import { FoodRoutes } from "./routes/FoodRoutes"

export const FoodApp = () => {
  return (
    <div>
      <FoodRoutes />
      <Layout />
    </div>
  )
}
