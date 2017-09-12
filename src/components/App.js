import React, { Component } from 'react'
import * as api from '../utils/api.js'
import Post from './Posts'

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
      <div className="App">
         {posts.map((post) => (
           <Post post={post} />
         ))}
      </div>
    );
  }
}

export default App;
