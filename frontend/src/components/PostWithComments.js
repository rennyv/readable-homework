import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Post from './Post' 
import Comment from './Comment'

class PostWithComments extends Component {

  render() {
    const { comments, posts, history } = this.props
    const postId = this.props.match.params.postId
    const postList = posts.filter((post) => {
      return post.id === postId
    })

    const post = postList[0]

    if (!post) {
      
      return (
        <div>
          <Row>
            Post not found
          </Row>
          <br />
          <Row>
            <a onClick={() => history.goBack()}  className='close'>back</a>
          </Row>
        </div>)
    }

    const postComments = comments.filter((comment) => comment.parentId !== postId )

    return (
      <div>
        <Row>
          <a onClick={() => history.goBack()}  className='close'>back</a>
        </Row>
        <br />
        <Row>
          <Post key={post.id} post={post} />
        </Row>
        <br />
        {
          postComments.map((comment) => (
          <Row key={comment.id}>
            <Comment comment={comment} />
          </Row>
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { posts, comments } = state 
  
  return {
    comments,
    posts
  }
}

export default withRouter(connect(mapStateToProps)(PostWithComments))