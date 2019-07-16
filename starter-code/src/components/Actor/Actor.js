import React, { Component } from 'react'
import "./Actor.css"

export default class Actor extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <tr className="actor">
        <td><img className="actorPic" src={this.props.url} alt={this.props.name}/></td>
        <td><h2>{this.props.name}</h2></td>
        <td><h3>{this.props.sergio}</h3></td>
      </tr>
    )
  }
}