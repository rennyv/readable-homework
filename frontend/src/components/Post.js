import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Post extends Component {

  render() {
    const { post, comments } = this.props
    const myComments = comments.filter((comment) => comment.parentId !== post.id && !comment.deleted)

    const header = (<div>
                      <span>{post.title}</span>{ (myComments.length>0) ? (<span> ({myComments.length })</span> ) :  (<span />) } 
                      <Link to={`/${post.category}/${post.id}`}><span className='pull-right glyphicon glyphicon-info-sign'></span></Link>
                    </div>)
    const footer = (
      <div>
        <span>{ post.author }</span>
        <span className="voteScore pull-right">
            <span className="glyphicon glyphicon-thumbs-up" />            
            <span> { post.voteScore} </span>
            <span className="glyphicon glyphicon-thumbs-down" />
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

export default withRouter(connect(mapStateToProps)(Post))