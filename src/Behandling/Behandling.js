import React from 'react'
import "./Behandling.css"

function Behandling() {
    return (
        <div>
            <div className="home-container">
            
            {/* Overskrift */}
            <div className="behandling-header">
                <p className="behandling-header-text">Behandling</p>
            </div>

            {/* Tekst og tekst */}
            <div className="behandling-container">
                <div className="behandling-container-item behandling-text">
                    <h1>Hej</h1>
                    <p>Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer. Sætningen blev gjordt kendt i 1960'erne med lanceringen af Letraset-ark, som indeholdt afsnit med Lorem Ipsum, og senere med layoutprogrammer som Aldus PageMaker, som også indeholdt en udgave af Lorem Ipsum.</p>
                </div>
                <img className="behandling-container-item behandling-pic" src="https://bindevævsterapeut.dk/wp-content/uploads/2020/10/Billede-af-Behandlerrum-004-1024x768.jpg" alt="" />
            </div>
        </div>
        </div>
    )
}

export default Behandling
