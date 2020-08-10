// #############
// ## REDUCER ##
// #############

const initialState = () => {
  return {
    role: "guest"
  }
}

export default (state = initialState(), action = {}) => {
  switch (action.type) {
    case "SET_ROLE":
      return {
        ...state,
        role: action.payload
      }
    default:
      return state
  }
}

// ####################
// ## ACTION CREATOR ##
// ####################

export const actions = {
  setRole: (role = "guest") => {
    return {
      type: "SET_ROLE",
      payload: role
    }
  },
}