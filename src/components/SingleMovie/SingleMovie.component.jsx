import React, {Component} from 'react';
import './SingleMovie.styles.css';

class SingleMovie extends Component{
    constructor(props){
        super(props)
        this.state = {
            movie: {},
        }
    }
    render(){
        const {movie} = this.props.location.state
        return <div>
            <h1>single movie</h1>
            <p>{movie?.title}</p>
        </div>
    }
}
export default SingleMovie