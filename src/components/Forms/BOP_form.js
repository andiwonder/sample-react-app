import React from 'react';
import { Field } from 'redux-form';

const BOP_Form = ({ required }) => {
  return (
    <React.Fragment>
      <div className="d-block">
        <label>Sales*</label>
        <div>
          <Field name="BOP_sales" component="input" type="text" />
        </div>
      </div>
      <div className="d-block">
        <label>Square Feet*</label>
        <div>
          <Field name="BOP_sq_feet" component="input" type="text" />
        </div>
      </div>
      <div className="d-block">
        <label>Payroll*</label>
        <div>
          <Field name="BOP_payroll" component="input" type="text" />
        </div>
      </div>
      <div className="d-block">
        <label>Value of Buildings*</label>
        <div>
          <Field name="BOP_buildings" component="input" type="text" />
        </div>
      </div>
      <div className="d-block">
        <label>Value of Property*</label>
        <div>
          <Field name="BOP_property" component="input" type="text" />
        </div>
      </div>
      <div className="d-block">
        <label>Sprinkler installed*</label>
        <div>
          <Field name="BOP_sprinkler" component="select" validate={required}>
            <option />
            <option value="yes">yes</option>
            <option value="no">no</option>
          </Field>
        </div>
      </div>
      <div className="d-block">
        <label>Building construction type*</label>
        <div>
          <Field name="BOP_construction" component="select" validate={required}>
            <option />
          </Field>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BOP_Form;
