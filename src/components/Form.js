import React from 'react';

const Form = () => {
    return (
        <div className="form-container">
            <input type="checkbox" name="cuisine" value="am" /> American
            <br /><input type="checkbox" name="cuisine" value="ch" /> Chinese
            <br /><input type="checkbox" name="cuisine" value="gm" /> German
            <br /><input type="checkbox" name="cuisine" value="in" /> Indian
            <br /><input type="checkbox" name="cuisine" value="kr" /> Korean
            <br /><input type="checkbox" name="cuisine" value="th" /> Thai
            <br /><input type="checkbox" name="cuisine" value="vn" /> Vietnamese
        </div>
    );
};

export default Form;