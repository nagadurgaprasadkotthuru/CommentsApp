// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {
    commentDetails,
    onToggleLikeButton,
    onDeleteButton,
    initialContainerBackgroundClassNames,
  } = props
  const {id, name, comment, isLiked} = commentDetails
  const isLikedClass = isLiked ? 'liked' : ''
  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const dateTime = formatDistanceToNow(new Date())
  const toggleLikeButton = () => onToggleLikeButton(id)
  const deleteButton = () => onDeleteButton(id)
  const randomNumber = Math.floor(Math.random() * 10)
  const index = randomNumber < 7 ? randomNumber : randomNumber - 3
  const profileBg = initialContainerBackgroundClassNames[index]
  return (
    <>
      <li className="comment-element">
        <div className="profile-container">
          <p className={`profile ${profileBg}`}>{name[0]}</p>
          <p className="name">{name}</p>
          <p className="date-time">{dateTime} ago</p>
        </div>
        <p className="comment">{comment}</p>
        <div className="like-delete-container">
          <button
            className="like-button"
            type="button"
            onClick={toggleLikeButton}
          >
            <img className="like-image" alt="like" src={likeImage} />
            <span className={`like ${isLikedClass}`}>Like</span>
          </button>
          <button
            className="delete-button"
            type="button"
            data-testid="delete"
            onClick={deleteButton}
          >
            <img
              className="delete"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            />
          </button>
        </div>
      </li>
      <hr />
    </>
  )
}

export default CommentItem
