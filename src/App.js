import React, { useState, useEffect } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import MyTeam from './pages/MyTeam'
import './App.css';


function App() {
  const [team, setTeam] = useState([])

  const [pokelist, setPokelist] = useState([])

  const getPokelist = async () => {
    // declare our API key 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=150`) // limit=150 allows us to view 150 names
    const data = await response.json()
    setPokelist(data.results)
  }
  const addToTeam = (pokemon) => {
    setTeam([...team, pokemon])
  }


  useEffect(() => {getPokelist()}, [])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" >
          <Home 
            pokelist={pokelist}
            addToTeam={addToTeam}/>
        </Route>
        <Route path="/MyTeam" ><MyTeam /></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
