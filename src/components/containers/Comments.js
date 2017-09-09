import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

import Comment from '../presentation/Comment';

import styles from './styles';

class Comments extends React.Component {
  constructor( ) {
    super( )
    this.state = {
      list: [
      ],
      comment: {
        body: '',
        username: '',
        timestamp: ''
      }
    }
  }
  componentDidMount(){
    console.log("componentDidMount");
    superagent.get('/api/comment')
    .query(null)
    .set('Application', 'application/json')
    .end((err, response) => {
      if(err){
        alert('ERROR: ' + err)
        return
      }
      let results = response.body.results
      this.setState({
        list: results
      })
    })
  }
  submitComment( ) {
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.comment)
    this.setState({
      list: updatedList
    })
    let updatedComment = Object.assign( {}, this.state.comment )
    updatedComment = {
      username: '',
      body: ''
    }
    this.setState({ comment: updatedComment })
  }
  updateUsername( event ) {
    let updatedComment = Object.assign( {}, this.state.comment )
    updatedComment.username = event.target.value
    updatedComment.timestamp = new Date();
    this.setState({ comment: updatedComment })
  }
  updateBody( event ) {
    let updatedComment = Object.assign( {}, this.state.comment )
    updatedComment.body = event.target.value
    updatedComment.timestamp = new Date();
    this.setState({ comment: updatedComment })
  }
  render( ) {
    const commentStyles = styles.comment
    const commentList = this.state.list.map(( currentComment, i ) => {
      i += 1
      return (
        <li key={i} style={{
          listStyleType: 'none'
        }}>
          <Comment currentComment={currentComment}/>
        </li>
      )
    })
    return (
      <div>
        <h2>Comments for Zone 1</h2>
        <div style={commentStyles.commentsBox}>
          <ul style={commentStyles.commentsList}>
            {commentList}
          </ul>
          <input onChange={this.updateUsername.bind( this )} type="text" className="form-control" ref="username" placeholder="Username"/><br/>
          <input onChange={this.updateBody.bind( this )} type="text" className="form-control" ref="body" placeholder="Comment"/><br/>
          <button onClick={this.submitComment.bind( this )} className="btn btn-info">Submit Comment</button>
        </div>
      </div>
    )
  }
}

export default Comments
