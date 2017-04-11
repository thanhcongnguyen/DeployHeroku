import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const About = ({match}) => (
  <div className="about clearfix">
    <h3>About me</h3>
    <ul className="nav-about">
      <li><Link to={`${match.url}/myname`}>My Name</Link></li>
      <li><Link to={`${match.url}/address`}>Address</Link></li>
      <li><Link to={`${match.url}/telephone`}>Phone</Link></li>
    </ul>
    <div className="content-about">
        <Route  exact path={`${match.url}/myname`} component={Myname}/>
        <Route  path={`${match.url}/address`} component={Address}/>
        <Route  path={`${match.url}/telephone`}component={Telephone}/>
    </div>
  </div>
)


const Myname = () => (
  <div>
    <p>Nguyen thanh cong</p>
  </div>
)

const Address = () => (
  <div>
    <p>TP.HCM</p>
  </div>
)

const Telephone = () => (
  <div>
    <p>01634963339</p>
  </div>
)

export default About
