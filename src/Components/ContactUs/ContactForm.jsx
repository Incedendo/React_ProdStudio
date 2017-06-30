import React, { Component } from 'react';
import TextField from './Textfield';
import './ContactUs.css';
import './ContactForm.css';
import '../../assets/css/scss/import.css';
import PropTypes from 'prop-types';

const contactUsFormConfig = [
  {
    placeholder: "username",
    id: "username",
    classes: "col-md-6",
    noErrorClasses: "fl-input-container",
    errorClasses: "fl-input-container error",
    email: false
  },
  {
    placeholder: "email",
    id: "email",
    classes: "col-md-6",
    noErrorClasses: "fl-input-container",
    errorClasses: "fl-input-container error",
    email: true
  },
  {
    placeholder: "comment",
    id: "comment",
    classes: "col-md-12 padding-bottom-3",
    noErrorClasses: "fl-input-container",
    errorClasses: "fl-input-container error",
    email: false
  },
]

export default class ContactForm extends Component {

  state = {
    isSubmitted: false,
    username: "",
    email: "",
    comment: "",
    errors: []
  };

  handleTextFieldChange = (event, id) => {
    this.setState({
      [id]: event.target.value
    })
  }

  renderError() {
    if(!this.state.errors.length) {return null;}
    return(
      <div className='errorBox'>
        { this.state.errors.map( (error, i) => <p className="errorInput" style={{color: 'white'}}key={i}> { error.err } </p> )}
      </div>
    );
  }

  renderForm() {
    const formConfig = contactUsFormConfig.map(({id, ...rest}) => ({
      id,
      ...rest,
      onChangeHook: event => this.handleTextFieldChange(event,id),
    }))

    return(
      formConfig.map( ({classes,noErrorClasses, errorClasses, id, ...rest}) => {
        if(!this.state.isSubmitted){
          return (
            <div className={classes} key={id}>
              <TextField id={id} classes={noErrorClasses} {...rest}/>
            </div>
          );
        }else{
          if(!this.state[id]){
            return (
              <div className={classes} key={id}>
                <TextField id={id} classes={errorClasses} {...rest}/>
              </div>
            );
          }
          else{
            return (
              <div className={classes} key={id}>
                <TextField id={id} classes={noErrorClasses} {...rest}/>
              </div>
            );
          }
        }
      })
    );
  }

  handleCreate = (event) => {
    event.preventDefault();
    console.log(this.state.username);
    this.setState({ isSubmitted: true });

    const validateInput = this.validateInput(this.state.username, this.state.email, this.state.comment)

    if(validateInput) {
      this.setState({ errors: this.state.errors });
      return;
    }

    this.setState({ errors: [] });
  }

  validateInput(usernameInput, emailInput, commentInput) {
    if(!usernameInput || !emailInput || !commentInput){
      this.state.errors = [];
      if(!usernameInput){
        this.state.errors.push({ err: "Please enter Username" });
      }
      if(!emailInput){
        this.state.errors.push({ err: "Please enter Email" });
      }
      if(!commentInput){
        this.state.errors.push({ err: "Please enter Comment" });
      }
      return this.state.errors;
    }
    else {
      return null;
    }
  }

  render(){
    return (
      <form onSubmit={this.handleCreate}>
        {this.renderForm()}
        <div className="col-md-12 padding-top-3">
          <input type="submit" className="btn btn-block center btn-md btn-royal-light" value="Get in touch" />
        </div>
        {this.renderError()}
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string
}
