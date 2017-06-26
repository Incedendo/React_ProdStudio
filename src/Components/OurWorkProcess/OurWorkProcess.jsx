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
              <p className="lead text-center"> Vestibulum ante ipsum primis in faucibus orci luctus et. Vivamus at velit dui. Nullam ultricies urna id leo lacinia nec.</p>
            </div>
          </div>

          <div className="row">
            <Placeholder placeholder="Placeholder" text="Vestibulum ante"/>
            <Placeholder placeholder="Placeholder" text="Vestibulum ante"/>
            <Placeholder placeholder="Placeholder" text="Vestibulum ante"/>
            <Placeholder placeholder="Placeholder" text="Vestibulum ante"/>
            <Placeholder placeholder="Placeholder" text="Vestibulum ante"/>
            <Placeholder placeholder="Placeholder" text="Vestibulum ante"/>
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
