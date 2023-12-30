export type TypeNavs = {
  id: number;
  nav: string;
  link: string;
}

export type TypeImageData = {
  id: number;
  image: string;
}

export type ItemCategoryProps = {
  id: number;
  category: string;
  image: string;
  text: string;
}

export type FetchRecipe = {
  from: number;
  to: number;
  count: number;
  _links?: NextPageFetch;
  hits: Hits[];
}

export type NextPageFetch = {
  href?: string;
  title?: string;
}

export type Hits = {
  recipe: Recipe;
  _links?: Links;
}

export type Links = {
  self?: Self;
}

export type Self = {
  title?: string;
  href?:  string;
}

export type DataRecipe = {
  recipe: Hits;
}

export type Recipe = {
  uri?: string;
  label?: string;
  image?: string;
  images?: Images;
  source?: string;
  url?: string;
  shareAs?: string;
  yield?: number;
  dietLabels?: string[];
  healthLabels?: string[];
  cautions?: string[] | [];
  ingredientLines?: string[];
  ingredients?: Ingredient[];
  calories?: number;
  totalCO2Emissions?: number;
  co2EmissionsClass?: string;
  totalWeight?: number;
  totalTime?: number;
  cuisineType?: string[];
  mealType?: string[];
  dishType?: string[];
  totalNutrients?: { [key: string]: Total };
  totalDaily?: { [key: string]: Total };
  digest?: Digest[];
  instructionLines?: string[];
  summary?: string;
  tags?: string[];
};


export type Digest = {
  label?:        string;
  tag?:          string;
  schemaOrgTag?: null | string;
  total?:        number;
  hasRDI?:       boolean;
  daily?:        number;
  unit?:         Unit|string;
  sub?:          Digest[];
}

export enum Unit {
  Empty = "%",
  G = "g",
  Kcal = "kcal",
  Mg = "mg",
  Μg = "µg"
}

export type Images = {
  THUMBNAIL?: Regular;
  SMALL?:     Regular;
  REGULAR?:   Regular;
  LARGE?:   Regular;
}

export type Regular = {
  url?:    string;
  width?:  number;
  height?: number;
}

export type Ingredient = {
  text?:         string;
  quantity?:     number;
  measure?:      string|null;
  food?:         string;
  weight?:       number;
  foodCategory?: string;
  foodId?:       string;
  image?:        string;
}

export type Total = {
  label?:    string;
  quantity?: number;
  unit?:     Unit|string;
}

export type TypeNetworks = {
  id: number;
  social_network: string;
  url: string;
  icon: string;
}

export type TypeGetRecipe = {
  data: FetchRecipe|null;
  message: string;
  status: number;
}