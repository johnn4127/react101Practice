import React, { useState } from 'react'
import './App.css'

import PracticeForm from './components/PracticeForm'
import Carousel1 from './components/Carousel1'
import AboutUs from './components/AboutUs'
import PageTemplate from './components/PageTemplate';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {



  return (
    <>
    <Router>
        <PageTemplate>
        <Switch>
          <Route path="/"  exact>
            <PracticeForm/>
          </Route>
          <Route path="/Carousel1" exact>
            <Carousel1 />
          </Route>
          <Route path="/AboutUs" exact>
            <AboutUs/>
          </Route>
        
        </Switch>
        </PageTemplate>
  </Router>
    </>
  )
}

export default App
