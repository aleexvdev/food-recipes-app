import axios, { AxiosResponse } from 'axios';
import { FetchRecipe, TypeGetRecipe } from '../types/types';


const BASE_URL = 'https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=36e9f9c6&app_key=70ac2415662bab240cd5e51a585507c4&random=true&cuisineType=American&beta=false';
// const TOKEN = '1024982038525332';

export const getRecipes = async (): Promise<TypeGetRecipe> => {
  const url = `${BASE_URL}`;
  try {
    const response: AxiosResponse<FetchRecipe> = await axios.get(url);
    return {
      data: response.data,
      message: 'Data fetched successfully',
      status: 200,
    };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      message: 'Failed to fetch data',
      status: 500,
    };
  }
}

