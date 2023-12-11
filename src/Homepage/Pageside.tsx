import React from "react"
import './css/pageside.css'
import pokeapi from '../images/pokeapi.png';

function pageside(){

    return(

        <div id="Side_bar">

            <div id='Component_search_pokemon'>

                <img src={pokeapi} id='image_pokeapi'></img>

                <input id='Search_pokemon'></input>
                <input id='Search_pokemon'></input>
                <input id='Search_pokemon'></input>
                <input id='Search_pokemon'></input>
                <input id='Search_pokemon'></input>
                <input id='Search_pokemon'></input>
            </div>
        </div>

    )
}

export default pageside;