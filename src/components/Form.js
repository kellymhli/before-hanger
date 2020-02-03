import React from 'react';

const Form = props => (
    <form onSubmit={props.getOptions}>
        <div className="form-container">
            <div className="price-container">
                <input type="checkbox" name="price" value="1" id="price1" />
                <label for="price1">$</label>
                <input type="checkbox" name="price" value="2" id="price2" />
                <label for="price2">$$</label>
                <input type="checkbox" name="price" value="3" id="price3" />
                <label for="price3">$$$</label>
                <input type="checkbox" name="price" value="4" id="price4" />
                <label for="price4">$$$$</label>
            </div>

            <div className="cuisine-container">
                <input type="checkbox" name="cuisine" value="am" id="am"/>
                <label for="am">American</label>
                <input type="checkbox" name="cuisine" value="breakfast_brunch" id="bk" />
                <label for="bk">Breakfast</label>
                <input type="checkbox" name="cuisine" value="chinese" id="ch" />
                <label for="ch">Chinese</label>
                <input type="checkbox" name="cuisine" value="french" id="fr" />
                <label for="fr">French</label>
                <input type="checkbox" name="cuisine" value="german" id="gm" />
                <label for="gm">German</label>
                <input type="checkbox" name="cuisine" value="greek" id="gr" />
                <label for="gr">Greek</label>
                <input type="checkbox" name="cuisine" value="indpak" id="in" />
                <label for="in">Indian</label>
                <input type="checkbox" name="cuisine" value="italian" id="it" />
                <label for="it">Italian</label>
                <br /><input type="checkbox" name="cuisine" value="japanese" id="jp" />
                <label for="jp">Japanese</label>
                <input type="checkbox" name="cuisine" value="korean" id="kr" />
                <label for="kr">Korean</label>
                <input type="checkbox" name="cuisine" value="mexican" id="mx" />
                <label for="mx">Mexican</label>
                <input type="checkbox" name="cuisine" value="soulfood" id="sl" />
                <label for="sl">Soul</label>
                <input type="checkbox" name="cuisine" value="thai" id="th" />
                <label for="th">Thai</label>
                <input type="checkbox" name="cuisine" value="vietnamese" id="vt" />
                <label for="vt">Vietnamese</label>
                <br /><input type="text" name="other" placeholder="Craving something else?" />
            </div>
            <div class="distance">
                <input type="text" name="city" placeholder="City..." defaultValue="Downtown, San Francisco"/><br />
                <input type="text" name="radius" placeholder="How many miles can you travel?" defaultValue="3" />
            </div>
            <button>I'm Hungry</button>
        </div>
    </form>
);

export default Form;