import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router'

import Button from '../Button/'

@inject('store') @observer
export default class TopBar extends Component {

  constructor (props) {
    super(props)
    this.store = this.props.store
  }

  authenticate (e) {
    if (e) e.preventDefault()
    console.log('CLICKED BUTTON')
    this.store.authenticate()
  }

  render () {
    const { authenticated } = this.store
    return (
      <div className='topbar'>
        <nav>
          <Link to='/' activeOnlyWhenExact activeClassName='active'>Home</Link>
          {authenticated && <Link to='/posts' activeClassName='active'>Posts</Link>}
        </nav>
        <Button onClick={this.authenticate.bind(this)} title={authenticated ? 'Log out' : 'Sign in'} />
      </div>
    )
  }

}
