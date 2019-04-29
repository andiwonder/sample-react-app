import React, { Component } from 'react';
import CoachForm from './CoachForm';
import CoachFormSecondPage from './CoachFormSecondPage';
import CoachFormThirdPage from './CoachFormThirdPage';

import { reduxForm, Field } from 'redux-form';
// import MaterialUiForm from './MaterialForm';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPolicy, getQuestions } from '../../actions/index';

class Coach extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      page: 1
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  onSubmit(values) {
    console.log(values);
  }

  componentWillMount() {}

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;

    return (
      <div>
        {page === 1 && <CoachForm onSubmit={this.nextPage} />}
        {page === 2 && <CoachFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage} />}
        {page === 3 && <CoachFormThirdPage previousPage={this.previousPage} onSubmit={onSubmit} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Coach);
