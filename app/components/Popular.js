const React = require('react')

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage(lang) {
    this.setState(() => {selectedLanguage: lang})
  }

  render() {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
      <div>
        <h1>Popular!</h1>
        <ul className='languages'>
          {languages.map(function(lang) {
            console.log(this)
            return (
              <li key={lang}>
                {lang}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

module.exports = Popular
