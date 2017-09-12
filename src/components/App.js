import React, { Component } from 'react'
import * as api from '../utils/api.js'
import Post from './Post'
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  state = {
    posts: [],
    categories: []
  }

  componentDidMount = () => {
    api.getAll().then((posts) => {
      console.log(posts)
      this.setState({posts})
    })

    api.getCategories().then((categories => {
      console.log(categories)
      this.setState({categories})
    }))
  }

  render() {
    const { posts, categories } = this.state

    return (
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            <h4>
              Posts:
            </h4>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
              
            ))}
          </Col>
          <Col xs={6} md={4}>
            <h4>Sort by:</h4>
              <ul>
                <li>Timestamp</li>
                <li>Score</li>
              </ul>
            <h4>Categories:</h4>
              <ul>
                {categories.map((category) => (
                  <li key={category.name}>{category.name}</li>
                ))}
              </ul>

          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App;
