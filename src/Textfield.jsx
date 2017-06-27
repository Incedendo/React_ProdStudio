import React, { PureComponent } from 'react';
import { bool, string, func } from 'prop-types';
import classNames from 'classnames';

import './TextField.scss';

export default class TextField extends PureComponent {
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

// TextField.scss
@import './vars.scss';

.fl-input-container {
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  // padding: 25px;
  position: relative;
}

.fl-input-container input:not(:focus):not(.fl-valid):not(.fl-invalid) {
  color: transparent;
}

.fl-input-container input,
.fl-input-container label,
.fl-error-msg {
  -webkit-font-smoothing: antialiased;
  font-family: 'Roboto', sans-serif;
  text-shadow: none;
}

.fl-input-container input {
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  display: -moz-flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  font-size: 100%;
  // line-height: 25px;
  line-height: 30px;
  padding: 1.65rem 1.25rem .35rem;
  transition: border-color .2s ease-in-out;

  &:focus {
    border-color: $royal-light;

    & + label {
      color: $slate-dark;
    }
  }
}

.fl-input-label {
  -moz-transform-origin: left top;
  -moz-transform: scale(1) translate3d(0, 22px, 0);
  -moz-transition: 200ms ease all;
  -ms-flex-order: 1;
  -webkit-order: 1;
  -webkit-transform-origin: left top;
  -webkit-transform: scale(1) translate3d(0, 22px, 0);
  -webkit-transition: 200ms ease all;
  color: $cloud-dark;
  font-weight: normal;
  opacity: 0.75;
  order: 1;
  // padding-left: 2px;
  padding-left: 1.25rem;
  position: relative;
  top: 22px;
  pointer-events: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(0, 22px, 0);
  transition: 200ms ease all;
}

.fl-input-container input:focus + label,
.fl-input-container input.fl-valid + label,
.fl-invalid + label {
  -moz-transform: scale(0.8) translate3d(0, 5px, 0);
  -webkit-transform: scale(0.8) translate3d(0, 5px, 0);
  // color: $slate-dark;
  opacity: 1;
  transform: scale(0.8) translate3d(0, 5px, 0);
  padding-left: 1.65rem;
  position: relative;
  top: 30px;
}

.fl-input:active,
.fl-input:focus,
.fl-input-label {
  outline: 0;
}

.fl-input {
  -ms-flex-order: 2;
  -ms-flex: 1 1 auto;
  -webkit-flex: 1 1 auto;
  -webkit-order: 2;
  border: 0;
  border: 1px solid $cloud;
  // color: $slate-dark;
  flex: 1 1 auto;
  order: 2;
}

.fl-input-bar {
  -ms-flex-order: 3;
  -webkit-order: 3;
  display: block;
  order: 3;
  top: 0;
}

.fl-input-bar::after,
.fl-input-bar::before {
  -moz-transition: 200ms ease all;
  -webkit-transition: 200ms ease all;
  background: #3949AB;
  bottom: 0;
  content: "";
  height: 2px;
  position: absolute;
  transition: 200ms ease all;
  width: 0;
}

.fl-input-bar::before {
  left: 50%;
}

.fl-input-bar::after {
  right: 50%;
}

.fl-input:focus ~ .fl-input-bar::after,
.fl-input:focus ~ .fl-input-bar::before,
.fl-invalid ~ .fl-input-bar::after,
.fl-invalid ~ .fl-input-bar::before {
  width: 50%;
}

.fl-input-bar,
.fl-error-msg {
  position: relative;
  width: inherit;
}

.fl-error-msg {
  bottom: 0;
  display: inline-block;
  font-size: 13px;
  overflow: hidden;
  position: absolute;
  bottom: -24px;
  left: 22px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 90%;
  word-break: break-all;
  word-wrap: break-word;
}

.fl-invalid ~ .fl-input-bar::after,
.fl-invalid ~ .fl-input-bar::before {
  background: #E74C3C;
}

.fl-input-container .fl-input.fl-invalid + label,
.fl-error-msg {
  color: #E74C3C;
}

// vars.scss =======================
@import './_colors.scss',

// Font Variables
$futura-heavy:                          'futura-heavy', helvetica, arial, sans-serif;
$futura-medium:                         'futura-medium', helvetica, arial, sans-serif;
$futura:                                'futura', helvetica, arial, sans-serif;
$source-sans:                           'Source Sans Pro', helvetica, arial, sans-serif;
$fontsDirectory:                        '../fonts';

// Font Weights
$font-light:                           300;
$font-normal:                          400;
$font-bold:                            700;

// Base 8 Grid
$base1: 0.5rem; // 8px
$base2: 1.0rem; // 16px
$base3: 1.5rem; // 24px
$base4: 2.0rem; // 32px
$base5: 2.5rem; // 40px
$base6: 4.0rem; // 64px

// Body
$body-background-color:                $snow-light;
$body-font-family:                     $source-sans;
$body-font-size:                       1.0rem;
$body-line-height:                     1.5rem;
$body-letter-spacing:                  0.02rem;
$body-font-weight:                     $font-normal;
$body-font-color:                      $slate-dark;

//Heading
$heading-letter-spacing:               0.0625rem;

// Font Extensions
%ss-bold {
  font-family: $source-sans;
  font-weight: $font-bold;
}
%ss-normal {
  font-family: $source-sans;
  font-weight: $font-normal;
}
%ss-light {
  font-family: $source-sans;
  font-weight: $font-light;
}
%button-text-bold {
  font-family: $futura-heavy;
  text-transform: uppercase;
}
%heading-font {
  font-family: $source-sans;
  font-weight: $font-light;
  color: $body-font-color;
}
%hero-font {
  font-family: $source-sans;
  font-weight: $font-bold;
}
.font-futura{
  font-family: $futura-heavy;
  font-weight: $font-normal;
}
.section-organizer{
  font-family: $futura-heavy;
  font-weight: $font-normal; font-size: 0.85rem;
  text-transform: uppercase;
}

// Layout
$block-padding:                        70px;
$nav-bg-color:                         $sky;
$radius:                               0.0rem;
$border:                               1px;
$transition-speed-fast:                0.1s;
$transition-speed:                     0.18s;
$transition-speed-slow:                0.25s;
$large-color-block:                    $sky;

// Buttons
$button-bg-color:                       $sky;
$button-font-color:                     $snow-light;
$button-text-style:                     uppercase;

// Inputs
$input-radius:                          $radius;

// Forms (Checkbox, Radio, Inputs)
$selected-border:                      2px;
$unselected-border:                    1px;

// Links
$link-color:                            $royal;

// Grid Widths
$container-mobile: 480px;
$container-tablet: 768px;
$container-desktop: 960px;
$container-tv: 1400px;
$column-gutter: 30px;

// Border Radius
$border-radius1: 5px;
$border-radius2: 7px;
$border-radius3: 25px;
$border-radius4: 50px;

// colors.scss =======================
// Monochrome Gray Palette
$slate-light:                                #525963;
$slate:                                      #313a44;
$slate-dark:                                 #191f26;

$cloud-light:                                #d7dfe9;
$cloud:                                      #b8c4d4;
$cloud-dark:                                 #909fb3;

$snow-light:                                 #ffffff;
$snow:                                       #f9fafc;
$snow-dark:                                  #eef1f7;

// $mist-light:                                 #ffffff;
// $mist:                                       #f6f8fb;
// $mist-dark:                                  #eef1f7;

// Royal
$royal-light:                                #4c8af4;
$royal:                                      #1b4eb6;
$royal-dark:                                 #001e62;

// Sky
$sky-light:                                  #b9d9eb;
$sky:                                        #00a4e4;
$sky-dark:                                   #008ee0;

// Teal
$teal-light:                                 #00b9d1;
$teal:                                       #009ca6;
$teal-dark:                                  #005165;

// Berry
$berry-light:                                #dc2e9b;
$berry:                                      #af006e;
$berry-dark:                                 #6e1f56;

// Grape
$grape-light:                                #8875ff;
$grape:                                      #6752ee;
$grape-dark:                                 #39208f;

// Mint
$mint-light:                                 #8dc323;
$mint:                                       #509e2f;
$mint-dark:                                  #275d38;

// Pumpkin
$pumpkin-light:                              #fdb913;
$pumpkin:                                    #f89117;
$pumpkin-dark:                               #df720a;

$red-light:                                  #f87878;
$red:                                        #e03c31;
$red-dark:                                   #c41c30;

// Indicators
$error:                                      #e03c31;
$valid:                                      #509e2f;

// AIG Blue
$aig-blue-light:                             #B9D9EB;
$aig-blue:                                   #00A4E4;
$aig-blue-dark:                              #001E62;

// AIG Red
$aig-red-light:                              #ECC3B2;
$aig-red:                                    #E03C31;
$aig-red-dark:                               #C41C30;

// AIG Orange
$aig-orange-light:                           #FECB8B;
$aig-orange:                                 #E36F1E;
$aig-orange-dark:                            #A9431E;

// AIG Yellow
$aig-yellow-light:                           #F8E59A;
$aig-yellow:                                 #FDB913;
$aig-yellow-dark:                            #AD841F;

// AIG Green
$aig-green-light:                            #C2E189;
$aig-green:                                  #509E2F;
$aig-green-dark:                             #275D38;

// AIG Teal
$aig-teal-light:                             #B1E4E3;
$aig-teal:                                   #009CA6;
$aig-teal-dark:                              #004F59;

// AIG Grape
$aig-grape-light:                            #F4CDD4;
$aig-grape:                                  #AF006E;
$aig-grape-dark:                             #5E2751;


// Background Color Loops
$aig-colors:  ($aig-blue-light, aig-blue-light),
              ($aig-blue, aig-blue),
              ($aig-blue-dark, aig-blue-dark),

