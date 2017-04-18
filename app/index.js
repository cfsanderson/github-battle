const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

// import Badge from '/Badge.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <a href='https://reacttraining.com/' target='blank'>
            Hello React Training!
          </a>
        </h1>
        {/* <Badge /> */}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
