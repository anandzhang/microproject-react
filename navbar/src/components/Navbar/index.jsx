import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import Home from '../../pages/Home';
import HTMLCSS from '../../pages/HTMLCSS';
import JavaScript from '../../pages/JavaScript';

export default function () {
  return (
    <Router>
      <h1 className='title'><Link to='/'>Frontend Skils</Link></h1>
      <ul className='navbar'>
        <li><NavLink to='/htmlcss'>HTML/CSS</NavLink></li>
        <li><NavLink to='/javascript'>JavaScript</NavLink></li>
        <li><NavLink to='/typescript'>TypeScript</NavLink></li>
        <li><NavLink to='/react'>React</NavLink></li>
        <li><NavLink to='/vue'>Vue</NavLink></li>
        <li><NavLink to='/node'>Node</NavLink></li>
        <li><NavLink to='/mongodb'>MongoDB</NavLink></li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/htmlcss' component={HTMLCSS} />
        <Route path='/javascript' component={JavaScript} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}
