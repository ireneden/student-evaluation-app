import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import ClassesPage from './containers/ClassesPage'
import SingleClassPage from './containers/SingleClassPage'
import SingleStudentPage from './containers/SingleStudentPage'
import TopBar from './components/layout/TopBar'
import './App.css'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar className="top-bar"/>
          </nav>
          <main style={{marginTop:100}} className="mainContainer">
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/classes" component={ClassesPage} />
            <Route exact path="/classes/:id" component={SingleClassPage} />
            <Route exact path="/students/:id" component={SingleStudentPage} />
            <Route exact path="/" render={ () => <Redirect to="/classes" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
export default App
