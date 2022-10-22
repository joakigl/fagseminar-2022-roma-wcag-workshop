type Pizza = {
  imageUrlSmall: string;
  imageUrlLarge: string;
  defaultIngredients: string[];
};

type Ingredients = {
  type: string;
  available: string;
  component: string;
};

export type { Pizza, Ingredients };
