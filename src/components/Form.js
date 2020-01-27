import React from 'react';

const Form = () => {
    return (
        <div className="form-container">
            <div className="price-container">
                <input type="checkbox" name="price" value="1" /> $
                <br /><input type="checkbox" name="price" value="2" /> $$
                <br /><input type="checkbox" name="price" value="3" /> $$$
                <br /><input type="checkbox" name="price" value="4" /> $$$$
            </div>

            <div className="cuisine-container">
                <input type="checkbox" name="cuisine" value="am" /> American
                <br /><input type="checkbox" name="cuisine" value="ch" /> Chinese
                <br /><input type="checkbox" name="cuisine" value="gm" /> German
                <br /><input type="checkbox" name="cuisine" value="in" /> Indian
                <br /><input type="checkbox" name="cuisine" value="kr" /> Korean
                <br /><input type="checkbox" name="cuisine" value="th" /> Thai
                <br /><input type="checkbox" name="cuisine" value="vn" /> Vietnamese
            </div>

            <button>I'm Hungry</button>
        </div>
    );
};

export default Form;