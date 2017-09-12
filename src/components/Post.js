import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

class Post extends Component {

  render() {
    const { post } = this.props

    const title = (<div>
                      <span>{post.title}</span>
                      <span className='pull-right glyphicon glyphicon-info-sign'></span>
                    </div>)
    
    return (
      <Panel header={title}>
        <div className="body">{ post.body }</div>
        <div>
          <div className="voteScore pull-right">
            <span className="glyphicon glyphicon-thumbs-up" />
            <span> { post.voteScore} </span>
            <span className="glyphicon glyphicon-thumbs-down" />
          </div>
        </div>
      </Panel>
    )
  }
}

export default Post