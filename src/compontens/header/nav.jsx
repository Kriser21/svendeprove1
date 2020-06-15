import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import Logo from '../img/mediehuset-logo.png';



export default function Nav(){
    return(
       < Router>
        <div>
            <nav>
             
                <img src= {Logo} alt=""/>
                <p><b>MEDIE</b>SUSET</p>
                <p> 4-5-6-7. JULI 2020</p>
            
               <li>
                   <Link to="/home">Forsiden</Link>
               </li>
            </nav>

        </div>
        <Route path="/home" component={Home}/>
        </Router>
    )
};