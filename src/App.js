import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {

    state = { advice: '', isLoading: true };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        this.setState({ isLoading: true });

        axios.get('https://api.adviceslip.com/advice')
        .then( (response) => {
            const { advice } = response.data.slip;
            this.setState({ advice: advice, isLoading: false });
        })
        .catch( (error) => {
            console.log(error);
            this.setState({ isLoading: false });
        });
    }

    render() {
        const { advice, isLoading } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{isLoading ? 'Loading...' : advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;