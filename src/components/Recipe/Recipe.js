import { Card, InfoConteiner, RecipeName, InfoBlock, Label } from './Recipe.styled';
import {BsFillAlarmFill, BsFillGrid3X2GapFill} from 'react-icons/bs';
import { BiAperture } from 'react-icons/bi';
import PropTypes from 'prop-types';
export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
        return (
        <Card>
            <RecipeName>{name}</RecipeName>
            <InfoConteiner>
                <InfoBlock>
                        <BsFillAlarmFill size={16} />
                        <Label>{time} хвилин</Label>
                </InfoBlock>
                <InfoBlock>
                    <BsFillGrid3X2GapFill size={16} />
                        <Label>{ servings} частин</Label>
                </InfoBlock>
                <InfoBlock>
                    <BiAperture size={16} />
                        <Label>{ calories} калорій</Label>
                </InfoBlock>
            </InfoConteiner>
            </Card>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.shape({
        name: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
    }

    )
}