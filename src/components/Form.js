import React from 'react';

const Form = props => (
    <form onSubmit={props.getOptions}>
        <div className="form-container">
            <div className="price-container">
                <input type="radio" name="price" value="1" /> $
                <br /><input type="radio" name="price" value="2" /> $$
                <br /><input type="radio" name="price" value="3" /> $$$
                <br /><input type="radio" name="price" value="4" /> $$$$
            </div>

            <div className="cuisine-container">
                <input type="checkbox" name="cuisine" value="am" /> American
                <br /><input type="checkbox" name="cuisine" value="chinese" /> Chinese
                <br /><input type="checkbox" name="cuisine" value="german" /> German
                <br /><input type="checkbox" name="cuisine" value="indian" /> Indian
                <br /><input type="checkbox" name="cuisine" value="krorean" /> Korean
                <br /><input type="checkbox" name="cuisine" value="thai" /> Thai
                <br /><input type="checkbox" name="cuisine" value="vietnamese" /> Vietnamese
                <br /><input type="checkbox" name="cuisine" value="breakfast" /> Breakfast
            </div>
            <div>
                <input type="text" name="city" placeholder="City..." />
                <input type="text" name="radius" placeholder="How many miles can you travel?" />
            </div>
            <button>I'm Hungry</button>
        </div>
    </form>
);

export default Form;