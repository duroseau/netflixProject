import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './movies.styles.css';

class Movies extends Component {
    constructor(){
        super() 
        this.state = { 
            movies: [],
        }
    }


    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/list/13?api_key=b33d2c40889610e162182aa0c6178840`)
            .then(data => data.json())
            .then(response => response)
            .then(data => this.setState({movies: data.items}))
    }



    render(){
       console.log(this.state.movies)
        return(
            <div>
                <h1>Movies</h1>
                {this.state.movies.map(movie => {
                    return (
                    
                        <div className='output'>
                            <p className='title'>{movie.title}</p>
                            <p>{movie.overview}</p>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
                            <Link to={{pathname:`singleMovie/${movie.id}`, state: movie}}><button id='but'>View . Movie</button></Link>
                            
                        </div>
                    )
                })}
            </div>
        )
    }
}


 export default Movies