              ($aig-red-light, aig-red-light),
              ($aig-red, aig-red),
              ($aig-red-dark, aig-red-dark),

              ($aig-orange-light, aig-orange-light),
              ($aig-orange, aig-orange),
              ($aig-orange-dark, aig-orange-dark),

              ($aig-yellow-light, aig-yellow-light),
              ($aig-yellow, aig-yellow),
              ($aig-yellow-dark, aig-yellow-dark),

              ($aig-green-light, aig-green-light),
              ($aig-green, aig-green),
              ($aig-green-dark, aig-green-dark),

              ($aig-teal-light, aig-teal-light),
              ($aig-teal, aig-teal),
              ($aig-teal-dark, aig-teal-dark),

              ($aig-grape-light, aig-grape-light),
              ($aig-grape, aig-grape),
              ($aig-grape-dark, aig-grape-dark)

              ($aig-grape-light, aig-grape-light),
              ($aig-grape, aig-grape),
              ($aig-grape-dark, aig-grape-dark),

              ($error, error),
              ($valid, valid),

              ($slate-light, slate-light),
              ($slate, slate),
              ($slate-dark, slate-dark),

              ($cloud-light, cloud-light),
              ($cloud, cloud),
              ($cloud-dark, cloud-dark),

              ($snow-light, snow-light),
              ($snow, snow),
              ($snow-dark, snow-dark),

