import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Grid } from 'react-bootstrap'
import PostList from './PostList'
import PostWithComments from './PostWithComments'
import PostCreate from './PostCreate'
import { getAllPosts, getAllCategories } from '../actions'


class App extends Component {
  componentDidMount() {
    const { getAllPosts, getAllCategories } = this.props
    getAllCategories()
    getAllPosts()
  }

  render() {
    return (
      <div className="app">
        <Grid>
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/post/new" component={PostCreate} />
            <Route exact path="/:category" component={PostList} />
            <Route exact path={'/:category/:postId'} component={PostWithComments} />            
          </Switch>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { }
}

function mapDispatchToProps(dispatch){
  return {
      getAllCategories : () => dispatch(getAllCategories()),
      getAllPosts : () => dispatch(getAllPosts()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
