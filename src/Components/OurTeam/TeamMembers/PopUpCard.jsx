import React, { Component } from 'react';
import './PopUpCard.css';
import teamInfo from '../teamInfo.js';
import Logo from '../../Logo/Logo';

const TeamMemberLogo = ({ source }) => (
    <div className="round center img-wrapper">
      <Logo className="thumbNailImg center" source={ source }/>
    </div>
)

class PopUpCard extends Component{
  state = {
    isDisplayed: false
  }

  render(){
    const isDisplayed = this.state.isDisplayed;
    let PopUpCard = <div>{this.props.id}</div>;
    return (
      <div>
        <button className="thumbNailButton" onClick={this.toggleDisplay}>
            <TeamMemberLogo source={ this.props.img } />
        </button>
        {isDisplayed ?  <div>{PopUpCard}</div> : null}
      </div>
    )
  }

  toggleDisplay = () => {
  		this.state.isDisplayed = !this.state.isDisplayed;
      console.log(this.state.isDisplayed );
  		this.setState({ isDisplayed: this.state.isDisplayed });
  }
}

export default PopUpCard;
