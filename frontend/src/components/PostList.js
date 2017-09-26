import React, {Component} from 'react'
import Post from './Post'
import { Row, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changePostsOrder } from '../actions'

class PostList extends Component{
  render(){
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
      return (<div>
        <br />
        <Row>
        <Link to='/'>
          <Button bsStyle={!filter ? "primary" : "default"}>All</Button>
        </Link>
        {
          categories.map((category) => (
            <Link key={category.name} to={category.path}>
              <Button bsStyle={filter === category.path ? "primary" : "default"}>{category.name}</Button>
            </Link>
        ))}
      </Row>
      <Row>
          <Link to={`/post/new`}>New</Link>
        </Row>
      </div>)
    }

    return (
      <div>
        <br />
        <Row>
          <Link to='/'>
            <Button bsStyle={!filter ? "primary" : "default"}>All</Button>
          </Link>
          {
            categories.map((category) => (
              <Link key={category.name} to={category.path}>
                <Button bsStyle={filter === category.path ? "primary" : "default"}>{category.name}</Button>
              </Link>
          ))}
        </Row>
        <Row>
          <div className='pull-right'>
            <Link to={`/post/new`}>New</Link>
          </div>
        </Row>
        <br />
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

  
export default connect(mapStateToProps, mapDispatchToProps)(PostList)
