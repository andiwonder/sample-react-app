import policy_descriptions from './policy_descriptions';
import policy_questions from './policy_questions';
import {
  GET_POLICY_DESC,
  GET_POLICY_QUESTIONS,
  SET_INDUSTRY,
  SET_POLICY,
  GET_STARTING_INFO,
  GET_POLICY_DETAILS,
  // for coach form
  SET_NAIC_2_CODES,
  SET_NAIC_4_CODES,
  GET_SUB_INDUSTRY
} from './types';

// Initial loading data,
// gets naic 2 and 4 digits codes,
// look at http://localhost:8000/insurance/
export const getStartingInfo = () => async dispatch => {
  const res = await axios.get('http://localhost:8000/insurance/');
  dispatch(setNaic2Codes(res.data.NAIC_Industry_Code));
  dispatch(setNaic4Codes(res.data.NAIC_4_Digit_Industry_Code));
};

const setNaic2Codes = codes => {
  console.log('setNaic2Codes');
  console.log(codes);
  return {
    type: SET_NAIC_2_CODES,
    payload: codes
  };
};

const setNaic4Codes = codes => {
  return {
    type: SET_NAIC_4_CODES,
    payload: codes
  };
};

// Select Sub Industry and 2 and 4 digits selected
export const get_sub_industry = code => async dispatch => {
  const res = await axios.get(`http://localhost:8000/insurance/policy/${code}/sub_industry`);
  dispatch({
    type: GET_SUB_INDUSTRY,
    payload: res.data.sub_industry_list
  });
};

export const getPolicyDetails = (code, policy) => async dispatch => {
  const res = await axios.get(`http://localhost:8000/insurance/policy/${policy}/${code}/details`);
  dispatch({
    type: GET_POLICY_DETAILS,
    payload: res.data
  });
};

export const getPolicy = code => {
  const policy = policy_descriptions.filter(function(policy) {
    return policy.code == code;
  });
  return {
    type: GET_POLICY_DESC,
    payload: policy[0]
  };
};

export const getQuestions = code => {
  const policy = policy_questions.filter(function(policy) {
    return policy.code == code;
  });
  return {
    type: GET_POLICY_QUESTIONS,
    payload: policy[0].questions
  };
};

export const setIndustry = industry => {
  return {
    type: SET_INDUSTRY,
    payload: industry
  };
};

export const setPolicy = title => {
  const policy = policy_descriptions.filter(function(policy) {
    return policy.title == title;
  });

  return {
    type: SET_POLICY,
    payload: policy
  };
};
