import { searchConstant } from "../_constants";
import { userService } from "../_services";

export const searchActions = {
  search
};

function search() {
  return dispatch => {
    dispatch(request());

    userService.search().then(
      results => {
        dispatch(success(results));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: searchConstant.SEARCH_REQUEST };
  }
  function success(results) {
    console.log("success", results);
    return { type: searchConstant.SEARCH_SUCCESS, results };
  }
  function failure(error) {
    return { type: searchConstant.SEARCH_FAILURE, error };
  }
}
