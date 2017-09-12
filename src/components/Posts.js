import React, { Component } from 'react'

class Post extends Component {

  render() {
    const { post } = this.props
       
    return (
      <div className="post">
        <div className="body">{ post.body }</div>
        <div>
          <div className="voteScore pull-right">
            <span className="glyphicon glyphicon-thumbs-up" />
            <span> { post.voteScore} </span>
            <span className="glyphicon glyphicon-thumbs-down" />
          </div>
        </div>
      </div>
    )
  }
}

export default Post