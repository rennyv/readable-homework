import React, {Component} from 'react'
import Post from './Post'
import { Row, Button, ButtonGroup } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class PostList extends Component{
  render(){
    //const { posts, categories } = this.state
    const { posts, categories } = this.props

    if (!(posts.length > 0 )) {
      return (<p>No Posts</p>)
    }

  return (
      <div>
        <br />
        <Row>
          <ButtonGroup>
            <Button bsStyle="primary">All</Button>
            {
              categories.map((category) => (
                <Button key={category.name}>{category.name}</Button>
            ))}
          </ButtonGroup>
        </Row>
        <br />
        <Row>
          {
            posts.map((post) => (
              <Post key={post.id} post={post} />
          ))}
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { posts, categories } = state
  return {
    posts,
    categories
  }
}

export default withRouter(connect(mapStateToProps)(PostList))
