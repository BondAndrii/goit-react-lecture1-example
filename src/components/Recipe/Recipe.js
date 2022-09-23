export const Recipe = ({ recipe:{ name, time, servings, calories } }) => {
        return (
        <article>
            <h2>{name}</h2>
            <div>
                <div>
                    <span>Icon</span>
                        <p>{time} хвилин</p>
                </div>
                <div>
                    <span>Icon</span>
                        <p>{ servings} частин</p>
                </div>
                <div>
                    <span>Icon</span>
                        <p>{ calories} калорій</p>
                </div>
            </div>
        </article>
    );
};