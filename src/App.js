import React, { Component } from "react";
import Movie from './Movie.js'
import Header from './header';
import './css/App.css'
import { Default } from 'react-awesome-spinners'


class App extends Component{
  state = {
    sortBy: "download_count"
  };


  componentDidMount(){
    this.getMovies(this.state.sortBy) ;
  }

  getMovies = async(sortBy) => {
    const getMoviesData = await this.callAPI(sortBy);
    this.setState({
      st_movies : getMoviesData
    });
  };

  callAPI = (sortBy) => {
    return fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=${sortBy}`)
    .then(Response => Response.json())
    .then(jsonData => { console.log(jsonData); return jsonData.data.movies;})
    .catch(err => console.log(err));
  };

  renderMovies = () => {
    const movieForProp = this.state.st_movies.map((movie, index) => {
      return <Movie 
                key={index}
                index={index} 
                title={movie.title_english}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                synopsis={movie.synopsis}
                year={movie.year}
                rating={movie.rating}
                date_uploaded={movie.date_uploaded}/>
    });
    return movieForProp;
  };

  parentCallback = (dataFromChild) => {
    this.setState({
      sortBy: dataFromChild,
      st_movies: null
    });


    this.getMovies(dataFromChild) ;
  };



  render(){
    return (
      <div>
        <Header callbackFromParent={this.parentCallback}/>
        <div className={this.state.st_movies ? "App" : "App--Loading"}>
            {this.state.st_movies ? this.renderMovies() : <span className="movieLoadingSpan"><Default /></span>}
        </div>
      </div>
    );
  };
}



export default App;
