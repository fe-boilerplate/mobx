import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('store') @observer
export default class Home extends Component {
  store = this.props.store
  render () {
    const { authenticated, username } = this.store
    return (
      <div className='page home'>
        {authenticated ? `welcome ${username}` : 'Please login first!'}
      </div>
    )
  }
}
