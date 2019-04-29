import React from 'react';
import { Field } from 'redux-form';

const CV_Form = ({ required }) => {
  return (
    <React.Fragment>
      <div className="d-block">
        <label>What car*</label>
        <div>
          <Field name="CV_car" component="input" type="text" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CV_Form;
