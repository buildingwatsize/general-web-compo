// #############
// ## REDUCER ##
// #############

const initialState = {
  // numberOfWallet: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    // case "SET_NUMBER_OF_WALLET":
    //   return {
    //     ...state,
    //     numberOfWallet: action.payload
    //   }

    default:
      return state
  }
}

// ####################
// ## ACTION CREATOR ##
// ####################

export const actions = {
  // setNumberOfWallet: (number) => ({
  //   type: "SET_NUMBER_OF_WALLET",
  //   payload: number
  // }),
}