import React, { Component } from 'react';
import TextField from './Textfield';
import './ContactUs.css';
import '../../assets/css/scss/import.css';
import uuid from 'uuid';

class ContactUs extends Component {

  state = {
    newComment: "",
    error: []
  };

  renderError() {
    if(!this.state.error) {return null;}
    return <div>{ this.state.error.map( (error, i) => <p className="errorInput" key={i}> { error.err } </p> )}</div>;
  }

  render(){
    return (
      <div id="Contact" className="block paralax clearfix transform">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h1 text-center padding-bottom-3 margin-top-0">Contact Us</h2>
            <p className="lead text-center margin-bottom-0">We are driven by creating experiences that deliver results.</p>
              <div className="choke padding-bottom-0">
                <div className="row">
                  <form onSubmit={this.handleCreate}>
                    <div className="col-md-6">
                      <TextField placeholder="Your name" ref="username" />
                    </div>
                    <div className="col-md-6">
                      <TextField placeholder="E-mail" ref="email" />
                    </div>
                    <div className="col-md-12 padding-bottom-3">
                      <TextField placeholder="Message" ref="comment" />
                    </div>
                    {this.renderError()}
                    <div className="col-md-12 padding-top-3">
                      <input type="submit" className="btn btn-block center btn-md btn-royal-light" value="Get in touch" />
                    </div>
                  </form>
                </div>

                <div className="row padding-top-3">
                  <div className="col-md-12">
                    <p className="text-center text-muted padding-top-3">Or just email us:</p>
                    <div className="text-center">
                      <a href="" className="lead text-muted">
                        <span>
                          <span className="transform">hello@productstudio.valic.com</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleCreate = (event) => {
    event.preventDefault();

    const usernameInput = this.refs.username.value;
    const emailInput = this.refs.email.value;
    const commentInput = this.refs.comment.value;

    const validateInput = this.validateInput(usernameInput, emailInput, commentInput)


    if(validateInput) {
      this.setState({ error: this.state.error });
      return;
    }

    this.setState({ error: [] });
  }

  validateInput(usernameInput, emailInput, commentInput) {
    if(!usernameInput || !emailInput || !commentInput){
      this.state.error = [];
      if(!usernameInput){
        this.state.error.push({ err: "Please enter Username" });
      }
      if(!emailInput){
        this.state.error.push({ err: "Please enter Email" });
      }
      if(!commentInput){
        this.state.error.push({ err: "Please enter Comment" });
      }
      return this.state.error;
    }
    else {
      return null;
    }
  }
}

ContactUs.propTypes = {
  name: React.PropTypes.string,
  email: React.PropTypes.string,
  message: React.PropTypes.string
}

export default ContactUs;
