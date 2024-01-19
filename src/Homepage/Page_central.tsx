import React from "react";
import './css/pagecentral.css'

function Page_central() {

    return (

        <div id='pagecentral'>

            <h1 className="name_pokemon">Dragonite</h1>

            <div id='div_pokemon'>

                <div className='Flipper-cards'>
                    <div className="Flipper">
                        <div className="Front">
                            <img className='image_pokemon' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png'></img>
                        </div>
                        <div className="Back">
                            <img className='image_pokemon' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/149.png'></img>
                        </div>

                    </div>


                </div>

               
            </div>
        </div>
    )

}

export default Page_central;