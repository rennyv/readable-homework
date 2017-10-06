import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap'
import PostList from './PostList'
import PostWithComments from './PostWithComments'
import PostCreate from './PostCreate'
import PostEdit from './PostEdit'
import CommentEdit from './CommentEdit'
import { getAllPosts } from '../actions/posts'
import { getAllCategories } from '../actions/categories'


class App extends Component {
  componentDidMount() {
    const { getAllPosts, getAllCategories } = this.props
    getAllCategories()
    getAllPosts()
  }

  render() {
    const { categories } = this.props

    return (
      <div className="app">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Readable</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
          { (categories) && categories.map((category, idx) => (
            <NavItem key={category.name+category.path}>
              <Link to={`/${category.path}`}>
                  {category.name}
                </Link>
            </NavItem>
          ))}

          </Nav>
          <Nav pullRight>
            <NavItem>
              <Link to={`/post/new`}>New</Link>
            </NavItem>
          </Nav>          
        </Navbar>
        <Grid>
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/:category" component={PostList} />
            <Route exact path="/post/new" component={PostCreate} />
            <Route exact path="/post/:postId" component={PostEdit} />
            <Route exact path="/comment/:commentId" component={CommentEdit} />
            <Route exact path={'/:category/:postId'} component={PostWithComments} />            
          </Switch>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { categories } = state
  return { categories }
}

export default withRouter(connect(mapStateToProps, { getAllCategories, getAllPosts })(App))
