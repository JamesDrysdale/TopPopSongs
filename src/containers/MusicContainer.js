import React from 'react';
import PokemonDetail from '../components/MusicDetail';
import MusicDetail from '../components/MusicDetail';

class MusicContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            songs: []
        };
    
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({songs: data.results}))
    }





    


    render(){


        return (
            <div>
                <h2>Container div</h2>
                
                <MusicDetail />
            </div>
        )
    }

}

export default MusicContainer;