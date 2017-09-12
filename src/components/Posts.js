import React, { Component } from 'react'

class Post extends Component {

  render() {
    const { post } = this.props
       
    return (
      <div className="post">
        <div className="id">{ post.id }</div>
        <div className="title">{ post.title }</div>
      </div>
    )
  }
}

export default Post