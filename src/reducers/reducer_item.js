import _ from 'lodash';
import { ADD_ITEM, COMPLETED_ITEM, DELETE_ITEM, EDIT_ITEM } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      // return state.concat([ action.payload.data ]);
      console.log('what is the state in reducer item ----> ', state);
      return [ action.payload, ...state ];

    case COMPLETED_ITEM:
      // return state.concat([ action.payload.data ]);
      console.log('Not Without ----> ',  ...state);
      console.log('without ----> ',  _.without(state, action.payload));

      return _.without(state, action.payload);

    case DELETE_ITEM:
      // return state.concat([ action.payload.data ]);
      console.log('Not Without ----> ',  ...state);
      console.log('without ----> ',  _.without(state, action.payload));

      return _.without(state, action.payload);

  }

  return state;
}
