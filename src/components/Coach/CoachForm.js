//SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';

import sub_industry_list from '../Common/sub_industry_list';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { setIndustry, get_sub_industry } from '../../actions/index';

import Button from '@material-ui/core/Button';

class CoachForm extends Component {
  // MULTIPLE CALLS TO SUB_INDUSTRY ENDPOINT, DEBUG

  // shouldComponentUpdate(nextProps, nextState) {
  //   return !this.equals(nextProps, this.props); // equals() is your implementation
  // }

  // equals(nextProps, currProps) {
  //   return currProps.digits_2 == nextProps.digits_2;
  // }

  render() {
    // REDUX store
    const { handleSubmit, industry2codes, industry4codes, sub_industry } = this.props;
    const { touched, pristine, reset, submitting, error } = this.props;
    // 2 digit codes
    console.log(this.props);
    const digits_2_options = industry2codes.map(selection => {
      return (
        <option key={selection.class_code} value={selection.class_code}>
          {selection.industry}
        </option>
      );
    });
    // 4 digit codes
    let digits_4_options = null;
    if (this.props.digits_2 != null) {
      let digits_4_values = industry4codes.filter(code => {
        return code.class_code == this.props.digits_2;
      });
      digits_4_options = digits_4_values.map(value => {
        return (
          <option key={value.class_sub_code} value={value.class_sub_code}>
            {value.industry}
          </option>
        );
      });
    }

    // REDUX call to get sub_industry list
    let naic_code_options = null;
    let selected_sub_industry_title = '';

    if (this.props.digits_4 != null) {
      this.props.get_sub_industry(this.props.digits_2);
      const sub_industries_selected_list = this.props.sub_industry.filter(industry => {
        return industry.class_code == this.props.digits_2;
      });

      let digits_4_str = this.props.digits_4.toString();
      if (sub_industries_selected_list != undefined) {
        naic_code_options = sub_industries_selected_list.map(sub_industry => {
          if (sub_industry.naic_code.toString().slice(0, 4) == digits_4_str) {
            selected_sub_industry_title = sub_industry.industry;
            return (
              <option key={sub_industry.naic_code} value={sub_industry.naic_code}>
                {sub_industry.industry}
              </option>
            );
          }
        });
      }
    }

    return (
      <div>
        <form
          onSubmit={() => {
            console.log('submitting page 1');
            // this.props.setIndustry(selected_sub_industry_title);
            handleSubmit();
          }}
        >
          <Typography style={{ textAlign: 'center' }}>Fields with aestrik are required</Typography>
          <div>
            <label>Industry*</label>
            <div>
              <Field name="digits_2" component="select" validate={required}>
                <option />
                {digits_2_options}
              </Field>
            </div>
          </div>
          <div>
            <label>Field*</label>
            <div>
              <Field name="digits_4" component="select" validate={required}>
                <option />
                {digits_4_options}
              </Field>
            </div>
          </div>
          <div>
            <label>Sub Industry*</label>
            <div>
              <Field name="naic_code" component="select" validate={required}>
                <option />
                {touched && (error && <span>{error}</span>)}
                {naic_code_options}
              </Field>
            </div>
          </div>
          <div>
            <label>Email*</label>
            <div>
              <Field name="email" component="input" type="email" placeholder="Email" validate={email} />
            </div>
          </div>
          <div>
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button type="button" disabled={pristine || submitting}>
              Clear Values
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// Redux
// #To-Do why is this code called twice ?
const selector = formValueSelector('coachForm');
const mapStateToProps = state => {
  return {
    industry2codes: state.industry2codes,
    industry4codes: state.industry4codes,
    sub_industry: state.sub_industry,
    digits_2: selector(state, 'digits_2'),
    digits_4: selector(state, 'digits_4')
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setIndustry, get_sub_industry }, dispatch);
}

// ReduxForm - validation
const required = value => (value ? undefined : 'Required');

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

const fields = ['digits_2', 'digits_4', 'naic_code'];

const validate = values => {
  const errors = {};
  // console.log('validate function called');

  if (!values.digits_2) {
    errors.industry = 'Industry is required';
  }

  if (!values.digits_4) {
    errors.field = 'Field is required';
  }

  return errors;

  // console.log(error);
};

CoachForm = reduxForm({
  form: 'coachForm', // a unique identifier for this form
  validate,
  destroyOnUnmount: false
})(CoachForm);

// TO-DO create validation function and connect

export default connect(mapStateToProps, mapDispatchToProps)(CoachForm);
