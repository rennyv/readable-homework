import React, { Component } from 'react'
import { Row, Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import Post from './Post' 
import Comment from './Comment'
import { addComment } from '../actions'

class PostWithComments extends Component {
  state = {
    commentAuthor: '',
    commentBody: ''
  }

  onAuthorChange(val){
    this.setState({
      commentBody: val
    })
  }

  onBodyChange(val){
    this.setState({
      commentAuthor: val
    })
  }

  validateComment(){
    const parentId = this.props.match.params.postId
    const { commentAuthor, commentBody } = this.state
    const { addComment } = this.props
    addComment({parentId, author: commentAuthor, body: commentBody})
  }

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

    const postComments = comments.filter((comment) => comment.parentId === postId )

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
          <Panel header="New Comment">
            <form>
              <FormGroup controlId="author">
                <ControlLabel>Comment Author</ControlLabel>
                <FormControl type="text" onChange={(e) => this.onAuthorChange(e.target.value)} placeholder="Enter comment author" />
              </FormGroup>
              <FormGroup controlId="commentBody">
                <ControlLabel>Comment Body</ControlLabel>
                <FormControl componentClass="textarea" onChange={(e) => this.onBodyChange(e.target.value)} placeholder="Enter comment body" />
              </FormGroup>
              <Button onClick={() => this.validateComment()}>Add Comment</Button>
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

function mapDispatchToProps(dispatch){
  return {
    addComment : (newComment) => dispatch(addComment(newComment)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostWithComments)