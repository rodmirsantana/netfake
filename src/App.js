import React, { Component } from 'react';
import logo from './logo.png';
import axios from 'axios';
import './App.css';
import MovieSlider from './components/MovieSlider';

const token = 'e5693481ef000bfdd855a0f21ad39631';
const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/'
});

//src="http://image.tmdb.org/t/p/w500///1TUg5p01VZ4B0Q1amk30lXvlpXV.jpg"

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    API.get(`popular?api_key=${ token }`)
      .then(resp => {
        console.log(resp)
        this.setState({
          movies: resp.data.results
        })
      })
      .catch(erro => {
        console.log(erro)
      })
  }
    

  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={ logo } className="logo" alt="logo" />
        </header>
        <div>
          <MovieSlider movies={this.state.movies} title="Filmes" />
        </div>
      </div>
    );
  }
}

export default App;
