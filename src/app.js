import ReactDOM from 'react-dom'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './header.js'
import Home from './home.js'
import Contact from './contact.js'
import About from './about.js'
import Main from './main.js'
import Maincontent from './main-content.js'
import Aside from './aside.js'
import View from './views.js'
import Error404 from './404.js'
import Footer from './footer.js'

const BasicExample = ({match}) => (
  <Router>
    <div id="wrapper">
      <Header/>
        <div className="nav-wp clearfix">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <Main>
          <Maincontent>
            <Route  exact  path="/" component={Home}/>
            <Route  path="/about" component={About}/>
            <Route  path="/contact" component={Contact}/>
            <Route path="/:viewId" component={View}/>
          </Maincontent>
          <Aside/>
        </Main>
        <Footer/>
    </div>
  </Router>
)






export default BasicExample
