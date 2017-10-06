import React, { Component } from 'react'
import { Panel, Row, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updatePost } from '../actions/posts'


class PostEdit extends Component {
  state = {
    newBody: null,
    newTitle: null
  }

  onBodyChange(val){
    this.setState({
      newBody: val
    })
  }

  onTitleChange(val){
    this.setState({
      newTitle: val
    })
  }

  validatePost(e) {
    e.preventDefault()
    const { newBody, newTitle } = this.state
    const { history, updatePost, posts } = this.props
    if(!newBody && !newTitle){
      history.goBack()
      return
    }
   
    const postId = this.props.match.params.postId

    let postList = posts.filter((p)=> { return p.id === postId})
    if(postList[0]) {
      let post =  postList[0]
      let title = newTitle ? newTitle : post.title
      let body = newBody ? newBody : post.body
      updatePost(postId, title, body)
      history.goBack()
    }
  }

  render() {
    const { posts, history } = this.props
    
    const postId = this.props.match.params.postId

    const header = (<div>
                      Edit Post
                    </div>)

let postList = posts.filter((p)=> { return p.id === postId})
    if(!postList[0]){
      return (
        <div>
          <Row>
            Invalid post Id
          </Row>
          <Row>
            <a onClick={() => history.goBack()}  className='close'>back</a>
          </Row>   
        </div>
    )}

    let post = postList[0]
        
    return (
      <div>
        <Row>
            <a onClick={() => history.goBack()}  className='close'>back</a>
        </Row>   
        <Row>
          <Panel header={ header } bsStyle="info">
            <form>
              <FormGroup controlId="title">
                <ControlLabel>Title</ControlLabel>
                <FormControl type="text" onChange={(e)=>this.onTitleChange(e.target.value)} defaultValue={post.title} /> 
              </FormGroup>             
              <FormGroup controlId="body">
                <ControlLabel>Body</ControlLabel>
                <FormControl componentClass="textarea" onChange={(e)=>this.onBodyChange(e.target.value)} defaultValue={post.body} />
              </FormGroup>
              <Button onClick={(e)=>this.validatePost(e)}>Submit</Button>
            </form>
          </Panel>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { posts } = state
  return {
    posts
  }
}

export default connect(mapStateToProps,{ updatePost })(PostEdit)
