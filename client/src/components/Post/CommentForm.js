import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TextAreaFieldGroup from '../Form/TextAreaFieldGroup'
import { addComment } from '../../actions/postActions'

class CommentForm extends Component {
  state = {
    text: '',
    errors: {},
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = event => {
    event.preventDefault()

    const { user } = this.props.auth
    const { postId } = this.props

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar,
    }
    this.props.addComment(postId, newComment)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div className="post-form mb-3 shadow">
        <div className="card card-info">
          <div className="card-header bg2-light text-white">Make a comment...</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextAreaFieldGroup
                  placeholder="Reply to post"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={this.state.errors.text}
                />
              </div>
              <button type="submit" className="btn bg1 text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
})

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm)
