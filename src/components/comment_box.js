import React, { Component } from 'react'

export default class CommentBox extends Component {
constructor(props){
  super(props)

  this.state = {comment: ''}

}

  handleSubmit(e){
    this.setState({comment: ''})
  }

  HandelChange(e){
    e.preventDefault();
    this.setState({comment: e.target.value})
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
