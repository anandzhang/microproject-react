import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Content from '../components/Content';

export default function () {
  return (
    <div className='content'>
      <h2 className='subtitle'>Secondary navigation :</h2>
      <Router>
        <ul className='sec-nav'>
          <li><NavLink to='/htmlcss/html'>HTML</NavLink></li>
          <li><NavLink to='/htmlcss/html5'>HTML5</NavLink></li>
          <li><NavLink to='/htmlcss/xml'>XML</NavLink></li>
          <li><NavLink to='/htmlcss/css'>CSS</NavLink></li>
          <li><NavLink to='/htmlcss/css3'>CSS3</NavLink></li>
        </ul>
        <Switch>
          <Route exact path='/htmlcss'>Please select a section.</Route>
          <Route path='/htmlcss/:detail' component={Content}></Route>
        </Switch>
      </Router>
    </div>
  )
}