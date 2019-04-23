import { searchConstant } from "../_constants";
import { userService } from "../_services";

export const searchActions = {
  search
};

function search(keyword) {
  return dispatch => {
    dispatch(request(keyword));

    userService.search(keyword).then(
      results => {
        dispatch(success(results));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: searchConstant.SEARCH_REQUEST, keyword };
  }
  function success(results) {
    console.log("success", results);
    return { type: searchConstant.SEARCH_SUCCESS, results };
  }
  function failure(error) {
    return { type: searchConstant.SEARCH_FAILURE, error };
  }
}
