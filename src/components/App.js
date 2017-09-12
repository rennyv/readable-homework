import React, { Component } from 'react'
import * as api from '../utils/api.js'
import Post from './Posts'
import { Grid, Row, Col, Panel } from 'react-bootstrap'

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount = () => {
    api.getAll().then((posts) => {
      console.log(posts)
      this.setState({posts})
    })
  }

  render() {
    const { posts } = this.state

    return (
      <Grid>
        <Row>
          
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <h4>
              Posts:
            </h4>
            {posts.map((post) => (
              <Panel key={post.id} header={ post.title }>
                <Post post={post} />
              </Panel>
            ))}
          </Col>
          <Col xs={6} md={4}>
            <h4>Sort by:</h4>
            <h4>Catagories:</h4>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App;
