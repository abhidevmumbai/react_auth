import { searchConstant } from '../_constants';

const initialState = {
    keyword: '',
    results: []
};

export function search(state = initialState, action) {
  switch (action.type) {
    case searchConstant.SEARCH_REQUEST:
      return {
        searching: true
      };
    case searchConstant.SEARCH_SUCCESS:
      console.log('action', action)
      return {
        searching: false,
        results: action.results
      };
    case searchConstant.SEARCH_FAILURE:
      return {
        searching: false,
        error: action.error
      };
    default:
      return state
  }
}