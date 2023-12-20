import { createStore } from 'redux';

// 액션 타입 정의
const SET_VALUE = 'SET_VALUE';
const SET_DRINKVALUE = 'SET_DRINKVALUE';
const SET_BLACKNIGHT = 'SET_BLACKNIGHT';

// 액션 생성자 함수
export const setValue = (value) => {
  return {
    type: SET_VALUE,
    payload: value
  };
};

export const setDrinkValue = (drinkValue) => {
  return {
    type: SET_DRINKVALUE,
    payload: drinkValue
  };
};

export const setBlackNightInput = (blackNightInput) => {
    return {
      type: SET_BLACKNIGHT,
      payload: blackNightInput
    };
  };
  
// 리듀서
const initialState = {
  value: [],
  drinkValue: [],
  blackNightInput : []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.payload
      };

    case SET_DRINKVALUE:
      return {
        ...state,
        drinkValue: action.payload
      };

      case SET_BLACKNIGHT:
        return {
          ...state,
          blackNightInput: action.payload
        };
        
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

export default store;