import { COMPLETED_ITEM } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case COMPLETED_ITEM:
      // return state.concat([ action.payload.data ]);
      //console.log('what is the state of completedItem ----> ', state);
      console.log('what is reducer complete ----> ', state);

      return [ action.payload, ...state ];
  }

  return state;
}
