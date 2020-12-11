import React from 'react'
import "./Hjem.css"

function Hjem() {
    return (
        <div className="home-container">
            {/* Logo og titel */}
            <div className="header-container">
                <p className="header-item header-text">Bindevævsterapeut</p>
                <img className="header-item header-img" src="https://bindevævsterapeut.dk/wp-content/uploads/2020/10/lillilogo.jpg" alt="" />
                <p className="header-item header-text">Corinna Fleury</p>
            </div>
            
            {/* Navigationsbar */}
            <nav>
                <ul className="navbar">
                    <li><a className="nav-item">Hjem</a></li>
                    <li><a className="nav-item">Behandling</a></li>
                    <li><a className="nav-item">Om mig</a></li>
                    <li><a className="nav-item">Book en tid</a></li>
                </ul>
            </nav>

            {/* Intro tekst og  billede */}
            <div className="home-intro-container">
                <img className="home-intro-item home-intro-pic" src="https://bindevævsterapeut.dk/wp-content/uploads/2020/10/corinna.jpg" alt="" />
                <div className="home-intro-item home-intro-text">
                    <h1>Hej</h1>
                    <p>Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer. Sætningen blev gjordt kendt i 1960'erne med lanceringen af Letraset-ark, som indeholdt afsnit med Lorem Ipsum, og senere med layoutprogrammer som Aldus PageMaker, som også indeholdt en udgave af Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    )
}

export default Hjem