              ($berry-light, berry-light),
              ($berry, berry),
              ($berry-dark, berry-dark),

              ($pumpkin-light, pumpkin-light),
              ($pumpkin, pumpkin),
              ($pumpkin-dark, pumpkin-dark),

              ($sky-light, sky-light),
              ($sky, sky),
              ($sky-dark, sky-dark),

              ($royal-light, royal-light),
              ($royal, royal),
              ($royal-dark, royal-dark),

              ($teal-light, teal-light),
              ($teal, teal),
              ($teal-dark, teal-dark),

              ($mint-light, mint-light),
              ($mint, mint),
              ($mint-dark, mint-dark),

              ($grape-light, grape-light),
              ($grape, grape),
              ($grape-dark, grape-dark),

              ($sky-light, sky-light),
              ($sky, sky),
              ($sky-dark, sky-dark),

              ($red-light, red-light),
              ($red, red),
              ($red-dark, red-dark);


// BG Color Helper Classes
@each $color, $name in $aig-colors {
  .bg-#{$name} {
    background-color: $color !important;
  }
}

// Text Color Helper Classes
@each $color, $name in $aig-colors {
  .text-#{$name} {
    color: $color !important;
  }
}

// BG Gradient Helper Classes

// Sky
.bg-gradient-sky{
  background: linear-gradient($sky 0%, $sky-dark 100%);
  &.rotate{
    background: linear-gradient(-90deg, $sky 0%, $sky-dark 100%);
  }
  &.tilt{
    background: linear-gradient(150deg, $sky 0%, $sky-dark 100%);
  }
}

// Royal
.bg-gradient-royal{
  background: linear-gradient($royal 0%, $royal-dark 100%);
  &.rotate{
    background: linear-gradient(-90deg, $royal 0%, $royal-dark 100%);
  }
  &.tilt{
    background: linear-gradient(150deg, $royal 0%, $royal-dark 100%);
  }
}

