import { AUTH_ACTIONS } from '../actionCreators';

const initialState = {
  isLoggedIn: false
};

export default function AuthentificationReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTIONS.SET_AUTHENTIFICATIONS: {
      return {
        isLoggedIn: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
