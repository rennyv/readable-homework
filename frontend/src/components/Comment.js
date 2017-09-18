import React, { Component } from 'react'
import { Panel, Button, Badge } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateCommentVoteScore } from '../actions'

class Comment extends Component {
  render() {
    const { comment, upVoteScore, downVoteScore } = this.props
    const header = (
      <div>
        <span>Comment</span>
        <span className='pull-right'>
          <Button bsSize='xsmall'><span className='glyphicon glyphicon-pencil'></span></Button>
          <Button bsSize='xsmall'><span className='glyphicon glyphicon-remove'></span></Button>
        </span>
      </div>)

    const footer = (
      <div>
        <span>{ comment.author }</span>
        <span className="voteScore pull-right">
          <Button bsSize='xsmall' onClick={() => upVoteScore(comment.id)}>
            <span className="glyphicon glyphicon-thumbs-up" />
          </Button>
          <span> { comment.voteScore } </span>
          <Button bsSize='xsmall' onClick={() => downVoteScore(comment.id)}>
            <span className="glyphicon glyphicon-thumbs-down" />
          </Button>
        </span>
      </div>
    )
    return (
      <Panel header={ header } footer={ footer } bsStyle="info">
        { comment.body }
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return { }
}

function mapDispatchToProps(dispatch){
  return { 
    upVoteScore : (commentId) => dispatch(updateCommentVoteScore(commentId, "upVote")),
    downVoteScore : (commentId) => dispatch(updateCommentVoteScore(commentId, "downVote")),
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Comment))