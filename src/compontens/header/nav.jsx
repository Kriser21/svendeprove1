import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../page/home';
import Events from '../page/events';
import Camps from '../page/camps';
import Praktisk from '../page/praktiskInfo';
import Login from '../page/login';
import Promgram from '../page/promgram';
import Logo from '../img/mediehuset-logo.png';
import LineUpTest from '../page/examples/LineupTest';

function Routertest() {
  return (
    <Router>
      <header>
        <nav>
          <img src={Logo} alt="" />
          <p>
            <b>MEDIE</b>SUSET
            <br />4 - 5 - 6 - 7 .JULI 2020
          </p>

          <ul>
            <li className="list-inline-item">
              <Link to="/">FORSIDE</Link>
            </li>
  
            <li className="list-inline-item">
              <Link className="DropDown">
                EVENTS
                <div className="DropContent">
                  <Link to="/promgram">PROGRAM</Link>
                  <Link to="/events">LINE-UP</Link>
                </div>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/camps">CAMPS</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/praktisk">PRAKTIKS INFO</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/lineuptest">LINE UP TEST</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Route path="/" exact component={Home} />
      <Route path="/events" exact component={Events} />
      <Route path="/camps" exact component={Camps} />
      <Route path="/praktisk" exact component={Praktisk} />
      <Route path="/login" exact component={Login} />
      <Route path="/promgram" exact component={Promgram} />
      <Route path="/lineuptest" exact component={LineUpTest} />
    </Router>
  );
}
export default Routertest;