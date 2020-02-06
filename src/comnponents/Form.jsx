import React, {useState} from 'react';

const Form = () => {
    //state form
    const [search, setSearch] = useState({
        city: '',
        country: ''
    })
    //extract values
    const { city, country} = search;

    //function than place the elements in the state
    const handlerChange = e =>{
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form>
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
        </form>
    );
};

export default Form;