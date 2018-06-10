import { ADD_ITEM } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      // return state.concat([ action.payload.data ]);
      console.log('what is the state ----> ', state);
      return [ action.payload, ...state ];
  }

  return state;
}
