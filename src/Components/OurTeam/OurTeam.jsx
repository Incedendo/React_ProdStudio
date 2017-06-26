import React, { Component } from 'react';
import './OurTeam.css';
import TeamMember from './TeamMembers/TeamMember';
import PopUpCard from './TeamMembers/PopUpCard';
import '../../assets/css/scss/import.css';

const OurTeam = () => {
  const renderOurTeam = () => (
    <div className="container">

      <div className="row padding-bottom-4">
        <div className="col-md-12">
          <h2 className="h1 text-center padding-bottom-1">Our Team</h2>
          <p className="lead text-center text-muted-dark">Subheader Content here</p>
        </div>
      </div>

      <div className="row">
          <TeamMember />
      </div>

      <div id="bioScreen">
        <a href="#OurTeam" className="cancel">&times;</a>
      </div>
      <div id="cover" > </div>

    </div>
  )

  return (
    <div id="OurTeam" className="block paralax clearfix light-gray-bg OurTeamStyle">
      {renderOurTeam()}
    </div>
  )
}

export default OurTeam;
