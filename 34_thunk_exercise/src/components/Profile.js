import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Profile extends Component {
  renderSpinner() {
    return (
      <div>
        <img alt="spinner" src="loading-bars.svg" />
        <h1>Loading...</h1>
      </div>
    );
  }

  renderProfile() {
    const { profile } = this.props;
    if (profile.firstName) {
      return (
        <div>
          <img src={profile.picture} alt="pic" />
          <h3>{profile.firstName}</h3>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="Profile">
        <div className="profile-container">
          {this.props.loading ? this.renderSpinner() : this.renderProfile()}
        </div>
        <div className="button-container">
          <button
            className="btn btn-warning btn-lg"
            onClick={this.props.fetchProfile}
          >
            Click this Button
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loading, profile }) => {
  return {
    loading,
    profile
  };
};

export default connect(mapStateToProps, actions)(Profile);
