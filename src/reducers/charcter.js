const initialState = {
  charcters: [],
  isloading: true,
  error: false,
};

export default function charcterReducer(
  state = initialState,
  action,
) {
  // eslint-disable-next-line no-console
  switch (action.type) {
    case 'FETCH_CHARCTER_BEGIN':
      return {
        ...state,
        isloading: true,
        error: null,
      };

    case 'FETCH_CHARCTER_SUCCESS':
      console.log('FETCH_CHARCTER_SUCCESS>>>>>> Reducer', action);
      return {
        ...state,
        isloading: false,
        charcters: action.data.results,
        info: action.data.info,
      };

    case 'FETCH_CHARCTER_FAILURE':
      return {
        ...state,
        isloading: false,
        error: 'error',
      };

    default:
      return state;
  }
}
