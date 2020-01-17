import { createAction, handleActions } from 'redux-actions';
import { List, Map, fromJS } from 'immutable';
import { applyPenders } from 'redux-pender';

import * as api from 'lib/api/join';


// 1. Action Types
const JOIN = 'app/auth/JOIN';



// 2. ActionCreator
const join = createAction(JOIN, api.join);


// 3. state
const INITIAL_STATE = Map({
  id: '',
  email: '',
  password: '',
  name: '',
});


// 4. reducer
const reducer = handleActions({



}, INITIAL_STATE);


// 5. Pender reducer
export default applyPenders(reducer, [
  {
    type: JOIN,
    onSuccess: (state, action) => {

    },
    onFailure: (state, action) => {

    },
    onPending: (state, action) => {

    },
    onError: (state, action) => {

    }
  },
])
