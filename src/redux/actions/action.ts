import axios from "axios";

export const burgerState = {
  SET_BURGER: 'SET_BURGER',

};
export const acardionState = {
  SET_ACARDION: 'SET_ACARDION'
}




export const getBurgerState = () => (
  async (dispatch: any) => {
    dispatch({ type: burgerState.SET_BURGER })
    dispatch({ type: acardionState.SET_ACARDION })

  }
)