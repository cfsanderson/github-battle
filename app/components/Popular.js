const React = require('react')

class Popular extends React.Component {
  constructor (props) {
    // when creating a constructor you should always call `super`
    super(props)
    this.state = {
      // sets the default view of "All"
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this);
    // We don't know what "this" is bound to until updateLanguage is invoked.
    // The bind property takes in a context and returns the "this" keyword bound to the function that it's in.
  }

  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      }
    })
  }

  render() {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
      <div>
        <h2>Selected Language: <span>{this.state.selectedLanguage}</span></h2>
        <ul className='languages'>
          {languages.map(function(lang) {
            // new function so "this" is in a new context
            return (
              <li
                style={lang === this.state.selectedLanguage ? { color: '#d0021b' }:  null}
                onClick={this.updateLanguage.bind(null, lang)}
                key={lang}>
                {lang}
              </li>
            )
          }, this)}
          {/* by passing "this" as the second argument to .map it gives it the original context outside the func */}
        </ul>
      </div>
    )
  }
}

module.exports = Popular
// common JS
