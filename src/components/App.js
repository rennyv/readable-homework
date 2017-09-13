import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PostList from './PostList'
import PostCreate from './PostCreate'
import { Grid } from 'react-bootstrap'

class App extends Component {




  render() {
    //const { posts } = this.state

    return (
      <div className='app'>
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
