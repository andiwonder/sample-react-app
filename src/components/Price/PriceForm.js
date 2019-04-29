import React, { Component } from 'react';
// import SimpleList from './SimpleList';
import Form from './Form';
import { Field, reduxForm } from 'redux-form';
// import MaterialUiForm from './MaterialForm';
import Typography from '@material-ui/core/Typography';
import policy_descriptions from '../../actions/policy_descriptions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPolicy, getQuestions } from '../../actions/index';
import SideList from '../Common/Recomendation';
import '../Forms/form.css';
import select_form from '../Forms/select_form';

class PriceForm extends Component {
  constructor(props) {
    super(props);
    this.selectPolicy = this.selectPolicy.bind(this);
    this.state = { policy: 'General Liability' };
  }

  componentWillMount() {
    this.props.getPolicy(this.props.match.params.code);
    this.props.getQuestions(this.props.match.params.code);
  }

  selectPolicy(policy_title) {
    const selected_policy = policy_descriptions.filter(policy => {
      return policy.title === policy_title;
    });
    if (selected_policy != undefined) {
      this.props.getPolicy(selected_policy[0].code);
    }
    this.setState({ policy: policy_title });
  }

  render() {
    const limits = [100000, 250000, 500000, 1000000];
    const limit_options = limits.map(limit => {
      return (
        <option key={limit} value={limit}>
          {limit}
        </option>
      );
    });

    const deductibles = [5000, 10000, 25000];
    const deductible_options = deductibles.map(deductible => {
      return (
        <option key={deductible} value={deductible}>
          {deductible}
        </option>
      );
    });

    return (
      <div style={{ paddingBottom: '5em' }}>
        <div style={{ display: 'inline-block' }}>
          {/*<SideList selectPolicy={this.selectPolicy} currentPolicy={this.state.policy} />*/}
        </div>
        <div style={{ display: 'block', verticalAlign: 'top', margin: '0 auto', width: '700px' }}>
          <Typography variant="display1" component="h2">
            {this.props.description.title}
          </Typography>
          <Typography variant="headline" component="h3">
            Description
          </Typography>
          <Typography>{this.props.description.desc}</Typography>
          <Typography variant="headline" component="h3">
            Heading Limits
          </Typography>
          <Typography>{this.props.description.limits}</Typography>
          <Typography variant="headline" component="h3">
            Dummy
          </Typography>
          <Typography>{this.props.description.dummy}</Typography>
          <form>
            <div style={{ display: 'inline-block' }}>
              <label>What is the maximum limit of coverage you want to choose?*</label>
              <div>
                <Field name="coverage_limit" component="select">
                  {limit_options}
                </Field>
              </div>
            </div>
            <div style={{ display: 'inline-block' }}>
              <label>What is the minimum deductible you would like to choose?*</label>
              <div>
                <Field name="min_deductible" component="select">
                  {deductible_options}
                </Field>
              </div>
            </div>
            {select_form(this.props.description.title)}
            <div>
              <button type="submit" className="next">
                Get quote
              </button>
              <button type="button" className="previous">
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPolicy, getQuestions }, dispatch);
}

function mapStateToProps({ description, questions }) {
  return { description, questions };
}

// export default connect(mapStateToProps, null)(withStyles(styles)(Schedule));
// export default connect(mapStateToProps, mapDispatchToProps)(PriceForm);

export default reduxForm({
  form: 'priceForm' //Form name is same
})(connect(mapStateToProps, mapDispatchToProps)(PriceForm));
