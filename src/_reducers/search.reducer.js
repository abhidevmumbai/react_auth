import { searchConstant } from '../_constants';

const initialState = {
    searching: false,
    keyword: '',
    results: []
};

export function search(state = initialState, action) {
  switch (action.type) {
    case searchConstant.SEARCH_REQUEST:
      return {
        ...state,
        searching: true,
        keyword: action.keyword
      };
    case searchConstant.SEARCH_SUCCESS:
      console.log('action', action)
      return {
        ...state,
        searching: false,
        results: action.results
      };
    case searchConstant.SEARCH_FAILURE:
      return {
        ...state,
        searching: false,
        error: action.error
      };
    default:
      return state
  }
}