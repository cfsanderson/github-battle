var React = require('react')
var PropTypes = require('prop-types')
var api = require('../utils/api')

function SelectLanguage (props) {
  var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='languages'>
      {languages.map(function (lang) {
        return (
          <li
            style={lang === props.selectedLanguage ? { color: '#d0021b' }:  null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
  constructor(props) {
    // when creating a constructor you should always call `super`
    super(props)
    this.state = {
    //   // sets the default view of "All"
      selectedLanguage: 'All',
      repos: null
    }

    this.updateLanguage = this.updateLanguage.bind(this);
    // We don't know what "this" is bound to until updateLanguage is invoked.
    // The bind property takes in a context and returns the "this" keyword bound to the function that it's in.
  }

componentDidMount () {
  this.updateLanguage(this.state.selectedLanguage);
}

updateLanguage(lang) {
  this.setState(function () {
    return {
      selectedLanguage: lang,
      repos: null
    }
  })

  api.fetchPopularRepos(lang)
    .then(function (repos) {
      this.setState(function () {
        return {
          repos: repos
        }
      })
    }.bind(this));
}

  render() {
    return (
      <div>
        <h2>Selected Language:<br/><span>{this.state.selectedLanguage}</span></h2>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {JSON.stringify(this.state.repos)}
      </div>
    )
  }
}

module.exports = Popular
// common JS
