import React from 'react';

import styles from './styles'

class Zone extends React.Component {
  render( ) {
    const zoneStyle = styles.zone
    const zipCodes = this.props.zone.zipCodes
    const zipCodesList = zipCodes.map( function( zipCode, i ) {

      if ( i + 1 == zipCodes.length ) {
        return <span className="detail" key={i}>{zipCode}</span>
      } else {
        return <span className="detail" key={i}>{zipCode},</span>
      }
    })
    return (
      <div style={zoneStyle.container}>
        <h2 style={zoneStyle.header}>
          <a style={zoneStyle.title} href="#">{this.props.zone.name}</a>
        </h2>
        {zipCodesList}<br/>
      </div>
    )
  }
}


export default Zone
