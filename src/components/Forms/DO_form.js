import React from 'react';
import { Field } from 'redux-form';

const DO_Form = ({ required }) => {
  return (
    <React.Fragment>
      <div className="d-block">
        <label>Sales*</label>
        <div>
          <Field name="DO_sales" component="input" type="text" />
        </div>
      </div>
      <div className="d-block">
        <label>M&A Activity last three years*</label>
        <div>
          <Field name="DO_ma_activity" component="select" validate={required}>
            <option />
          </Field>
        </div>
      </div>
      <div className="d-block">
        <label>Level of confidence in the Industry*</label>
        <div>
          <Field name="DO_level_of_confidence" component="select" validate={required}>
            <option />
          </Field>
        </div>
      </div>
      <div className="d-block">
        <label>SEC offering last 3 years*</label>
        <div>
          <Field name="DO_sec" component="select" validate={required}>
            <option />
          </Field>
        </div>
      </div>
      <div className="d-block">
        <label>Past D&O Litigation*</label>
        <div>
          <Field name="DO_past_litigation" component="select" validate={required}>
            <option />
          </Field>
        </div>
      </div>
      <div className="d-block">
        <label>Ongoing Litigation*</label>
        <div>
          <Field name="DO_ongoing_litigation" component="select" validate={required}>
            <option />
          </Field>
        </div>
      </div>
      <div className="d-block">
        <label>Extended discovery period*</label>
        <div>
          <Field name="DO_discovery" component="select" validate={required}>
            <option />
          </Field>
        </div>
      </div>
      <div className="d-block">
        <label>Asset base is less than ...? (in $mn)*</label>
        <div>
          <Field name="DO_asset_base" component="input" type="text" />
        </div>
      </div>
      <div className="d-block">
        <label>Market Cap is less than ...? (in $mn)*</label>
        <div>
          <Field name="DO_market_cap" component="input" type="text" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default DO_Form;

