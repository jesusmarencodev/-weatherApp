import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types'


const Form = ({search, setSearch, setConsult}) => {

    //state error
    const [error, setError] = useState(false);
    //extract values
    const { city, country} = search;

    //function that place the elements in the state
    const handlerChange = e =>{
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }
    //function that is responsible for capturing the users submit
    const handleSubmit = e =>{
        e.preventDefault();
        //validate
        if(city.trim() === '' || country.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        setConsult(true);




    }
    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error message="all fields are required"/> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handlerChange}
                 />
                 <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handlerChange}
                >
                    <option value="">Select a country</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country"></label>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="look for weather"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
};
Form.propTypes = {
    search : PropTypes.object.isRequired,
    setSearch : PropTypes.func.isRequired,
    setConsult : PropTypes.func.isRequired,
}

export default Form;