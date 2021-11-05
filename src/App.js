import React from "react";
import QR from './QR'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'rit.edu',
            color: '#de6c38',
            url_history: [],
        }
    }

    handleChange = (event) => {
        const target = event.target;
        if (target.type === 'url')
            this.setState({'url': target.value});

        if (target.type === 'color')
            this.setState({'color': target.value});
    }

    reset = () => {
        if (this.state.url.length !== 0)
            this.setState({url_history: [...this.state.url_history, this.state.url]}, () => console.log(this.state.url_history));

        this.setState({'url': ''});
        this.setState({'color': '#000'});
    }

    render() {
        return (
            <div>
                <p>
                    <label htmlFor='url'>Enter URL:</label>
                    <input id={'url'} type={'url'} value={this.state.url} onChange={this.handleChange}/>
                </p>

                <p>
                    <label htmlFor='color'>Pick Color:</label>
                    <input id={'color'} type='color' value={this.state.color} onChange={this.handleChange}/></p>
                <p>
                    <button type='button' onClick={this.reset}>Reset</button>
                </p>

                <QR
                    show={this.state.show}
                    color={this.state.color}
                    url={this.state.url}
                />

                <p style={this.state.url_history.length > 0 ? {} : {display: 'none'}}>
                    <span>History</span>
                    <ul>
                        {this.state.url_history.map(item => {
                            return <li>{item}</li>;
                        })}
                    </ul>
                </p>

            </div>
        )
    }
}


export default App;
