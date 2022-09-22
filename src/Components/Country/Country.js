import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country.area)
    // const {area} = props.country;
    
    return (
        <div>
            <img src={props.flags} alt="" />
            <h1>Name : {props.name} </h1>
            <h2>Population : {props.population}</h2>
            <h4>Area : {props.area}</h4>
            
            
        </div>
    );
};

export default Country;