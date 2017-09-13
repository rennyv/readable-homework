import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

class Post extends Component {

  render() {
    const { post } = this.props

    const title = (<div>
                      <span>{post.title}</span>
                      <span className='pull-right glyphicon glyphicon-info-sign'></span>
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
      <Panel header={ title } footer={ footer } bsStyle="info">
        { post.body }
      </Panel>
    )
  }
}

export default Post