import React, { Component } from 'react';
import TextField from './Textfield';
import './ContactUs.css';
import '../../assets/css/scss/import.css';
import uuid from 'uuid';

const contactUsFormConfig = [
  {
    placeholder: "username",
    id: "username",
    classes: "col-md-6",
    email: false
  },
  {
    placeholder: "email",
    id: "email",
    classes: "col-md-6",
    email: true
  },
  {
    placeholder: "comment",
    id: "comment",
    classes: "col-md-12 padding-bottom-3",
    email: false
  },
]

export default class ContactForm extends Component {

  state = {
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
    if(!this.state.errors) {return null;}
    return(
      <div className='errorBox'>
        { this.state.errors.map( (error, i) => <p className="errorInput" key={i}> { error.err } </p> )}
      </div>
    );
  }

  renderForm() {
    const formConfig = contactUsFormConfig.map(({id, ...rest}) => ({
      id,
      ...rest,
      onChangeHook: event => this.handleTextFieldChange(event,id),
    }))

    return formConfig.map(({classes, id, ...rest}) => (
      <div className={classes} key={id}>
        <TextField id={id} {...rest}/>
      </div>
    ))
  }

  handleCreate = (event) => {
    event.preventDefault();
    console.log(this.state.username);

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
        {this.renderError()}
        <div className="col-md-12 padding-top-3">
          <input type="submit" className="btn btn-block center btn-md btn-royal-light" value="Get in touch" />
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: React.PropTypes.string,
  email: React.PropTypes.string,
  message: React.PropTypes.string
}
