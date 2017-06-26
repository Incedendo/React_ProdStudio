import React, { Component } from 'react';
import Logo from '../../Logo/Logo';
import './TeamMember.css';
import '../../../assets/css/scss/import.css';
import teamInfo from '../teamInfo.js';
import PopUpCard from './PopUpCard';
import JohnyMac from '../../../assets/img/Rounded_Headshot_Pics/Johnny_Mac@3x.png';

const StaffInfo = ({image, name, position, email, bio }) => (
    <div className="text-center padding-top-3">
      <Logo className="thumbNailImg" source={ image }/>
      <p className="text-muted-dark">
        <div >
          <a href="#loginScreen">
            <span className="font-bold">{name}</span><br></br>
          </a>
          <span>{position}</span><br></br>
          <span>{email}</span>
        </div>
        <div id="loginScreen">
          <a href="#OurTeam" className="cancel">&times;</a>
        </div>
        <div id="cover" > </div>

      </p>
    </div>
)

class TeamMember extends Component {
  render() {
    return (
      <div>
        {teamInfo.map( ({ id, ...rest }) => (
          <div className="col-md-3 col-sm-6 col-xs-12 padding-bottom-4 team-stagger TeamMemberStyle" key={id}>
            <StaffInfo {...rest}/>
          </div>
        ))}
      </div>
    );
  }
}

export default TeamMember;

// {Object.keys(employees).map(key => (
//   <div>
//     {employees[key].name}
//     <img src={employees[key].image} key={key} />
//   </div>
// ))}
