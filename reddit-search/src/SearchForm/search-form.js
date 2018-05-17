import React, { Component } from 'react'
import superagent from 'superagent'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchName: '',
      maxResults: 0,
      topicList: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    superagent.get(`https://www.reddit.com/r/${this.state.searchName}.json?limit=${this.state.maxResults}`)
      .then(res => this.props.setAppState({results: res.body}))
      .catch(console.error)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    let className = 'reddit-search'
    if ((this.state.maxResults < 1) || (this.state.maxResults > 100)) {
      className += ' error'
    }
    return (
      <div className={className}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="searchName"
            value={this.state.searchName}
            onChange={this.handleChange}/>
          <input
            type="number"
            name="maxResults"
            value={this.state.maxResults}
            onChange={this.handleChange}/>

          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchForm
