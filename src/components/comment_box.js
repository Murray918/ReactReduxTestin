import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

 class CommentBox extends Component {
constructor(props){
  super(props)

  this.state = {comment: ''}

}

  HandelChange(e){
    e.preventDefault();
    this.setState({comment: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()

    this.props.saveComment(this.state.comment)
    this.setState({comment: ''})
  }


  render() {
    return (
    <form onSubmit = {this.handleSubmit.bind(this)} className = 'comment-box'>
      <textarea
         value = {this.state.comment}
         onChange = {this.HandelChange.bind(this)}/>
      <button action = 'submit'>Submit Comment</button>
    </form>
    )
  }
}

export default connect(null, actions)(CommentBox)
