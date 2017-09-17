import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class PostWithComments extends Component {

  render() {
    
    const header = (<div>Hello</div>)
    const footer = (<div>Bye</div>)
    
    return (
      <Panel header={ header } footer={ footer } bsStyle="info">
        World!
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

export default withRouter(connect(mapStateToProps)(PostWithComments))