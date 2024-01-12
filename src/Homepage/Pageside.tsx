import React from "react"
import './css/pageside.css'
import pokeapi from '../images/pokeapi.png';

function pageside(){

    return(

        <div id="Side_bar">

            <div id='Component_search_pokemon'>

            
                <div className='Image_pokeapi'>
                <img src={pokeapi} id='image_pokeapi'></img>
                </div>


                <input id='Search_pokemon'></input>

                <div>

                    <h2>HP</h2>
                    <h2>Attack</h2>
                    <h2>Defense</h2>
                    <h2>Speed</h2>
                    <h2>Types</h2>
                </div>

            </div>
        </div>

    )
}

export default pageside;