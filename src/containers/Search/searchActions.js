import * as constants from './searchConstants';

export const getBrowseStart = () => ({
  type: constants.GET_BROWSE_START
});

export const getBrowseSuccess = payload => ({
  type: constants.GET_BROWSE_SUCCESS,
  payload
});

export const getBrowseFailure = payload => ({
  type: constants.GET_BROWSE_FAILURE,
  payload
});
