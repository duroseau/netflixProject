import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './movies.styles.css';

class Movies extends Component {
    constructor(){
        super() 
        this.state = { 
            movies: [
                
            ],
        }
    }


    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/550?api_key=b33d2c40889610e162182aa0c6178840`)
            .then(data => data.json())
            .then(response => console.log(response))
            // .then(data => this.setState({movies: data.items}))
    }



    render(){
       console.log(this.state.movies)
        return(
            <div>
                <h1>Movies</h1>
                {this.state.movies.map(movie => {
                    
                        <div>
                            <p>{movie.title}</p>
                            <Link to={{pathname:`singleMovie/${movie.id}`, state: movie}}><button>View Movie</button></Link>
                            
                        </div>
                    
                })}
            </div>
        )
    }
}


 export default Movies