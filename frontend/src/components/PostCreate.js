import React, {Component} from 'react'
import { FormGroup, FormControl, ControlLabel, Button, Row} from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateNewPost } from '../actions'

class PostCreate extends Component{
  componentDidMount() {
    console.log('here')
  }

  render(){
    const { history, updateTitle, updateBody, updateAuthor } = this.props
    return (
      
      <div>
        <Row>
          <a onClick={() => history.goBack()}  className='close'>back</a>
        </Row>
        <Row>
        <form>
          {/*  **id** - UUID should be fine, but any unique id will work <br> *
          *timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like. <br> 
          **title** - [String] <br> 
          **body** - [String] <br> 
          **author** - [String] <br>
          **category** -  Any of the categories listed in `categories.js`. Feel free to extend this list as you desire. | */}
          <FormGroup>
            <ControlLabel>Post Title</ControlLabel>
            <FormControl type="text" placeholder="Enter title" onChange={(event) => updateTitle(event.target.value)} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Post Category</ControlLabel>
            <FormControl type="text" placeholder="Enter category" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Post Author</ControlLabel>
            <FormControl type="text" placeholder="Enter author" onChange={(event) => updateAuthor(event.target.value)} />
          </FormGroup>
          <FormGroup controlId="body">
            <ControlLabel>Post Body</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Enter body" onChange={(event) => updateBody(event.target.value)} />
          </FormGroup>
          <Button>Add Post</Button>
        </form>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { newPost } = state 
  
  return {
    newPost
  }
}

function mapDispatchToProps(dispatch){
  return { 
    updateTitle : (value) => dispatch(updateNewPost('title', value)),
    updateAuthor : (value) => dispatch(updateNewPost('author', value)),
    updateBody : (value) => dispatch(updateNewPost('body', value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCreate)
