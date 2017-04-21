const React = require('react')
const Popular = require('./Popular')

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

module.exports = App;
// common JS way of exporting
