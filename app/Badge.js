const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

class Badge extends React.Component {
  render() {
    return (
      <div>
        <h2>Caleb Sanderson info here</h2>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }
}

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

ReactDOM.render(
  <Badge
    name='Caleb Sanderson'
    username='@cfsanderson'
    img={'http://i.imgur.com/yvLVP5v.jpg'}
  />,
  document.getElementById('root')
)

//
//
// import React, { Component } from 'react'
//
// class Potato1 extends Component {
//
//   render() {
//     return (
//       <div>Potato2</div>
//     )
//   }
// }
//
// export default Potato1
