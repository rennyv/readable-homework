import React, { Component } from 'react'
import { Row, Panel, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
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
        <br />
        <Row>
              { /* **id** - Any unique ID. As with posts, UUID is probably the best here. <br> 
              **timestamp** - [Timestamp] Get this however you want. <br> 
              **body** - [String] <br>
               **author** - [String] <br>
                **parentId** - Should match a post id in the database. */}
          <Panel header="New Comment">
            <form>
              <FormGroup controlId="author">
                <ControlLabel>Comment Author</ControlLabel>
                <FormControl type="text" placeholder="Enter comment author" />
              </FormGroup>
              <FormGroup controlId="commentBody">
                <ControlLabel>Comment Body</ControlLabel>
                <FormControl componentClass="textarea" placeholder="Enter comment body" />
              </FormGroup>
            </form>
          </Panel>
        </Row>
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

export default connect(mapStateToProps)(PostWithComments)