import { Recipe } from "./Recipe/Recipe";
import recipes from '../recipes.json'
export const App = () => {
  return (
    <div>
      <Recipe recipe={recipes[0] } />
    </div>
  );
};
