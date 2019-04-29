import React from 'react';
import { Field } from 'redux-form';

const CY_Form = ({ required }) => {
  return (
    <React.Fragment>
      <div className="d-block">
        <label>Do you regularly change your password*</label>
        <div>
          <Field name="CY_password" component="select" validate={required}>
            <option />
            <option value="yes">yes</option>
            <option value="no">no</option>
          </Field>
        </div>
      </div>
      <div className="d-block">
        <label>Are employees using their own devices*</label>
        <div>
          <Field name="CY_devices" component="select" validate={required}>
            <option />
            <option value="yes">yes</option>
            <option value="no">no</option>
          </Field>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CY_Form;
