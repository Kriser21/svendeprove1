  
import React from 'react';

export default function Program() {
    return(
        <footer>
            <span className="media">
                <h2>FØLG OS</h2>
                <i class="fab fa-facebook fa-10x"></i>
                <i class="fab fa-twitter-square fa-10x"></i>
            </span>
            <span className="NewsLetter">
                <h2>TILMELD NYHEDSBREV</h2>
                <p className="LetterWrapper">
                    <span >Få seneste nyt sendt dirkte til din indbakke</span>
                    <br/>
                    <span className="NewsInput"> <input type="text" placeholder="INDTAST DIN E-MAIL"/> <button>TILMELD NYHEDSBREV</button></span>
                </p>
            </span>
        </footer>
    )
};