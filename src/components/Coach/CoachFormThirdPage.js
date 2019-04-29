import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import SideList from '../Common/Recomendation';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPolicy, getQuestions } from '../../actions/index';
import policy_descriptions from '../../actions/policy_descriptions';
import Paper from '@material-ui/core/Paper';
import '../Forms/form.css';
import select_form from '../Forms/select_form';

class CoachFormSecondPage extends Component {
  constructor(props) {
    super(props);
    // this.state = { policy: 'General Liability' };
  }

  componentWillMount() {
    this.props.getQuestions(1114);
  }

  render() {
    const { handleSubmit, previousPage } = this.props;

    const Enhancements = [
      'Enhance1 for 541110 Lawyers ABC',
      'Enhance2 for If a client follows your professional advice on how to run their business and they dont get the results they hoped for, they might sue to recoup their losses.',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ];

    const Exlcusions = [
      'Exclude1 for ',
      'Exclude2 for ',
      'Exclude3 for Exclude1 for ',
      'Exclude4 111130',
      'Exclude5 111130',
      'Exclude6 111130',
      'Exclude7 111130',
      'Exclude8 111130',
      'Exclude9 111130',
      'Exclude10 111130',
      'Exclude11 111130',
      'Exclude12 111130',
      'Exclude13 111130',
      '',
      '',
      'GL_Dummy111130'
    ];

    const Exclusions_text = Exlcusions.map(en => {
      if (en != '') {
        return (
          <li>
            <Typography key={en}>{en}</Typography>
          </li>
        );
      }
    });

    const Enhancements_text = Enhancements.map(en => {
      if (en != '') {
        return (
          <li>
            <Typography key={en}>{en}</Typography>
          </li>
        );
      }
    });

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

    const questions = this.props.questions.map((question, index) => {
      console.log(question);
      if (question !== '') {
        return (
          <div key={index} style={{ display: 'block' }}>
            <label>{question}</label>
            <div>
              <Field name={`Question${index}`} component="input" type="text" />
            </div>
          </div>
        );
      }
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'row', fexWrap: 'wrap' }}>
        <div style={{ flex: 1, position: 'sticky', alignSelf: 'flex-start', top: '5em', textAlign: 'center' }}>
          <Typography>Want to select a differnt policy ?</Typography>
          <Button
            size="small"
            onClick={this.props.previousPage}
            variant="outlined"
            color="primary"
            style={{ marginTop: '1em' }}
          >
            Go Back
          </Button>
        </div>
        <div style={{ flex: 3, marginLeft: '2em' }}>
          <Paper elevation={1} style={{ padding: '2em', marginBottom: '5em' }}>
            <div style={{ maxWidth: '100%' }}>
              <Typography variant="headline" component="h2" gutterBottom>
                {this.props.description.title} for
              </Typography>
              <Typography variant="display1" component="h2" gutterBottom>
                {this.props.selected_industry}
              </Typography>
              <Typography variant="title" component="h3" gutterBottom>
                Description
              </Typography>
              <Typography gutterBottom>{this.props.description.desc}</Typography>
              <Typography variant="title" component="h3" gutterBottom>
                Heading Limits
              </Typography>
              <Typography gutterBottom>{this.props.description.limits}</Typography>
            </div>
            <form onSubmit={handleSubmit}>
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
                <Typography variant="subheading" gutterBottom>
                  Interested in what YOU pay for <br /> {this.props.description.title} ?
                </Typography>
              </div>
              <div>
                <button type="submit" className="next">
                  Get quote estimate
                </button>
              </div>
              <div>
                <Typography>Go back</Typography>
              </div>
              <div>
                <button type="button" className="previous" onClick={previousPage}>
                  Previous
                </button>
              </div>
            </form>
          </Paper>
        </div>
        <div
          style={{
            flex: 1.25,
            position: 'sticky',
            alignSelf: 'flex-start',
            top: '5em',
            textAlign: 'center',
            padding: '1em'
          }}
        >
          <Typography variant="caption" gutterBottom>
            policy
          </Typography>
          <Typography variant="title" gutterBottom>
            {this.props.description.title}
          </Typography>
          <Typography variant="caption" gutterBottom>
            Industry
          </Typography>
          <Typography variant="title" gutterBottom>
            {this.props.selected_industry}
          </Typography>
          <Typography variant="caption" gutterBottom>
            estimate based on your inputs:
          </Typography>
          <Typography variant="headline" gutterBottom>
            $750
          </Typography>
          {/*<Typography variant="caption" gutterBottom>
            click below to recalculate estimate
          </Typography>
          <Button size="small" variant="outlined" color="primary" style={{ marginTop: '1em' }}>
            Calculate
          </Button>*/}
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'coachForm', //Form name is same
  destroyOnUnmount: false
})(connect(mapStateToProps, mapDispatchToProps)(CoachFormSecondPage));

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getQuestions }, dispatch);
}

function mapStateToProps({ description, selected_industry, questions }) {
  return { description, selected_industry, questions };
}

// export default connect(mapStateToProps, null)(withStyles(styles)(Schedule));

// export default CoachFormSecondPage;
