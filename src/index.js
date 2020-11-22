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
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }
    if (!this.state.errorMsg && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    if (!this.state.errorMsg && !this.state.lat) {
      return <div>Loading...</div>;
    }

    return (
      <>
        {/* <div>
          Latitude is:{' '}
          {this.state.errorMsg
            ? this.state.errorMsg + 'Please enable your location'
            : Math.floor(this.state.lat): 'loading'}
          <SeasonDisplay />
        </div> */}
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
