import React from 'react';

import superagent from 'superagent'

import Zone from '../presentation/Zone';

class Zones extends React.Component {
  constructor( ) {
    super( )
    this.state = {
      list: [
      ],
      zone: {
        name: '',
        zipCodes: [],
      }
    }
  }
  componentDidMount(){
    console.log("componentDidMount");
    superagent
    .get('/api/zone')
    .query(null)
    .set('Application', 'application/json')
    .end((err, response) => {
      if(err){
        alert('ERROR: ' + err)
        return
      }
      let results = response.body.results
      this.setState({
        list: results
      })
    })
  }
  updateZone( event ) {
    let updatedZone = Object.assign( {}, this.state.zone )
    const key = event.target.id
    if(key == 'zipCodes'){
      updatedZone[key] = event.target.value.split(',')
    }else{
      updatedZone[key] = event.target.value
    }

    this.setState({ zone : updatedZone })
  }
  submitZone( ) {
    console.log(this.state.zone);
    let updatedList = Object.assign( [], this.state.list )
    console.log(this.state.zone);
    updatedList.push( this.state.zone )

    this.setState({ list: updatedList })
  }
  render( ) {
    const listItems = this.state.list.map(( zone, i ) => {
      i += 1
      return (
        <li key={i} style={{
          listStyleType: 'none'
        }}>
          <Zone zone={zone}/>
        </li>
      )
    })
    return (
      <div>
        <h2>Zones</h2>
        <ol style={{
          paddingLeft: 0
        }}>{listItems}
        </ol>
        <input id="name" onChange={this.updateZone.bind( this )} className="form-control" placeholder="Zone Name"/><br/>
        <input id="zipCodes" onChange={this.updateZone.bind( this )} className="form-control" placeholder="Zip Codes"/><br/>
        <input id="numComments" onChange={this.updateZone.bind( this )} className="form-control" placeholder="Number Comments"/><br/>
        <button onClick={this.submitZone.bind(this)} className="btn btn-danger">Submit Zone</button>

      </div>
    )
  }
}

export default Zones;
