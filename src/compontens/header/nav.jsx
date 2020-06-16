import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import Events from '../pages/events';
import Camps from '../pages/camps';
import Praktiskinfo from '../pages/praktiskinfo';
import Login from '../pages/login';
import Logo from '../img/mediehuset-logo.png';



export default function Nav(){
    return(
       < Router>
        <div>
            <nav>
             
                <img src= {Logo} alt=""/>
                <p><b>MEDIE</b>SUSET <br/>4-5-6-7. JULI 2020</p>
            <ul>
                <button> <Link to="/købbillet"> KØB BILLET</Link></button>
               <li>
                   <Link to="/home">Nydheder</Link>
               </li>
               <li>
                   <Link to="/eventes">Events</Link>
               </li>
               <li>
                   <Link to="/camps">Camps</Link>
               </li>
               <li>
                   <Link to="/camps">Praktisk info</Link>
               </li>
               <li>
                   <Link to="/login">Login</Link>
               </li>
            </ul>
            </nav>

        </div>
        <Route path="/home" component={Home}/>
        <Route path="/eventes" component={Events}/>
        <Route path="/camps" component={Camps}/>
        <Route path="/praktiskinfo" component={Praktiskinfo}/>
        <Route path="/login" component={Login}/>
        </Router>
    )
};