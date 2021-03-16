import React, {Component} from 'react';
import './SingleMovie.styles.css';


class SingleMovie extends Component {
    
    render(){
        const {title, popular} = this.props.location.state
        return <div>
            <h1>single movie</h1>
            <p>{popular}</p>
            <h3>{title}</h3>
            

        </div>
    }
}
export default SingleMovie