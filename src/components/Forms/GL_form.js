import React from 'react';
import { Field } from 'redux-form';

const GL_Form = ({ required }) => {
  return (
    <React.Fragment>
      <div className="d-block">
        <label>Sales*</label>
        <div>
          <Field name="GL_sales" component="input" type="text" />
        </div>
      </div>
      <div className="d-block">
        <label>Square Feet*</label>
        <div>
          <Field name="GL_sq_feet" component="input" type="text" />
        </div>
      </div>
      <div className="d-block">
        <label>Payroll*</label>
        <div>
          <Field name="GL_payroll" component="input" type="text" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GL_Form;
