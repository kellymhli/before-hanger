import React from 'react';

const Form = props => (
    <form onSubmit={props.getOptions}>
        <div className="form-container">
            <div className="price-container">
                <input type="radio" name="price" value="1" id="radio1" />
                <label for="radio1">$</label>
                <input type="radio" name="price" value="2" id="radio2" />
                <label for="radio2">$$</label>
                <input type="radio" name="price" value="3" id="radio3" />
                <label for="radio3">$$$</label>
                <input type="radio" name="price" value="4" id="radio4" />
                <label for="radio4">$$$$</label>
            </div>

            <div className="cuisine-container">
                <input type="checkbox" name="cuisine" value="am" id="am"/>
                <label for="am">American</label>
                <br /><input type="checkbox" name="cuisine" value="chinese" id="ch" />
                <label for="ch">Chinese</label>
                <br /><input type="checkbox" name="cuisine" value="german" id="gm" />
                <label for="gm">German</label>
                <br /><input type="checkbox" name="cuisine" value="indian" id="in" />
                <label for="in">Indian</label>
                <br /><input type="checkbox" name="cuisine" value="krorean" id="kr" />
                <label for="kr">Korean</label>
                <br /><input type="checkbox" name="cuisine" value="japanese" id="jp" />
                <label for="jp">Japanese</label>
                <br /><input type="checkbox" name="cuisine" value="thai" id="th" />
                <label for="th">Thai</label>
                <br /><input type="checkbox" name="cuisine" value="vietnamese" id="vt" />
                <label for="vt">Vietnamese</label>
                <br /><input type="checkbox" name="cuisine" value="breakfast" id="bk" />
                <label for="bk">Breakfast</label>
            </div>
            <div>
                <input type="text" name="city" placeholder="City..." defaultValue="94108"/><br />
                How many miles can you travel?<br />
                <input type="text" name="radius" placeholder="How many miles can you travel?" defaultValue="3" />
            </div>
            <button>I'm Hungry</button>
        </div>
    </form>
);

export default Form;