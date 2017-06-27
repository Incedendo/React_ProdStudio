import React, {  Component } from 'react';
import { bool, string, func } from 'prop-types';
import classNames from 'classnames';
import '../../assets/css/scss/TextField.css';

export default class TextField extends Component {
  static propTypes = {
    id: string.isRequired,
    placeholder: string.isRequired,
    type: string,
    hasError: bool,
    errorMsg: string,
    onChangeHook: func,
    guide: bool,
    keepCharPositions: bool,
  };

  static defaultProps = {
    type: 'text',
    hasError: false,
    errorMsg: '',
    onChangeHook: undefined,
    guide: false,
    keepCharPositions: true,
  };

  state = { hasValue: false };

  onBlur = event => this.setState({ hasValue: !!event.currentTarget.value });

  onChange = (event) => {
    const { onChangeHook } = this.props;

    if (onChangeHook) onChangeHook(event);

    this.setState({ hasValue: !!event.currentTarget.value });
  }

  getInputClasses() {
    if (!this.state.hasValue) return 'fl-input';

    const { hasError } = this.props;

    return classNames(
      'fl-input',
      {
        'fl-valid': !hasError,
        'fl-invalid': hasError,
      },
    );
  }

  renderInput() {
    const {
      id,
      placeholder,
      hasError,
      errorMsg,
      onChangeHook,
      guide,
      keepCharPositions,
      ...rest
    } = this.props;

    const inputProps = {
      id,
      onBlur: this.onBlur,
      onChange: this.onChange,
      className: this.getInputClasses(),
      ...rest,
    };

    return <input {...inputProps} />;
  }

  renderErrorMessage() {
    const { hasError, errorMsg } = this.props;

    if (!this.state.hasValue || !hasError || !errorMsg) return null;

    return (
      <span className="fl-error-msg">
        {errorMsg}
      </span>
    );
  }

  render() {
    const { id, placeholder } = this.props;

    return (
      <div className="fl-input-container">
        {this.renderInput()}
        <label className="fl-input-label" htmlFor={id}>
          {placeholder}
        </label>
        {this.renderErrorMessage()}
      </div>
    );
  }
}
