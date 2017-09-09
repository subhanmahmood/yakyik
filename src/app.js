import React from 'react';
import ReactDOM from 'react-dom';

import Zones from './components/containers/Zones';
import Comments from './components/containers/Comments';
import Home from './components/layout/Home';

class App extends React.Component {
  render( ) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Home/>
          </div>
          <div className="col-md-8">
            <Comments/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.getElementById( 'root' ))
