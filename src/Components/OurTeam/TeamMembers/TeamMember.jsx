import React, { Component } from 'react';
import Logo from '../../Logo/Logo';
import './TeamMember.css';
import '../../../assets/css/scss/import.css';
import teamInfo from '../teamInfo.js';

const StaffInfo = ({ name, position, email, bio }) => (
    <div className="text-center padding-top-3">
      <p className="text-muted-dark">

        <div >
          <a href="#bioScreen">
            <span className="font-bold">{name}</span><br></br>
          </a>
          <span>{position}</span><br></br>
          <span>{email}</span>
        </div>

      </p>
    </div>
)

class TeamMember extends Component {
  render() {
    return (
      <div>
          {teamInfo.map( ({ id, image, ...rest }) => (


              <div className="col-md-3 col-sm-6 col-xs-12 padding-bottom-4 team-stagger TeamMemberStyle" key={id}>
                <div align="center">
                  <a href="#bioScreen" >
                    <span className="font-bold">
                      <div className="round center img-wrapper">
                        <Logo className="thumbNailImg center" source={ image }
                          />
                      </div>
                    </span>
                  </a>
                </div>

                <StaffInfo {...rest} />
              </div>


          ))}
      </div>
    );
  }
}

export default TeamMember;
