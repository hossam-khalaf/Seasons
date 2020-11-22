import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    //intialiaze the state = only direct assignment
    this.state = { lat: null, errorMsg: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // call setState
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMsg: err.message })
    );
  }

  render() {
    return (
      <>
        <div>
          Latitude is:{' '}
          {this.state.errorMsg
            ? this.state.errorMsg + 'Please enable your location'
            : Math.floor(this.state.lat)}
          <SeasonDisplay />
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
