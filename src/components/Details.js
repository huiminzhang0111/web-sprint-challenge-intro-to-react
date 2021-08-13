import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Details(props) {
    const { characterUrl, close } = props;
    const [details, setDetails] = useState(null);
    console.log(characterUrl)
    useEffect(() => {
        //console.log(`Fetching the character with id ${characterUrl}`);
        axios.get(`${characterUrl}`)
            .then(res => {
                setDetails(res.data);
            })
    }, [characterUrl]);

    return (
        <div>
            {
                details &&
                <>
                <h2>Name: {details.name}</h2>
                <p>Height: {details.height}</p>
                <p>Mass: {details.mass}</p>
                <p>Hair Color: {details.hair_color}</p>
                <p>Skin Color: {details.skin_color}</p>
                <p>Eye Color: {details.eye_color}</p>
                <p>Birth Year: {details.birth_year}</p>
                <p>Gender: {details.gender}</p>
                <p>Homeworld: {details.homeworld}</p>
                Films:
                <ul>
                    {details.films.map(film => <li key={film}>{film}</li>)}
                </ul>
                <p>Spices: {details.species}</p>
                vehicles:
                <ul>
                    {details.vehicles.map(vehicle => <li key={vehicle}>{vehicle}</li>)}
                </ul>
                Starships:
                <ul>
                    {details.starships.map(starship => <li key={starship}>{starship}</li>)}
                </ul>
                <p>Created: {details.created}</p>
                <p>Edited: {details.edited}</p>
                <p>Url: {details.url}</p>
                </>
            }
            <button onClick={close}>Close</button>
        </div>
    )
}
