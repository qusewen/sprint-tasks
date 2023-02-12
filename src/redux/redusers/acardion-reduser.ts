import { acardionState } from '../actions/action';

const initialState = {
    acardionSet: false,
};

export const reduserAcardionState = (state = initialState, action: any) => {
  switch (action.type) {
    case acardionState.SET_ACARDION:
      return {
        ...state,
        acardion: action.payload,
      };
    case 'openAcardion':
      return { ...state, acardionSet: true };
    case 'closeAcardion':
      return { ...state, acardionSet: false };
    default:
      return state;
  }
};
