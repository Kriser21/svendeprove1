  
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../page/home';
import Nyheder from '../page/nyheder';
import Events from '../page/events';
import Camps from '../page/camps';
import Praktis from '../page/praktiskInfo';
import Login from '../page/login';
import Program from '../page/program';
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
              <Link to="/nyheder">NYHEDER</Link>
            </li>
            <li className="list-inline-item">
              <Link className="DropDown">
                EVENTS
                <div className="DropContent">
                  <Link to="/program">PROGRAM</Link>
                  <Link to="/events">LINE-UP</Link>
                </div>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/camps">CAMPS</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/praktis">PRAKTIKS INFO</Link>
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
      <Route path="/nyheder" exact component={Nyheder} />
      <Route path="/events" exact component={Events} />
      <Route path="/camps" exact component={Camps} />
      <Route path="/praktis" exact component={Praktis} />
      <Route path="/login" exact component={Login} />
      <Route path="/program" exact component={Program} />
      <Route path="/lineuptest" exact component={LineUpTest} />
    </Router>
  );
}
export default Routertest;