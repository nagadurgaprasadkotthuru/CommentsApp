import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

const initialCommentsList = []

class Comments extends Component {
  state = {name: '', comment: '', commentsList: initialCommentsList}

  onDeleteButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  onToggleLikeButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onAddCommentButtonClicked = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: true,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onNameChange = event => this.setState({name: event.target.value})

  onTextChange = event => this.setState({comment: event.target.value})

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Comments</h1>
          <div className="container1">
            <img
              className="image"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
            <form className="form" onSubmit={this.onAddCommentButtonClicked}>
              <p className="para1">Say something about 4.0 Technologies</p>
              <input
                className="input-name-element"
                type="text"
                placeholder="Your Name"
                onChange={this.onNameChange}
                value={name}
              />
              <textarea
                className="input-comment-element"
                cols="10"
                rows="10"
                placeholder="Your Comment"
                onChange={this.onTextChange}
                value={comment}
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <hr className="" />
          <div className="container2">
            <div className="container3">
              <p className="no-of-comments">{commentsList.length}</p>
              <p className="comments">Comments</p>
            </div>
            <ul className="comments-container">
              {commentsList.map(eachComment => (
                <CommentItem
                  commentDetails={eachComment}
                  key={eachComment.id}
                  initialContainerBackgroundClassNames={
                    initialContainerBackgroundClassNames
                  }
                  onToggleLikeButton={this.onToggleLikeButton}
                  onDeleteButton={this.onDeleteButton}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
