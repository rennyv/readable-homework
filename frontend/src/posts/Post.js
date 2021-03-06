import React, { Component } from 'react'
import { Panel, Button, Badge } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateVoteScore, removePost } from './postsActions'

class Post extends Component {
  deletedPost(postId){
    const { removePost, history } = this.props
    removePost(postId)
    if(this.props.match.params.postId){
      history.goBack()
    }
  }

  render() {
    const { post, comments, upVoteScore, downVoteScore } = this.props
    const myComments = comments.filter((comment) => comment.parentId === post.id && !comment.deleted)

    const postId = this.props.match.params.postId

    const header = (<div>
                      <span>{post.title} </span>{ (myComments.length>0) ? (<Badge>{myComments.length }</Badge> ) :  (<span />) } 
                      <span className='pull-right'>
                        { (!postId)  &&  <Link to={`/${post.category}/${post.id}`}><Button bsSize='xsmall'><span className='glyphicon glyphicon-info-sign'></span></Button></Link>  }
                        <Link to={`/post/${post.id}`}><Button bsSize='xsmall'><span className='glyphicon glyphicon-pencil'></span></Button></Link>
                        <Button bsSize='xsmall' onClick={() => this.deletedPost(post.id) }><span className='glyphicon glyphicon-remove'></span></Button>
                      </span>
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
      <Panel header={ header } footer={ footer } bsStyle="primary">
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
    removePost : (postId) => dispatch(removePost(postId))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Post))