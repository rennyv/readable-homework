import React, { Component } from 'react'
import { Panel, Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateVoteScore } from '../actions'

class Post extends Component {

  render() {
    const { post, comments, upVoteScore, downVoteScore } = this.props
    const myComments = comments.filter((comment) => comment.parentId !== post.id && !comment.deleted)

    const header = (<div>
                      <span>{post.title}</span>{ (myComments.length>0) ? (<span> ({myComments.length })</span> ) :  (<span />) } 
                      <Link to={`/${post.category}/${post.id}`}><span className='pull-right glyphicon glyphicon-info-sign'></span></Link>
                    </div>)
    const footer = (
      <div>
        <span>{ post.author }</span>
        <span className="voteScore pull-right">
            <Button bsSize='xsmall' onClick={() => upVoteScore(post.id)}>
              <span className="glyphicon glyphicon-thumbs-up" />
            </Button>
            <span> { post.voteScore } </span>
            <Button bsSize='xsmall' onClick={() => downVoteScore(post.id)}>
              <span className="glyphicon glyphicon-thumbs-down" />
            </Button>
          </span>
      </div>
    )
    
    return (
      <Panel header={ header } footer={ footer } bsStyle="info">
        { post.body }
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  const { comments } = state
  return {
    comments
  }
}

function mapDispatchToProps(dispatch){
  return {
    upVoteScore : (postId) => dispatch(updateVoteScore(postId, "upVote")),
    downVoteScore : (postId) => dispatch(updateVoteScore(postId, "downVote")),
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Post))