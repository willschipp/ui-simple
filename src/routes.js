import React, { PureComponent } from 'react'
import { Match, Miss, Redirect } from 'react-router-dom';

export default class Routes extends PureComponent {
  constructor() {
    super()

    this.views = {}
  }

  loadView(fileName) {
    if (this.views[fileName]) {
      return this.views[fileName]
    }

    new Promise(resolve => require.ensure([], require => {
      resolve(require(`./components/${fileName}`))
    }))
    .then(View => this.views[fileName] = <View />)
    .then(() => this.forceUpdate())
    .catch(err => {
      console.error(err)
      throw new Error(err)
    })

    return <div />
  }

  render() { return (
    <div>
      <Match pattern="/" exactly component={this.loadView.bind(this, 'home')} />
    </div>
  )}
}
