import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserAvatar from 'react-user-avatar';

import './ProfileInfo.css';
import EditProfileForm from './EditProfileForm';
import Button from '../common/Button';

class ProfileInfo extends Component {
  state = { editClicked: false };

  componentDidMount() {
    const { authToken, getProfile } = this.props;
    getProfile(authToken);
  }

  renderProfileInfo = () => {
    const { firstName, lastName, gender, avatarUrl } = this.props.profile;
    return (
      <div className="profile-info">
        <div className="row justify-content-center">
          <div className="col-3">
            <UserAvatar
              size="80"
              name="Vladimir Kuchinskiy"
              colors={['#ccc', '#fafafa', '#ccaabb']}
              src={avatarUrl}
            />
          </div>
        </div>
        <hr className="mt-4" />
        <p>
          Email: <span className="pull-right">{this.props.userEmail}</span>
        </p>
        <hr />
        <p>
          First Name: <span className="pull-right">{firstName}</span>
        </p>
        <hr />
        <p>
          Last Name: <span className="pull-right">{lastName}</span>
        </p>
        <hr />
        <p>
          Gender: <span className="pull-right">{gender}</span>
        </p>
        <hr />
        <div className="row justify-content-center">
          <Button
            title="Edit profile"
            classes="btn btn-outline-primary"
            onClick={this.toggleEdit}
          />
        </div>
      </div>
    );
  };

  toggleEdit = () => {
    this.setState({ editClicked: !this.state.editClicked });
  };

  render() {
    const { firstName, lastName, gender, avatarUrl } = this.props.profile;
    return (
      <React.Fragment>
        <h2 className="row">Profile info</h2>
        <div className="row justify-content-center mt-3">
          <div className="col-5">
            {this.state.editClicked ? (
              <EditProfileForm
                onEdit={this.toggleEdit}
                avatar={avatarUrl}
                initialValues={{
                  first_name: firstName,
                  last_name: lastName,
                  gender: gender
                }}
              />
            ) : (
              this.renderProfileInfo()
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ProfileInfo.propTypes = {
  authToken: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  getProfile: PropTypes.func.isRequired
};

export default ProfileInfo;