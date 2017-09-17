import React, {Component} from 'react'
import Post from './Post'
import { Row, Button, ButtonGroup } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { changePostsOrder } from '../actions'

class PostList extends Component{
  render(){
    //const { posts, categories } = this.state
    const { posts, categories, postsOrder, changePostsOrder } = this.props

    const filter = this.props.match.params.category
    let curPosts = []
    if(filter){
      curPosts= posts && posts.filter((post)=> {
        return post.category === filter
      })
    } else {
      curPosts = posts
    }

    if (!(curPosts.length > 0 )) {
      return (<p>No Posts</p>)
    }

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
          <ButtonGroup>
            <Button bsStyle={postsOrder === "author" ? "primary" : "default"} onClick={() => changePostsOrder("author")}>Author<span className="glyphicon glyphicon-sort-by-alphabet"></span></Button>
            <Button bsStyle={postsOrder === "-author" ? "primary" : "default"} onClick={() => changePostsOrder("-author")}>Author<span className="glyphicon glyphicon-sort-by-alphabet-alt"></span></Button>
            <Button bsStyle={postsOrder === "-voteScore" ? "primary" : "default"} onClick={() => changePostsOrder("-voteScore")}>Votes<span className="glyphicon glyphicon-sort-by-order-alt"></span></Button>
            <Button bsStyle={postsOrder === "voteScore" ? "primary" : "default"} onClick={() => changePostsOrder("voteScore")}>Votes<span className="glyphicon glyphicon-sort-by-order"></span></Button>
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
  
  return {
    posts,
    postsOrder,
    categories
  }
}

function mapDispatchToProps(dispatch){
  return {
    changePostsOrder : (order) => dispatch(changePostsOrder(order)),
  }
}

  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList))
