import React, {Component} from 'react'
import Post from './Post'
import { Row, Button, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { changePostsOrder } from '../actions/postOrder'
import sortBy from 'sort-by'

class PostList extends Component{
  render(){
    const { posts, postsOrder, changePostsOrder } = this.props

    const filter = this.props.match.params.category
    let curPosts = []
    if(filter){
      curPosts= posts && posts.filter((post)=> {
        return post.category === filter
      })
    } else {
      curPosts = posts
    }

    return (
      <div>
        <Row>
          <ButtonGroup>
            <Button bsStyle={postsOrder === "author" ? "primary" : "default"} onClick={() => changePostsOrder("author")}>Author<span className="glyphicon glyphicon-sort-by-alphabet"></span></Button>
            <Button bsStyle={postsOrder === "-author" ? "primary" : "default"} onClick={() => changePostsOrder("-author")}>Author<span className="glyphicon glyphicon-sort-by-alphabet-alt"></span></Button>
            <Button bsStyle={postsOrder === "-voteScore" ? "primary" : "default"} onClick={() => changePostsOrder("-voteScore")}>Votes<span className="glyphicon glyphicon-sort-by-order-alt"></span></Button>
            <Button bsStyle={postsOrder === "voteScore" ? "primary" : "default"} onClick={() => changePostsOrder("voteScore")}>Votes<span className="glyphicon glyphicon-sort-by-order"></span></Button>
            <Button bsStyle={postsOrder === "-timestamp" ? "primary" : "default"} onClick={() => changePostsOrder("-timestamp")}>Timestamp<span className="glyphicon glyphicon-sort-by-order-alt"></span></Button>
            <Button bsStyle={postsOrder === "timestamp" ? "primary" : "default"} onClick={() => changePostsOrder("timestamp")}>Timestamp<span className="glyphicon glyphicon-sort-by-order"></span></Button>
          </ButtonGroup>
        </Row>

        <br />

        <Row>
          {
            curPosts.map((post) => (
              <Post key={post.id} post={post} />
          ))}
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { posts, categories, postsOrder } = state
  
  let filterPosts = posts.filter((post) => {return !post.deleted})
  let orderedPosts = filterPosts.sort(sortBy(postsOrder))

  return {
    posts: orderedPosts,
    postsOrder,
    categories
  }
}
  
export default connect(mapStateToProps, { changePostsOrder })(PostList)
