import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import descriptionReducer from './descriptionReducer';
import questionsReducer from './questionsReducer';
import industryReducer from './industryReducer';
import industry2CodesReducer from './industry2CodesReducer';
import industry4CodesReducer from './industry4CodesReducer';
import subIndustryReducer from './subIndustryReducer';
import policyDetailsReducer from './policyDetailsReducer';

export default combineReducers({
  // remove description : descriptionReducer, no longer needed, see policy_details
  description: descriptionReducer,
  form: reduxForm,
  policy_details: policyDetailsReducer,
  industry2codes: industry2CodesReducer,
  industry4codes: industry4CodesReducer,
  sub_industry: subIndustryReducer,
  // remove questions : questionsReducer, no longer needed, see policy_details
  questions: questionsReducer,
  selected_industry: industryReducer
});
