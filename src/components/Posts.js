import React, { Component } from 'react'

class Post extends Component {

  render() {
    const { post } = this.props
       
    return (
      <div className="post">
        <div className="body">{ post.body }</div>
      </div>
    )
  }
}

export default Post