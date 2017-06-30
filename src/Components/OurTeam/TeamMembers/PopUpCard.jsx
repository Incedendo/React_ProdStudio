import React, { Component } from 'react';
// import './PopUpCard.css';
import Logo from '../../Logo/Logo';

const TeamMemberLogo = ({ source, onClick }) => (
    <div className="round center img-wrapper">
      <Logo className="thumbNailImg center" source={ source } onClick={onClick}
        />
    </div>
)

class PopUpCard extends Component{
  state = {
    isDisplayed: false
  }

  render(){
    const isDisplayed = this.state.isDisplayed;
    let PopUpCard =(
    <div>

    </div>);

    return (
      <div></div>
    )
  }

  toggleDisplay = () => {
  		this.state.isDisplayed = !this.state.isDisplayed;
      console.log(this.state.isDisplayed );
  		this.setState({ isDisplayed: this.state.isDisplayed });
  }
}

export default PopUpCard;
