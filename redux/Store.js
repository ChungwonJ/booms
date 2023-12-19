import { createStore } from 'redux';

// 액션 타입 정의
const SET_VALUE = 'SET_VALUE';
const SET_DRINKVALUE = 'SET_DRINKVALUE';

// 액션 생성자 함수
export const setValue = (value) => {
  return {
    type: SET_VALUE,
    payload: value
  };
};

export const setDrinkValue = (value) => {
  return {
    type: SET_DRINKVALUE,
    payload: value
  };
};

// 리듀서
const initialState = {
  value: [],
  dinkValue: []
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
        dinkValue: action.payload
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

export default store;