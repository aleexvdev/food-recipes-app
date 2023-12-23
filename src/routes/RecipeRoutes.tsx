import { Route, Routes } from 'react-router-dom';
import { AboutPage, RecipePage, HomePage } from '../pages';

export const RecipeRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recipe" element={<RecipePage />} />
      </Routes>
    </>
  )
}