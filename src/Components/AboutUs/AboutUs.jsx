import React from 'react';
import './AboutUs.css';
import '../../assets/css/scss/import.css';

const AboutUs = () => (
  <div id="AboutUs" className="block paralax clearfix about-us-fade AboutUsStyle">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="h1 text-center padding-bottom-3">About Us</h2>
          <p className="lead text-center bold">
            CREATIVE</p>
          <p className="lead text-center">
            The team is responsible for the usability, design, and user testing for all the products in the product studio.

            The team will be responsible for:
            Product Ideation
            User Story Generation
            Proof of Concepts
            Wireframes / User Flows
            HTML
            Interactive Prototypes
            User Testing
          </p>

          <p className="lead text-center bold">
            PRODUCT DEVELOPMENT</p>
          <p className="lead text-center padding-bottom-0 margin-bottom-0">
            The team is responsible for developing
new products, enhancing existing, and maintaining existing products.
The team will be responsible for: Develop New Product Enhance Existing Products Maintain (SRs & INC) Technical Proof of Concepts
          </p><br></br>

          <p className="lead text-center bold">
            PROJECT MANAGEMENT</p>
          <p className="lead text-center padding-bottom-0 margin-bottom-0">
            The team is responsible for planning, executing, controlling, and closing the work of a team to achieve specific goals and meet specific success criteria.
          </p>
        </div>
      </div>
    </div>
  </div>
)
export default AboutUs;
