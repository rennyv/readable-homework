import React, { Component } from 'react'
import { Panel, Row, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateComment } from '../actions/comments'


class CommentEdit extends Component {
  state = {
    newBody: null
  }

  onBodyChange(val){
    this.setState({
      newBody: val
    })
  }

  validateComment(e) {
    e.preventDefault()
    const { newBody } = this.state
    const { history, updateComment, comments } = this.props
    if(!newBody){
      history.goBack()
      return
    }
   
    const commentId = this.props.match.params.commentId

    let commentList = comments.filter((c)=> { return c.id === commentId})
    if(commentList[0]) {
      let comment =  commentList[0]
      let body = newBody ? newBody : comment.body
      updateComment(commentId, body)
      history.goBack()
    }
  }

  render() {
    const { comments, history } = this.props
    
    const commentId = this.props.match.params.commentId

    const header = (<div>
                      Edit Comment
                    </div>)

  let commentList = comments.filter((c)=> { return c.id === commentId})
    if(!commentList[0]) {
      return (
        <div>
          <Row>
            Invalid comment Id
          </Row>
          <Row>
           <a onClick={() => history.goBack()}  className='close'>back</a>
          </Row>   
        </div>
      )}

    let comment = commentList[0]
        
    return (
      <div>
        <Row>
            <a onClick={() => history.goBack()}  className='close'>back</a>
        </Row>   
        <Row>
          <Panel header={ header } bsStyle="info">
            <form>
              <FormGroup controlId="body">
                <ControlLabel>Body</ControlLabel>
                <FormControl componentClass="textarea" onChange={(e)=>this.onBodyChange(e.target.value)} defaultValue={comment.body} />
              </FormGroup>
              <Button onClick={(e)=>this.validateComment(e)}>Sumbit</Button>
            </form>
          </Panel>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { comments } = state
  return {
    comments
  }
}

export default connect(mapStateToProps,{ updateComment })(CommentEdit)
