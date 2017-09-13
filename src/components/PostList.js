import React, {Component} from 'react'
import Post from './Post'
import * as api from '../utils/api.js'
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap'

class PostList extends Component{
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

  render(){
    const { posts, categories } = this.state

    return (
      <div>
        <br />
        <Row>
          <ButtonGroup>
            <Button bsStyle="primary">All</Button>
            {
              categories.map((category) => (
                <Button key={category.name}>{category.name}</Button>
            ))}
          </ButtonGroup>
        </Row>
        <br />
        <Row>
          {
            posts.map((post) => (
              <Post key={post.id} post={post} />
          ))}
        </Row>
      </div>
    )
  }
}

export default PostList
