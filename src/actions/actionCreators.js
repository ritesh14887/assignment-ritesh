export const fetchCharcterInfoBegin = () => {
  console.log('fetchCharcterInfoBegin>>>>>>acton');
  return {
    type: 'FETCH_CHARCTER_BEGIN',
  };
};


export const fetchCharcterSearchBegin = (dispatch, getState) => {
  console.log('fetchCharcterInfoSuccess>>>>>>acton');
};

export const fetchFilteredCharcterBegin = (data) => {
  console.log('fetchFilteredCharcterBegin>>>>>>acton');
  return {
    type: 'FETCH_FILTERED_CHARCTER_BEGIN',
    data,
  };
};

export const fetchCharcterInfoSuccess = (data) => {
  console.log('fetchCharcterInfoSuccess>>>>>>acton');
  return {
    type: 'FETCH_CHARCTER_SUCCESS',
    data,
  };
};

export const fetchCharcterInfoFailure = error => ({
  type: 'FETCH_CHARCTER_FAILURE',
  error,
});
