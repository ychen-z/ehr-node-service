import { CHANGE_LIST } from "./constants";

const defaultState = {
  name: 'sanyuan',
  newsList: []
};

export default (state = defaultState, action) => {
  console.log(action);
  switch(action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        newsList: action.list
      };
    case "ORDER_LOG":
      return {
        ...state,
        newsList: action.payload.data
      };
    default:
      return state;
  }
}