// Teal
.bg-gradient-teal{
  background: linear-gradient($teal 0%, $teal-dark 100%);
  &.rotate{
    background: linear-gradient(-90deg, $teal 0%, $teal-dark 100%);
  }
  &.tilt{
    background: linear-gradient(150deg, $teal 0%, $teal-dark 100%);
  }
}

// Grape
.bg-gradient-grape{
  background: linear-gradient($grape 0%, $grape-dark 100%);
  &.rotate{
    background: linear-gradient(-90deg, $grape 0%, $grape-dark 100%);
  }
  &.tilt{
    background: linear-gradient(150deg, $grape 0%, $grape-dark 100%);
  }
}

// Slate
.bg-gradient-slate{
  background: linear-gradient($slate-light 0%, $slate 100%);
  &.rotate{
    background: linear-gradient(-90deg, $slate-light 0%, $slate 100%);
  }
  &.tilt{
    background: linear-gradient(150deg, $slate-light 0%, $slate 100%);
  }
}

// Snow
.bg-gradient-snow{
  background: linear-gradient($snow 0%, $snow-dark 100%);
  &.rotate{
    background: linear-gradient(-90deg, $snow 0%, $snow-dark 100%);
  }
  &.tilt{
    background: linear-gradient(150deg, $snow 0%, $snow-dark 100%);
  }
}
//
// // Berry
// .bg-gradient-berry{
//   background: linear-gradient($berry 0%, $berry-dark 100%);
//   &.rotate{
//     background: linear-gradient(-90deg, $berry 0%, $berry-dark 100%);
//   }
//   &.tilt{
//     background: linear-gradient(150deg, $berry 0%, $berry-dark 100%);
//   }
// }
//
// // Mint
// .bg-gradient-mint{
//   background: linear-gradient($mint 0%, $mint-dark 100%);
//   &.rotate{
//     background: linear-gradient(-90deg, $mint 0%, $mint-dark 100%);
//   }
//   &.tilt{
//     background: linear-gradient(150deg, $mint 0%, $mint-dark 100%);
//   }
// }
//
// // Berry Grape
// .bg-gradient-berry-grape{
//   background: linear-gradient($berry 0%, $grape-dark 100%);
//   &.rotate{
//     background: linear-gradient(-90deg, $berry 0%, $grape 100%);
//   }
//   &.tilt{
//     background: linear-gradient(150deg, $berry 0%, $grape 100%);
//   }
// }
//
// // Teal Grape
// .bg-gradient-teal-grape{
//   background: linear-gradient($teal 0%, $grape-dark 100%);
//   &.rotate{
//     background: linear-gradient(-90deg, $teal 0%, $grape-dark 100%);
//   }
//   &.tilt{
//     background: linear-gradient(150deg, $teal 0%, $grape-dark 100%);
//   }
// }
//
// // Sky Royal
// .bg-gradient-sky-royal{
//   background: linear-gradient($sky 0%, $royal-dark 100%);
//   &.rotate{
//     background: linear-gradient(-90deg, $sky 0%, $royal-dark 100%);
//   }
//   &.tilt{
//     background: linear-gradient(150deg, $sky 0%, $royal-dark 100%);
//   }
// }
//
// // Pumpkin Berry
// .bg-gradient-pumpkin-berry{
//   background: linear-gradient($pumpkin 0%, $berry 100%);
//   &.rotate{
//     background: linear-gradient(-90deg, $pumpkin 0%, $berry 100%);
//   }
//   &.tilt{
//     background: linear-gradient(150deg, $pumpkin 0%, $berry 100%);
//   }
// }

.blockquote, blockquote {
  border-left: none !important;
}

// Alternative BG
.bg-success {
  background-color: #dff0d8 !important;
  border: 1px solid #d0e9c6;
  color: #3c763d;
}

.bg-info {
  background-color: #d9edf7 !important;
  border: 1px solid #bcdff1;
  color: #31708f;
}

.bg-warning {
  background-color: #fcf8e3 !important;
  border: 1px solid #faf2cc;
  color: #8a6d3b;
}

.bg-danger {
  background-color: #f2dede !important;
  border: 1px solid #ebcccc;
  color: #a94442;
}


.hex-copy {
  display: none;

  &:hover {
    cursor: pointer;
  }
}

.hex {
  &:hover {
    cursor: pointer;
  }
}

.rgb {
  &:hover {
    cursor: pointer;
  }
}
