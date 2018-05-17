import React, { Component } from 'react'

class SearchResult extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props)
    let titles = []
    for (let i = 0; i < this.props.results.data.children.length; i++) {
      console.log(this.props.results.data.children[i])
      titles.push(
        <li>
        <a href={this.props.results.data.children[i].data.url}>
        <h2>{this.props.results.data.children[i].data.title}</h2>
        <p>{this.props.results.data.children[i].data.ups}</p>
        </a>
        </li>
        )
      }
    return (
      <ul>
      {titles}
      </ul>
    )
  }
}

export default SearchResult;
