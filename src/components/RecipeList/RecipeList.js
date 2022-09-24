import PropTypes from 'prop-types'
import { Recipe } from 'components/Recipe/Recipe'
// import recipes from "../recipes.json"
export const RecipeList = ({recipes}) => {
    return <div>
        {recipes.map((recipe, idx) =>
            <Recipe key={idx} recipe={recipe} />)}
    </div>;
};
RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired,
};
