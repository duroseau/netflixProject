import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './movies.styles.css';
import Search from '../Search/search'
class Movies extends Component {
    constructor(){
        super() 
        this.state = { 
            movies: [],
            favorites: [],
            search: '',
        }
    }


    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/list/13?api_key=b33d2c40889610e162182aa0c6178840`)
            .then(data => data.json())
            .then(response => response)
            .then(data => this.setState({
                movies: data.items,
                defaultMovies: data.items
            }))
        fetch(`https://api.themoviedb.org/3/list/13?api_key=b33d2c40889610e162182aa0c6178840`)
            .then(data => data.json())
            .then(response => response)
            .then(data => this.setState({favorites: data.items}))
    
    }
    handleChange = event => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b33d2c40889610e162182aa0c6178840&query=${event.target.value}`)
            .then(data => data.json())
            .then(data => this.setState({movies:data.results||this.state.defaultMovies}))
        // console.log(event.target.value)
        // let filteredMovies = this.state.movies.filter(movie =>
        //     movie.title.toLowerCase('').includes(Search.toLowerCase(''))
        // )

    }



    render(){
    //    console.log(this.state.movies)
    // let filteredMovies = this.state.movies.filter(movie =>
    //     movie.title.toLowerCase('').includes(Search.toLowerCase(''))
    // )
        return(
            
                <div className='hub'>
                <h1>Movies</h1>
                <Search handleChange={this.handleChange}/>        
                {this.state.movies.map(movie => {
                
                    return (
                    
                        <div className='output'>
                            <p className='title'>{movie.title}</p>
                            <p>{movie.overview}</p>
                            <img className='banner_img'src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
                            <Link to={{pathname:`singleMovie/${movie.id}`, state: movie}}><button id='but'>View Movie</button></Link>
                            
                        </div>
                    )
                })}
            </div>
        )
    }
}


 export default Movies