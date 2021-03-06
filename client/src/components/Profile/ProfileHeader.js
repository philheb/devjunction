import React, { Component } from 'react'
import isEmpty from '../../validation/is-empty'

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg1-light text-light mb-3 shadow">
              <div className="row">
                <div className="col-4 col-md-3 m-auto">
                  <img className="rounded-circle shadow" src={profile.user.avatar} alt="" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="display-4 text-light text-center">{profile.user.name}</h1>
                <p className="lead text-center">
                  {profile.status}{' '}
                  {isEmpty(profile.company) ? null : <span>at {profile.company}</span>}
                </p>
                {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
                <p>
                  {isEmpty(profile.website) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-globe accent2 fa-2x" />
                    </a>
                  )}

                  {isEmpty(profile.social && profile.social.twitter) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter accent2 fa-2x" />
                    </a>
                  )}

                  {isEmpty(profile.social && profile.social.facebook) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook accent2 fa-2x" />
                    </a>
                  )}

                  {isEmpty(profile.social && profile.social.linkedin) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin accent2 fa-2x" />
                    </a>
                  )}

                  {isEmpty(profile.social && profile.social.instagram) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram accent2 fa-2x" />
                    </a>
                  )}

                  {isEmpty(profile.social && profile.social.youtube) ? null : (
                    <a
                      className="text-white p-2"
                      href={profile.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube accent2 fa-2x" />
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileHeader
