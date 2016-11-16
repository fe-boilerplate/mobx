import React, { Component } from 'react'
import { BrowserRouter, Match } from 'react-router'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import Topbar from './components/Topbar/'
import Footer from './components/Footer/'
import 'fe-reset'

@observer
export default class App extends Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
  }
  componentDidMount () {
    this.authenticate()
  }
  authenticate (e) {
    if (e) e.preventDefault()
    this.props.store.authenticate()
  }
  render () {
    // const { authenticated, authenticating, timeToRefresh, refreshToken } = this.store
    const { timeToRefresh } = this.store
    const { routes } = this.props
    return (
      <BrowserRouter>
        <Provider store={this.store}>
          <div className='wrapper'>
            <DevTools />
            <Topbar />
            {routes.map((route, i) => (
              <Match exactly key={i} {...route} render={props => (
                <route.component title={route.title} {...props} routes={route.routes} />
              )} />
            ))}
            {!!(timeToRefresh && timeToRefresh <= 4) && this.store.refreshToken()}
            <Footer />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}
