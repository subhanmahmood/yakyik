import React from 'react';

import styles from './styles';

class Comment extends React.Component {

  render() {

    const comment = this.props.currentComment


    const commentStyles = styles.comment
    return (
      <div style={{marginBottom: 16}}>
        <p style={commentStyles.commentBody}>{comment.body}</p>
        <p>By {comment.username} at <b></b></p>
        <hr/>
      </div>
    )
  }
}

export default Comment
