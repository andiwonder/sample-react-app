import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import SideList from '../Common/Recomendation';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import Examples from './quote_page/Examples';
import Exlcusions from './quote_page/Exclusions';
import Enhancements from './quote_page/Enhancements';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getPolicyDetails, getPolicy, getQuestions } from '../../actions/index';
import policy_descriptions from '../../actions/policy_descriptions';

class CoachFormSecondPage extends Component {
  constructor(props) {
    super(props);
    this.selectPolicy = this.selectPolicy.bind(this);
    this.state = { policy: 'GL' };
  }

  componentWillMount() {
    this.props.getPolicyDetails(this.props.naic_code, 'GL');
  }

  selectPolicy(policy_title) {
    this.props.getPolicyDetails(this.props.naic_code, policy_title);
    // const selected_policy = policy_descriptions.filter(policy => {
    //   return policy.title === policy_title;
    // });
    // if (selected_policy != undefined) {
    //   this.props.getPolicy(selected_policy[0].code);
    // }
    this.setState({ policy: policy_title });
  }

  render() {
    const { handleSubmit, previousPage } = this.props;
    const { description } = this.props.policy_details;

    if ((this.props.policy_details, description == undefined)) {
      return <CircularProgress color="secondary" />;
    }

    const { recomendations, enhancements, examples, exclusions } = this.props.policy_details;
    const { essentials, add_ons } = recomendations[0];
    return (
      <div style={{ display: 'flex', flexDirection: 'row', fexWrap: 'wrap' }}>
        <div style={{ flex: 1, position: 'sticky', alignSelf: 'flex-start', top: '5em' }}>
          {/*Where Policy is selected*/}
          <SideList
            selectPolicy={this.selectPolicy}
            currentPolicy={this.state.policy}
            add_ons={add_ons}
            essentials={essentials}
          />
        </div>
        <div style={{ flex: 3, marginLeft: '2em' }}>
          <Paper elevation={1} style={{ padding: '2em', marginBottom: '5em' }}>
            <div style={{ maxWidth: '100%' }}>
              <Typography variant="headline" component="h2" gutterBottom>
                {description.policy_name} for
              </Typography>
              <Typography variant="display1" component="h2" gutterBottom>
                TO-DO selected_industry
              </Typography>
              <Typography variant="title" component="h3" gutterBottom>
                Description - TO-DO
              </Typography>
              <Typography variant="title" component="h3" gutterBottom>
                Fine Print - TO-DO (limits)
              </Typography>
            </div>
            <Examples props={examples[0]} />
            <Enhancements props={enhancements[0]} />
            <Exlcusions props={exclusions[0]} />
            <div>
              <Typography variant="title" component="h3" gutterBottom>
                TO-DO Dummy
              </Typography>
            </div>
          </Paper>
        </div>
        <div style={{ flex: 1.25, position: 'sticky', alignSelf: 'flex-start', top: '5em', padding: '1em' }}>
          <form onSubmit={handleSubmit}>
            <div>
              <Typography variant="subheading" gutterBottom>
                Interested in what YOU pay for <br /> {description.policy_name} ?
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
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPolicyDetails, getPolicy }, dispatch);
}

const selector = formValueSelector('coachForm');
const mapStateToProps = state => {
  return {
    policy_details: state.policy_details,
    selected_industry: state.selected_industry,
    naic_code: selector(state, 'naic_code')
  };
};

export default reduxForm({
  form: 'coachForm', //Form name is same
  destroyOnUnmount: false
})(connect(mapStateToProps, mapDispatchToProps)(CoachFormSecondPage));
// export default connect(mapStateToProps, null)(withStyles(styles)(Schedule));

// export default CoachFormSecondPage;
