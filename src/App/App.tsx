import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import './App.scss'
import { Header } from './Header/Header'
import { Body } from './Body/Body'
import { MobileMenu } from './MobileMenu/MobileMenu'
import { routes } from '../routes'
import history from './../history'


interface State {
  menuOpened: boolean
  url: string
}

class App extends Component<any, State> {

  constructor(props: any) {
    super(props)
    this.state = {
      menuOpened: false,
      url: this.props.location.pathname
    }
  }

  componentDidMount() {
    history.listen((location: any, action: any) => this.setState(state => ({ url: location.pathname })))
  }

  openBurgerMenu() {
    this.setState(state => ({
      menuOpened: !state.menuOpened
    }))
  }

  render() {
    return (
      <div className="app">
        <Header
          openMenu={() => this.openBurgerMenu()}
          opened={this.state.menuOpened}
          routes={routes}
          home={this.state.url === '/'} />
        <Body {...this.props} />
        <MobileMenu
          opened={this.state.menuOpened}
          entries={routes}
          openMenu={() => this.openBurgerMenu()}></MobileMenu>
      </div>
    )
  }
}

export const MyApp = withRouter(props => <App {...props} />)