/* selectors */
export const carrer = ({carrer}) => carrer.data;

/* action name creator */
const reducerName = 'carrer';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
      };
    }
    default:
      return statePart;
  }
};
