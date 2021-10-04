import Home from './components/Home'
import './style/App.css';
import React, { Component } from 'react'
import Header from './components/header';
import {BrowserRouter,Route} from 'react-router-dom';
import Details from './components/details';
import Animes from './components/Amines';
export default class App extends Component {
  render() {
    return (
      <> 
       <Header/>
       <BrowserRouter>
                   <Route  path="/" exact component={Animes} ></Route>
                   <Route exact  path="/details/:id"  component={Details} ></Route>
        </BrowserRouter>

      </>
    )
  }
}
