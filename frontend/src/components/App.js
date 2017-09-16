import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'react-bootstrap'
import PostList from './PostList'
import PostCreate from './PostCreate'


class App extends Component {
  render() {
    return (
      <div className="app">
        <Grid>
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/create" component={PostCreate} />
          </Switch>
        </Grid>
      </div>
    )
  }
}

export default App;
