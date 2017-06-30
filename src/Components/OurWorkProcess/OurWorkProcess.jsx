import React, { Component } from 'react';
import Placeholder from './Placeholder.jsx';
import './OurWorkProcess.css';
import '../../assets/css/scss/import.css';

class OurWorkProcess extends Component {
  render(){
    return(
      <div id="OurWorkProcess" className="block paralax clearfix OurWorkProcessStyle">
        <div className="container">
          <div className="row padding-bottom-4">
            <div className="col-md-12">
              <h2 className="h1 text-center padding-bottom-3">Our Work Process</h2>
              <p className="lead text-center"> We focus on delivering business value by developing exceptional experiences rather than developing exhaustive documentation.</p>
              <p className="lead text-center">
                We continuously and incrementally deliver value by building in small steps and embracing change as we validate our progress with users.  With each iteration, we have a potentially shippable product that could deliver value on its own.
              </p>
            </div>
          </div>

          <div className="row">
            <Placeholder placeholder="DEFINE" text="Vestibulum ante"/>
            <Placeholder placeholder="STRUCTURE" text="Vestibulum ante"/>
            <Placeholder placeholder="DESIGN" text="Vestibulum ante"/>
            <Placeholder placeholder="BUILD & TEST" text="Vestibulum ante"/>
            <Placeholder placeholder="DELIVER" text="Vestibulum ante"/>
            <Placeholder placeholder="" text="Vestibulum ante"/>
          </div>

          <div className="row">
            <div className="col-md-12 light-gray-bg rounded-lg work-process-box-stagger lastRow"></div>
          </div>

        </div>
      </div>
    );
  }
}

export default OurWorkProcess;
