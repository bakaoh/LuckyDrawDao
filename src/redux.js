// action types
const ACCOUNT_REQUEST = 'ACCOUNT_REQUEST';
const ACCOUNT_SUCCESS = 'ACCOUNT_SUCCESS';
const ACCOUNT_FAILURE = 'ACCOUNT_FAILURE';

const INFO_REQUEST = 'INFO_REQUEST';
const INFO_SUCCESS = 'INFO_SUCCESS';
const INFO_FAILURE = 'INFO_FAILURE';

const COMMIT_REQUEST = 'COMMIT_REQUEST';
const COMMIT_SUCCESS = 'COMMIT_SUCCESS';
const COMMIT_FAILURE = 'COMMIT_FAILURE';

const REVEAL_REQUEST = 'REVEAL_REQUEST';
const REVEAL_SUCCESS = 'REVEAL_SUCCESS';
const REVEAL_FAILURE = 'REVEAL_FAILURE';

const CREATE_REQUEST = 'CREATE_REQUEST';
const CREATE_SUCCESS = 'CREATE_SUCCESS';
const CREATE_FAILURE = 'CREATE_FAILURE';

// reducer with initial state
const initialState = {
  fetching: false,
  account: null,
  info: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_REQUEST:
      return { ...state, fetching: true, error: null };
    case ACCOUNT_SUCCESS:
      return { ...state, fetching: false, account: action.account };
    case ACCOUNT_FAILURE:
      return {
        ...state, fetching: false, data: null, error: action.error
      };
    case INFO_REQUEST:
      return { ...state, fetching: true, error: null };
    case INFO_SUCCESS:
      return { ...state, fetching: false, info: action.info };
    case INFO_FAILURE:
      return {
        ...state, fetching: false, data: null, error: action.error
      };
    case COMMIT_REQUEST:
      return { ...state, fetching: true, error: null };
    case COMMIT_SUCCESS:
      return { ...state, fetching: false, data: action.data };
    case COMMIT_FAILURE:
      return {
        ...state, fetching: false, data: null, error: action.error
      };
    case REVEAL_REQUEST:
      return { ...state, fetching: true, error: null };
    case REVEAL_SUCCESS:
      return { ...state, fetching: false, data: action.data };
    case REVEAL_FAILURE:
      return {
        ...state, fetching: false, data: null, error: action.error
      };
    case CREATE_REQUEST:
      return { ...state, fetching: true, error: null };
    case CREATE_SUCCESS:
      return { ...state, fetching: false, data: action.data };
    case CREATE_FAILURE:
      return {
        ...state, fetching: false, data: null, error: action.error
      };
    default:
      return state;
  }
}
