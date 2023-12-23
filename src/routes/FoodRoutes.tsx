import { Route, Routes } from 'react-router-dom';
import { AboutPage, FoodPage, HomePage } from '../pages';

export const FoodRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/foods" element={<FoodPage />} />
      </Routes>
    </>
  )
}