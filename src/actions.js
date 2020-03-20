import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL
} from './constants.js'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})


export const requestRobots = () => (dispatch) => {
  dispatch({type: REQUEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => (dispatch({ type:REQUEST_ROBOTS_SUCCESS, payload: data})))
      .catch(error => dispatch({type: REQUEST_ROBOTS_FAIL, payload: error}))
}

/*Actions are triggered. They go through any middleware.
  If its a search term change, it will go straight to the reducer, run through a nice function, update the store, and make changes to the view.
  If we requestRobots, its going to notice its a function, go into the middleware, and redux-thunk is going to say, "Alright, just dispatch Pending to the reducer, and ill let you know if I'm done with the promise and if I got any robots back."
  When it returns, its going to dispatch the success, go through the reducer, update the store, and make changes.
  */