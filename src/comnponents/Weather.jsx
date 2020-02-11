import React from 'react'
import PropTypes from 'prop-types'


export default function Weather({reaction}) {
    //destructuring
    const {name, main} = reaction;
    if(!name) return null;

    //Kelvin degress
    const kelvin = 273.15



    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>{name}s climate is:</h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>Maximun temperature:
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>Minumun temperature:
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
    )
}

Weather.propTypes = {
    reaction : PropTypes.object.isRequired,
}