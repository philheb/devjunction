import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import TextFieldGroup from '../Form/TextFieldGroup'
import TextAreaFieldGroup from '../Form/TextAreaFieldGroup'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addEducation } from '../../actions/profileActions'

class AddEducation extends Component {
  state = {
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
    errors: {},
    disabled: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onSubmit = event => {
    event.preventDefault()
    const { school, degree, fieldofstudy, from, to, current, description } = this.state
    const data = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description,
    }
    this.props.addEducation(data, this.props.history)
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onCheck = event => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current,
    })
  }

  render() {
    return (
      <div>
        <div className="section add-education">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <Link to="/dashboard" className="btn btn-light">
                  Go Back
                </Link>
                <h1 className="display-4 text-center">Add Your Education</h1>
                <p className="lead text-center">
                  Add any school, bootcamp, etc that you have attended
                </p>
                <small className="d-block pb-3">* = required field</small>
                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="* School"
                    name="school"
                    value={this.state.school}
                    onChange={this.onChange}
                    error={this.state.errors.school}
                  />
                  <TextFieldGroup
                    placeholder="* Degree or Certification"
                    name="degree"
                    value={this.state.degree}
                    onChange={this.onChange}
                    error={this.state.errors.degree}
                  />
                  <TextFieldGroup
                    placeholder="* Field of Study"
                    name="fieldofstudy"
                    value={this.state.fieldofstudy}
                    onChange={this.onChange}
                    error={this.state.errors.fieldofstudy}
                  />
                  <h6>From Date</h6>
                  <TextFieldGroup
                    name="from"
                    type="date"
                    value={this.state.from}
                    onChange={this.onChange}
                    error={this.state.errors.from}
                  />
                  <h6>To Date</h6>
                  <TextFieldGroup
                    name="to"
                    type="date"
                    value={this.state.to}
                    onChange={this.onChange}
                    error={this.state.errors.to}
                    disabled={this.state.disabled ? 'disabled' : ''}
                  />
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="current"
                      value={this.state.current}
                      checked={this.state.current}
                      onChange={this.onCheck}
                      id="current"
                    />
                    <label className="form-check-label" htmlFor="current">
                      Current Job
                    </label>
                  </div>
                  <TextAreaFieldGroup
                    placeholder="Program Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                    error={this.state.errors.description}
                    info="Tell us about the program you where in"
                  />
                  <input type="submit" value="Submit" className="btn btn-primary btn-block mt-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
})

export default connect(
  mapStateToProps,
  { addEducation }
)(withRouter(AddEducation))