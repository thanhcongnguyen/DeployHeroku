import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Aside = () => (
  <div className="aside-wp">
    <ul>
      <li><Link to="/view1">View1</Link></li>
      <li><Link to="/view2">view2</Link></li>
      <li><Link to="/view3">view3</Link></li>
    </ul>
  </div>
)



export default Aside
