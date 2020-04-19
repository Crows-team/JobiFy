import React, { Component } from "react";
import { connect } from "react-redux";

import ProfileResumeMenu from "../../components/ProfileResumeMenu-component/ProfileResumeMenu";

class ProfilePage extends Component {
  renderProfileMenu = () => {
    //TODO: check profile type before for User or company
    if (this.props.profile.resume) {
      const arrMenuElement = Object.keys(this.props.profile.resume);
      const resumeSections = arrMenuElement.slice(1, arrMenuElement.length - 1);
      return <ProfileResumeMenu menu={resumeSections} />;
    }
    return <h3> loading ... </h3>;
  };

  renderResume = () => {
    return <div>User Resume</div>;
  };

  render() {
    return (
      <div>
        <div>profile Page</div>
        {this.renderProfileMenu()}
        {this.renderResume()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.userProfile
  };
};

export default connect(mapStateToProps, null)(ProfilePage);