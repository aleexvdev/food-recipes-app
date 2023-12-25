import { Route, Routes } from 'react-router-dom';
import { RecipePage, HomePage } from '../pages';

export const RecipeRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipePage />} />
      </Routes>
    </>
  )
}