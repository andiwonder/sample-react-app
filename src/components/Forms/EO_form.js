import React from 'react';
import { Field } from 'redux-form';

const EO_Form = ({ required }) => {
  return (
    <React.Fragment>
      <div className="d-block">
        <label>Sales*</label>
        <div>
          <Field name="EO_sales" component="input" type="text" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default EO_Form;
