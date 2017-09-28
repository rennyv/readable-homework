import React, {Component} from 'react'
import { FormGroup, FormControl, ControlLabel, Button, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateNewPost, createNewPost, changePostsOrder } from '../actions'

class PostCreate extends Component{
  validatePost(e){
    e.preventDefault()
    const { newPost, postsOrder, updateErrors, createNewPost, changePostsOrder, history } = this.props
    let errors = []
    if (!newPost.author.trim().length>0){
      errors.push('No author')
    }
    if (!newPost.body.trim().length>0){
      errors.push('No Body')
    }
    if (!newPost.title.trim().length>0){
      errors.push('No title')
    }
    if (!newPost.category.trim().length>0){
      errors.push('No category selected')
    }

    updateErrors(errors.join(','))
    if (!errors.length>0){
      createNewPost(newPost, postsOrder)
      history.goBack()
    }
  }
  
  render(){
    const { history, updateTitle, updateBody, updateAuthor, updateCategory, categories, newPost } = this.props
    return (
      
      <div>
        <Row>
          <a onClick={() => history.goBack()}  className='close'>back</a>
        </Row>
        <Row>
        <form>
          <FormGroup>
            <ControlLabel>Post Title</ControlLabel>
            <FormControl type="text" placeholder="Enter title" onChange={(event) => updateTitle(event.target.value)} value={newPost.title}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Post Category</ControlLabel>
            <FormControl componentClass="select" onChange={(event)=> updateCategory(event.target.value)} value={newPost.category}>
            <option value=''>Select Category</option>
              { categories.map((category) =>
                <option key={category.name} value={category.name}>{category.name}</option>
              )}
            </FormControl>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Post Author</ControlLabel>
            <FormControl type="text" placeholder="Enter author" onChange={(event) => updateAuthor(event.target.value)} value={newPost.author} />
          </FormGroup>
          <FormGroup controlId="body">
            <ControlLabel>Post Body</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Enter body" onChange={(event) => updateBody(event.target.value)} value={newPost.body} />
          </FormGroup>
          <Button onClick={(e)=>this.validatePost(e)}>Add Post</Button>
          <div>{newPost.error}</div>
        </form>
        </Row>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { newPost, categories, postsOrder } = state 
  
  return {
    newPost,
    categories,
    postsOrder
  }
}

function mapDispatchToProps(dispatch){
  return { 
    updateTitle : (value) => dispatch(updateNewPost('title', value)),
    updateAuthor : (value) => dispatch(updateNewPost('author', value)),
    updateBody : (value) => dispatch(updateNewPost('body', value)),
    updateCategory : (value) => dispatch(updateNewPost('category', value)),
    updateErrors : (value) => dispatch(updateNewPost('error', value)),
    createNewPost : (value, order) => dispatch(createNewPost(value, order)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCreate)
