
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h3>Country</h3>
            <h4>Total : {countries.length}</h4>
            {
                countries.map(country => console.log(country))
            }
            <div className='countriesContainer'>
            {
                countries.map( country => <Country 
                    name={country.name.common}
                    population={country.population}
                    area={country.area}
                    flags={country.flags.png}
                    ></Country>)
            }
            </div>
        </div>
    );
};


export default Countries;