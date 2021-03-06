import React, { Component } from 'react'
import { NavLink, withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../../actions/authActions'
import { clearCurrentProfile } from '../../../actions/profileActions'

class Navbar extends Component {
  onLogoutClick = event => {
    event.preventDefault()
    this.props.clearCurrentProfile()
    this.props.logoutUser(this.props.history)
  }

  render() {
    const { isAuthenticated, user } = this.props.auth

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/feed" activeClassName="active">
            <i className="fas fa-edit mr-1" />
            Post Feed
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/dashboard" activeClassName="active">
            <i className="fas fa-tachometer-alt mr-1" />
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="/" onClick={this.onLogoutClick} className="nav-link text-white">
            <img
              className="rounded-circle shadow"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />
            Logout
          </a>
        </li>
      </ul>
    )

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/register" activeClassName="active">
            <i className="fas fa-user-plus mr-1" />
            Sign Up
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/login" activeClassName="active">
            <i className="fas fa-user mr-1" />
            Login
          </NavLink>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg0 mb-4 shadow-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <span className="logo">
              <i className="fas fa-code" /> WebJunction
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/profiles" activeClassName="active">
                  <i className="fas fa-users mr-1" />
                  Developers
                </NavLink>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser, clearCurrentProfile }
  )(Navbar)
)
